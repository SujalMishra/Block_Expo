import React from 'react'
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/31225cc64b9842dc97878b3120feeaa1');

function BlData(props) {
    const {number,hash,timestamp,gasLimit,gasUsed,miner,transactions} = props;
  return (
    <div>
       <div className='struct'>
          <p>Number: {number}</p>
          <p>Hash: {hash}</p>
          <p>Timestamp: {new Date(timestamp * 1000).toLocaleString()}</p>
          <p>Gas Limit: {gasLimit}</p>
          <p>Gas Used: {gasUsed}</p>
          <p>Miner: {miner}</p>
          <p>Transactions: {transactions.length}</p>
        </div>
        <hr></hr>
    </div>
  )
}

export default BlData
