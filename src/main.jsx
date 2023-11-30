import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Web5 } from '@web5/api';
// import { webcrypto } from 'node:crypto';
// if (!globalThis.crypto) globalThis.crypto = webcrypto;

const { web5, did: aliceDid } = await Web5.connect();

console.log(aliceDid);
console.log(web5)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

