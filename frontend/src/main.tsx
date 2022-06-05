import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import fetcher from './models/fetcher';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <SWRConfig value={{ fetcher: fetcher }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SWRConfig>
    </RecoilRoot>
  </React.StrictMode>
)
