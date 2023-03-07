import React from 'react'
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/31225cc64b9842dc97878b3120feeaa1');

function TnData(props) {
    const { from, to, value, gas, gasPrice, blockNumber } = props;

  return (
    <div>
     <p>From: {from}</p>
          <p>To: {to}</p>
          <p>Value: {web3.utils.fromWei(value)} ETH</p>
          <p>Gas Used: {gas}</p>
          <p>Gas Price: {web3.utils.fromWei(gasPrice, 'gwei')} Gwei</p>
          <p>Status: {blockNumber ? 'Confirmed' : 'Pending'}</p>    </div>
  )
}

export default TnData
