import React, {useEffect} from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';

//import './App.css';
import './assets/scss/style.scss';


const history = createBrowserHistory();

const Index = () => {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
    {/* <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" background-color="#000000" locale="en" font-color="#8000ff"></coingecko-coin-price-marquee-widget> */}
    <App />
    
    </>
    
  )
}

export default Index;
