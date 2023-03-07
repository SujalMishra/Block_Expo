import { useEffect, useState } from 'react';
import './App.css';
import BlData from './BlData';
import TnData from './TnData';
const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/31225cc64b9842dc97878b3120feeaa1');

function App() {
  const [conn,setConn] = useState(false);
  const [hash,setHash] = useState("");
  const [data,setData] = useState(null);
  const [trnhash,setTrnHash] = useState("");
  const [trndata,setTrnData] = useState(null);
  
const connectWallet = async ()=>{
     if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){

    try{
    await window.ethereum.request({method : "eth_requestAccounts" });
    }
    catch(err){
   console.log(err.message);
  }
  }else{
    alert("Please Install Metamask First!!");
  }
}

const getData = async ()=>{
    const block = await web3.eth.getBlock(hash)
     setData(block);
    //  console.log(data);
}

const getTrnData = async ()=>{
     const trn = await web3.eth.getTransaction(trnhash);
     setTrnData(trn);
    //  console.log(trndata.from);

}

useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_accounts' })
        .then((accounts) => {
          if (accounts.length > 0) {
            setConn(true);
          } else {
            setConn(false);
          }
        })
        .catch((error) => {
          console.error(error);
          setConn(false);
        });
    } else {
      setConn(false);
    }
}, []);
  
return (
    <div className="App">

    {conn ?(
      <div>
     <h1>Block_Expo</h1>
     <hr></hr>
     <h3>Block Number or Hash </h3>
     <input 
     onChange={(e)=>{
      setHash(e.target.value);
     }}
     ></input>
   
     <button className='btn' onClick={getData}>Get Data</button>
     {data && (<div><BlData {...data}/></div>)}
     <h3>Transaction Hash </h3>
     <input 
     onChange={(e)=>{
      setTrnHash(e.target.value);
     }}
     ></input>
     <button className='btn' onClick={getTrnData}>Get Data</button>
      {trndata && (<div>
        <TnData {...trndata}/>
     </div>)} 
     </div>
    
  ):(


 <div>
      <button onClick={connectWallet}>ConnectWallet</button>
    </div>
    )}
    </div>

  );
}

export default App;
