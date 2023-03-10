const path = require('path');
const fs = require('fs');
const solc = require('solc')

const inboxPath = path.resolve(__dirname, 'contracts','inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');


const input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};
 
 
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'Inbox.sol'
].Inbox;

// console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts[
//     'Inbox.sol'
// ].Inbox);

// var input = {
//     language: 'Solidity',
//     sources: {
//         'inbox' : {
//             content: source
//         }
//     },
//     settings: {
//         outputSelection: {
//             '*': {
//                 '*': [ '*' ]
//             }
//         }
//     }
// }; 

// let output = JSON.parse(solc.compile(JSON.stringify(input)));
// console.log(output);

// let output1 = JSON.parse(JSON.stringify(output.contracts));
// // console.log(output1);

// let output2 = JSON.parse(JSON.stringify(output1.inbox));
// // console.log(output2);

// let output3 = JSON.parse(JSON.stringify(output2.Inbox));
// // console.log(output3);


// module.exports = output.contracts;