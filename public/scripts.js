const baseURL = 'http://api.coinlayer.com/api/';
const key = '667a09df5bc63be6bc20eb006530da6e';

const searchForm = document.querySelector('form');
const date = document.querySelector('#date');
const currency = document.querySelector('#currency');
const results = document.querySelector(".results");

// EVENT LISTENERS
searchForm.addEventListener('submit', fetchResults);

async function fetchResults(e) {
    e.preventDefault();

    const response = await fetch(`${baseURL}${date.value}?access_key=${key}`);
    const json = await response.json();
    console.log(json);

    const currencyInput = currency.value;
    console.log(currencyInput);

    const dateInput = date.value;

    if(currencyInput === 'BTC') {
        const rate = json.rates.BTC;
        console.log(rate);
        
        const price = (json.rates.BTC).toFixed(2);
    
        results.textContent=`Bitcoin was worth $${price} on ${dateInput}!`;
    } else if(currencyInput === 'ETH') {
        const rate = json.rates.ETH;
        console.log(rate);
        
        const price = (json.rates.ETH).toFixed(2);
    
        results.textContent=`Ethereum was worth $${price} on ${dateInput}`;
    } else if(currencyInput === 'LTC') {
        const rate = json.rates.LTC;
        console.log(rate);
        
        const price = (json.rates.LTC).toFixed(2);
    
        results.textContent=`Litecoin was worth $${price} on ${dateInput}`;
    } else if(currencyInput === 'ADA') {
        const rate = json.rates.ADA;
        console.log(rate);
        
        const price = (json.rates.ADA).toFixed(2);
    
        results.textContent=`Cardano was worth $${price} on ${dateInput}.`;
    } else if(currencyInput === 'BCH') {
        const rate = json.rates.BCH;
        console.log(rate);
        
        const price = (json.rates.BCH).toFixed(2);
    
        results.textContent=`Bitcoin Cash was worth $${price} on ${dateInput}.`;
    } else if(currencyInput === 'XLM') {
        const rate = json.rates.XLM;
        console.log(rate);
        
        const price = (json.rates.XLM).toFixed(2);
    
        results.textContent=`Stellar was worth $${price} on ${dateInput}.`;
    } else if(currencyInput === 'LINK') {
        const rate = json.rates.LINK;
        console.log(rate);
        
        const price = (json.rates.LINK).toFixed(2);
    
        results.textContent=`Chainlink was worth $${price} on ${dateInput}.`;
    } else if(currencyInput === 'BNB') {
        const rate = json.rates.BNB;
        console.log(rate);
        
        const price = (json.rates.BNB).toFixed(2);
    
        results.textContent=`Binance Coin was worth $${price} on ${dateInput}.`;
    } else if(currencyInput === 'USDT') {
        const rate = json.rates.USDT;
        console.log(rate);
        
        const price = (json.rates.USDT).toFixed(2);
    
        results.textContent=`Tether was worth $${price} on ${dateInput}.`;
    } else if(currencyInput === 'XMR') {
        const rate = json.rates.XMR;
        console.log(rate);
        
        const price = (json.rates.XMR).toFixed(2);
    
        results.textContent=`Monero was worth $${price} on ${dateInput}.`;
    } else {
        results.textContent="Invalid input, please try again."    
    }

}









