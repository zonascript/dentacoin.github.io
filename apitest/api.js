// Mercatox
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://mercatox.com/public/dentacoin", false);
xhr.send();
var json = JSON.parse(xhr.responseText);
var mercatoxBTC = parseInt(json.DCN_BTC);
var mercatoxETH = parseInt(json.DCN_ETH);

var mercatoxDCN = mercatoxBTC + mercatoxETH;

document.getElementById("mercatoxDCN").innerHTML = mercatoxDCN;


//Website
var xhr2 = new XMLHttpRequest();
xhr2.open("GET", "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6&address=0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6&tag=latest&apikey=NBI9SGSW6P1NZQGYT8BD8DDN5UQ7AIM4E9", false);
xhr2.send();
var json2 = JSON.parse(xhr2.responseText);
var websiteDCN = parseInt(json2.result);
websiteDCN = 96000000000 - websiteDCN;

document.getElementById("websiteDCN").innerHTML = websiteDCN;


//BuyUcoin - IRN
var xhr3 = new XMLHttpRequest();
xhr3.open("GET", "https://www.buyucoin.com/api/v1/dcn/volume", false);
xhr3.send();
var json3 = JSON.parse(xhr3.responseText);
var buyucoinDCN = parseInt(json3.vol);

document.getElementById("buyucoinDCN").innerHTML = buyucoinDCN;


//Cryptopia
var xhr4 = new XMLHttpRequest();
xhr4.open("GET", "https://www.dentacoin.com/cryptopia.txt", false);
xhr4.send();
var cryptopiaDCN = parseInt(xhr4.responseText);

document.getElementById("cryptopiaDCN").innerHTML = cryptopiaDCN;

//hitBTC
var xhr5 = new XMLHttpRequest();
xhr5.open("GET", "https://www.dentacoin.com/hitBTC.txt", false);
xhr5.send();
var hitBtcDCN = parseInt(xhr5.responseText);

document.getElementById("hitbtcDCN").innerHTML = hitBtcDCN;