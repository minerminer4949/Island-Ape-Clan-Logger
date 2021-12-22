# Island Ape Clan Logger 

Logs Ape Only Island clan changes to a mongo database. Data is collected using the ETH RPC gateway provided by Infrua.io


## Install 

1. Install the required packages  
`npm install mongodb web3 axios ethereum-input-data-decoder dotenv`  
1. Clone this repo

## Configure  
Set values in the .env file  
1. Add your Infrua API URL https://infura.io/register
1. Add your MongoDB connection string 


## Run  
`node app.js`

## Logic
1. Get a count apes in the `ApeClanStart` table  
  a. If the amount is less than 2914  
  b. Get the clan id from the island ape contract  
  c. Save the ape id and clan in to ApeClanStart `ApeClanCurrent`  
5. Get the last processed block number from the `LastRun` table
6. Get the current block number
7. Search for transactions interacting with the island ape contract using topic `0xb52dda022b6c1a1f40905a85f257f689aa5d69d850e49cf939d688fbe5af5946`
8. For each transaction found search by the transaction hash to get the transaction input data
9. Decode the input data to discover the Ape Id and new Clan Id
10. Save the clan change information to the `ApeClanChange` and `ApeClanCurrent` tables
11. Save the counts for each clan after all transactions have been processed to `ApeClanCountHistory` 
12. Update the `LastRun` table with the block number from step 3 and the current time


## Database Tables  
ApeClanStart  
```
ApeID: int,  
ClanId: int  
```

ApeClanCurrent  
```
ApeID: int,  
ClanId: int  
```

ApeClanChange  
```
ApeID: int,  
PreviousClanId: int,  
NewClanId: int,  
BlockNumber: bigint,  
TxHash: string  
```


LastRun  
```
BlockNumber: bigint,  
Time: datetime  
```

ApeClanCountHistory  
```
BlockNumber: bigint,  
CoconutBashersCount: int,  
WaveRidersCount: int,  
BananaRippersCount: int,  
SeashellDriftersCount: int  
```
