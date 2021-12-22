var Web3 = require('web3')
var axios = require('axios');
var my_contract = require('./abi');
const InputDataDecoder = require('ethereum-input-data-decoder');
const { MongoClient } = require('mongodb');
require('dotenv').config();

let endPoint = process.env.INFURA_URL;

const decoder = new InputDataDecoder(my_contract.abi);

const client = new MongoClient(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

function getCurrentBlockNumber() {
  var data = JSON.stringify({
    "id": 0,
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": []
  });

  var config = {
    method: 'post',
    url: endPoint,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  return axios(config);
}

// Get the Clan change details.
async function getChangeTxSub(response, txHash, blockNumber) {

  blockNumber = parseInt(blockNumber, 16);

  const result = decoder.decodeData(response.data.result.input);

  var newClanId = parseInt(result.inputs[0].toString(10));
  var apeId = parseInt(result.inputs[1].toString(10));
  //console.log(`ApeID: ${apeId} | Clan ID: ${newClanId}`);

  // Check if this change has been saved.
  var dupCheck = await client.db("ApeOnlyIsland").collection("ApeClanChange").find({ 'ApeId': apeId, 'BlockNumber': blockNumber }).count();

  if (dupCheck === 0) {
    // Get the current clan.
    var currentClan = -1;
    var clanLookupTemp = await client.db("ApeOnlyIsland").collection("ApeClanCurrent").findOne({ 'ApeId': apeId });
    if (clanLookupTemp !== null) {
      currentClan = parseInt(clanLookupTemp.ClanId);
    }

    try {
      // save the clan change to the database.
      await client.db("ApeOnlyIsland").collection("ApeClanChange").insertOne({
        ApeId: apeId,
        PreviousClanId: currentClan,
        NewClanId: newClanId,
        BlockNumber: blockNumber,
        TxHash: txHash
      });

      await client.db("ApeOnlyIsland").collection("ApeClanCurrent").updateOne(
        {ApeId: apeId},
        {
          $set: {
            "ClanId": newClanId
          }
        },
        { upsert: true });
    } catch (e) {
      console.log(e);
    };
  }
}

// Get the Clan Change transaction.
async function getChangeTxData(txHash, blockNumber) {
  var data = JSON.stringify({
    "id": 0,
    "jsonrpc": "2.0",
    "method": "eth_getTransactionByHash",
    "params": [txHash]
  });

  var config = {
    method: 'post',
    url: endPoint,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  await axios(config)
    .then(function (response) { getChangeTxSub(response, txHash, blockNumber) })
    .catch(function (error) {
      console.log(error);
    });
}

// Get the all clan change topic transactions.
async function getClanChangeTransactions(fromBlock, toBlock) {
  var data = JSON.stringify({
    "id": 0,
    "jsonrpc": "2.0",
    "method": "eth_getLogs",
    "params": [
      {
        "address": my_contract.address,
        "fromBlock": `0x${fromBlock.toString(16)}`,
        "toBlock": `0x${toBlock.toString(16)}`,
        "topics": [
          "0xb52dda022b6c1a1f40905a85f257f689aa5d69d850e49cf939d688fbe5af5946"
        ]
      }
    ]
  });

  var config = {
    method: 'post',
    url: endPoint,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  await axios(config)
    .then(function (response) {
      response.data.result.forEach(element => getChangeTxData(element.transactionHash, element.blockNumber));
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function RunLogger() {
  var islandCount = -1;
  await client.connect();
  islandCount = await client.db("ApeOnlyIsland").collection("ApeClanStart").count({});
  await new Promise(r => setTimeout(r, 100));
  //console.log(`CurrentCount ${islandCount}`);

  const provider = new Web3.providers.HttpProvider(endPoint);
  var web3 = new Web3(provider);

  // If less than 2914, get the missing apes.
  if (islandCount < 2914) {
    var ethContract = new web3.eth.Contract(my_contract.abi, my_contract.address);

    for (var apeId = 1; apeId < 2915; apeId++) {
      // check list of databaseApes for ape id
      var apeCheck = await client.db("ApeOnlyIsland").collection("ApeClanStart").count({ 'ApeId': apeId });
      await new Promise(r => setTimeout(r, 50));

      // if not found
      if (apeCheck === 0) {
        console.log(`Ape not found: ${apeId}`)

        // call contract to get clan id.
        await ethContract.methods.getTokenClanId(apeId).call().then(function (response) {
          // add to database  
          try {
            client.db("ApeOnlyIsland").collection("ApeClanStart").insertOne({ ApeId: apeId, ClanId: parseInt(response) });
            client.db("ApeOnlyIsland").collection("ApeClanCurrent").insertOne({ ApeId: apeId, ClanId: parseInt(response) });
          } catch (e) {
            console.log(e);
          };
        }).catch(function (error) { console.log(error); });
      } else {
      }
    }
  }

  // get the last run time.
  var lastRunBlockNumber = 13462187;
  try {
    var lastRunTemp = await client.db("ApeOnlyIsland").collection("LastRun").findOne();
    await new Promise(r => setTimeout(r, 100));
    lastRunBlockNumber = parseInt(lastRunTemp.BlockNumber);
  } catch (e) {
    console.log(e);
  };


  // get the current block
  var currentBlockNumber = 13462187
  await getCurrentBlockNumber().then(function (response) {
    // Covert the hex to int
    currentBlockNumber = parseInt(response.data.result, 16);
  });

  // get the clan change transactions between block
  getClanChangeTransactions(lastRunBlockNumber, currentBlockNumber);

  // get a count of each clan type.
  var coconut_bashers_count = await client.db("ApeOnlyIsland").collection("ApeClanCurrent").count({ 'ClanId': 0 });
  await new Promise(r => setTimeout(r, 50));
  var wave_riders_count = await client.db("ApeOnlyIsland").collection("ApeClanCurrent").count({ 'ClanId': 1 });
  await new Promise(r => setTimeout(r, 50));
  var banana_rippers_count = await client.db("ApeOnlyIsland").collection("ApeClanCurrent").count({ 'ClanId': 2 });
  await new Promise(r => setTimeout(r, 50));
  var seashell_drifters_count = await client.db("ApeOnlyIsland").collection("ApeClanCurrent").count({ 'ClanId': 3 });
  await new Promise(r => setTimeout(r, 50));

  // save clan counts to database.
  try {
    await client.db("ApeOnlyIsland").collection("ApeClanCountHistory").insertOne({
      BlockNumber: currentBlockNumber,
      CoconutBashersCount: coconut_bashers_count,
      WaveRidersCount: wave_riders_count,
      BananaRippersCount: banana_rippers_count,
      SeashellDriftersCount: seashell_drifters_count
    });
    await new Promise(r => setTimeout(r, 100));
  } catch (e) {
    console.log(e);
  };

  try {
    // Update last run time.
    await client.db("ApeOnlyIsland").collection("LastRun").updateOne(
      {},
      {
        $set: {
          "BlockNumber": currentBlockNumber,
          "Time": new Date()
        }
      },
      { upsert: true }
    );
  } catch (e) {
    console.log(e);
  };

  console.log('Done');
}


RunLogger().catch(console.dir);
