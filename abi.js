module.exports = {
    address: '0x260428e36989ee6c6829F8a6E361cba99C7a8447',
    abi:  [
            { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
            {
              "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" },
              { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "Activated", "type": "event"
            },
            {
              "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
              { "indexed": true, "internalType": "address", "name": "approved", "type": "address" },
              { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event"
            },
            {
              "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
              { "indexed": true, "internalType": "address", "name": "operator", "type": "address" },
              { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event"
            },
            {
              "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" },
              { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "Changed", "type": "event"
            },
            {
              "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" },
              { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event"
            },
            {
              "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" },
              { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
              "name": "Transfer", "type": "event"
            }, {
              "inputs": [], "name": "BATCH_LIMIT", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
              "stateMutability": "view", "type": "function"
            }, {
              "inputs": [], "name": "TOTAL_LIMIT", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
              "stateMutability": "view", "type": "function"
            }, {
              "inputs": [], "name": "activate", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
              "stateMutability": "nonpayable", "type": "function"
            }, {
              "inputs": [], "name": "activated", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
              "stateMutability": "view", "type": "function"
            }, {
              "inputs": [], "name": "activatedAt", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
              "stateMutability": "view", "type": "function"
            }, {
              "inputs": [{ "internalType": "address", "name": "account", "type": "address" },
              { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "airdrop", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
              "stateMutability": "nonpayable", "type": "function"
            }, {
              "inputs": [{ "internalType": "address", "name": "to", "type": "address" },
              { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function"
            },
            {
              "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs":
                [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
            }, {
              "inputs": [{ "internalType": "string", "name": "newBio", "type": "string" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
              "name": "changeTokenBiog", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
            },
            {
              "inputs": [{ "internalType": "uint8", "name": "clanId", "type": "uint8" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
              "name": "changeTokenClan", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
            },
            {
              "inputs": [{ "internalType": "string", "name": "newName", "type": "string" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
              "name": "changeTokenName", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
            },
            {
              "inputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "name": "clanMemberCount", "outputs":
                [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
            },
            {
              "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "clans", "outputs":
                [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function"
            },
            {
              "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved",
              "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
            },
            {
              "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getGenesisMintedID", "outputs":
                [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function"
            },
            {
              "inputs": [], "name": "getGenesisMintedTotal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
              "stateMutability": "view", "type": "function"
            }, {
              "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }],
              "name": "getTokenBiography", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function"
            },
            {
              "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getTokenClan", "outputs":
                [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function"
            },
            {
              "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getTokenClanId", "outputs":
                [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function"
            },
            {
              "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getTokenName", "outputs":
                [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function"
            },
            {
              "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getTokenNameByIndex", "outputs":
                [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function"
            },
            {
              "inputs": [{ "internalType": "address", "name": "owner", "type": "address" },
              { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function"
            }, {
              "inputs": [], "name": "isPublicSaleActivated", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
              "stateMutability": "view", "type": "function"
            }, {
              "inputs": [{ "internalType": "string", "name": "str", "type": "string" }],
              "name": "isUniqueName", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function"
            },
            {
              "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
              "stateMutability": "view", "type": "function"
            }, {
              "inputs": [], "name": "owner", "outputs":
                [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
            },
            {
              "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs":
                [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
            }, { "inputs": [], "name": "price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            {
              "inputs": [{ "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }],
              "name": "priorityMint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
            },
            {
              "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "publicMint", "outputs":
                [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "payable", "type": "function"
            },
            { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "reserved", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            {
              "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" },
              { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function"
            },
            {
              "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" },
              { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
              { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function"
            },
            {
              "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }],
              "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"
            },
            {
              "inputs": [{ "internalType": "string", "name": "newURI", "type": "string" }], "name": "setBaseURI",
              "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
            },
            {
              "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "setPrice", "outputs":
                [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
            }, { "inputs": [{ "internalType": "uint16", "name": "amount", "type": "uint16" }], "name": "setReserve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenAddressArg", "type": "address" }], "name": "setTokenAddress", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newPrice", "type": "uint256" }], "name": "setTokenBiogChangePrice", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newPrice", "type": "uint256" }], "name": "setTokenClanChangePrice", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newPrice", "type": "uint256" }], "name": "setTokenNameChangePrice", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            {
              "inputs": [{ "internalType": "bool", "name": "newStatus", "type": "bool" }], "name": "setUtilityStatus", "outputs":
                [{ "internalType": "bool", "name": "isUtilityEnabled", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
            },
            {
              "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs":
                [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function"
            }, {
              "inputs": [], "name": "symbol", "outputs":
                [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function"
            }, { "inputs": [], "name": "tokenAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "tokenBiogChangePrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            {
              "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs":
                [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
            },
            { "inputs": [], "name": "tokenClanChangePrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokenNameChangePrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "utilityEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
          ]
};

