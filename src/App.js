import { useState } from 'react';
import CryptoJS from 'crypto-js';

import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './App.scss';

function App() {
  const [inputData, setInputData] = useState('');
  const [keyData, setKeyData] = useState('');
  const [outputData, setOutputData] = useState('');

  const inputDataChanged = (e) => {
    setInputData(e.target.value);
  };

  const keyDataChanged = (e) => {
    setKeyData(e.target.value);
  };

  const encrypt = (e) => {
    e.target.blur();
    const encryptedData = CryptoJS.AES.encrypt(inputData, keyData).toString();
    setOutputData(encryptedData);
  };

  const decrypt = (e) => {
    e.target.blur();
    const decryptedData = CryptoJS.AES.decrypt(inputData, keyData).toString(CryptoJS.enc.Utf8);
    setOutputData(decryptedData);
  };

  const copy = (e) => {
    e.target.blur();

    const ele = document.createElement('textarea');
    ele.value = outputData;
    document.body.appendChild(ele);
    ele.select();
    document.execCommand('copy');
    document.body.removeChild(ele);
  };

  return (
    <div className="container center-center">
      <div className="content flex-column">
        <div className="title">EasyCrypt</div>
        <div className="input-item flex-center">
          <div className="input-title">Input</div>
          <input className="input-value" value={inputData} onChange={inputDataChanged}></input>
        </div>
        <div className="input-item flex-center">
          <div className="input-title">Key</div>
          <input className="input-value" value={keyData} onChange={keyDataChanged}></input>
        </div>
        <div className="input-item flex-center">
          <div className="input-title">Output</div>
          <input id="result" className="input-value" value={outputData} disabled></input>
          <button className="copy-icon" onClick={copy}><i className="fa fa-clipboard" aria-hidden="true"></i></button>
        </div>
        <div className="btn-container flex-center">
          <button className="btn encrypt" onClick={encrypt}>Encrypt</button>
          <button className="btn decrypt" onClick={decrypt}>Decrypt</button>
        </div>
      </div>
    </div>
  );
}

export default App;
