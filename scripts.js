const baseURL = 'http://api.coinlayer.com/api/';
const key = '667a09df5bc63be6bc20eb006530da6e';

const searchForm = document.querySelector('.form');
const date = document.querySelector('.date');
const currency = document.querySelector('.currency');
const results = document.querySelector(".results");

searchForm.addEventListener('submit', fetchResults);

async function fetchResults(e) {
    e.preventDefault();

    const response = await fetch(`${baseURL}${date.value}?access_key=${key}`);
    const json = await response.json();
    console.log(json);

    const currencyInput = currency.value;

    const rate = json.rates.currencyInput;

    results.textContent=`${currency.value} is worth $${rates.currencyInput}`;

}






// EVENT LISTENERS


