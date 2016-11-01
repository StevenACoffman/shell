//import fetch from 'isomorphic-fetch';
const fetch = require('isomorphic-fetch');

const doi = '10.1641/0006-3568(2003)053[0927:whatwo]2.0.co;2'
fetch(`http://localhost:8000/citation/mla/${doi}`, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}).then(response => response.json())
  .then(json => console.log(json));
