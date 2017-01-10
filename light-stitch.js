//Intended to proxy from http://localhost:8012 to https://firefly.jstor.org

const https = require('https'),
    http  = require('http'),
    util  = require('util'),
    path  = require('path'),
    fs    = require('fs'),
    colors = require('colors'),
    httpProxy = require('http-proxy');


//
// HTTP Proxy Server
//
const proxy = httpProxy.createProxyServer({
  target: 'https://firefly.jstor.org/',
  changeOrigin: true,
  autoRewrite: true,
  protocolRewrite: 'http',
  secure: false,
  cookieDomainRewrite: { 'localhost': 'firefly.jstor.org'},
  headers: {
    host: 'jstor.org'
  }
});

//
// Listen for the `error` event on `proxy`.
proxy.on('error', (err, req, res) => {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });

  res.end('Something went wrong. And we are reporting a custom error message.');
});

//
// Listen for the `proxyRes` event on `proxy`.
//
proxy.on('proxyRes', (proxyRes, req, res) => {
    const requestToLog = {url: req.url,
        method: req.method}
  console.log ('Request to target', JSON.stringify(requestToLog, true, 2));
  console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
});

//
// Create a HTTP Proxy server with a HTTPS target
//
proxy.listen(8012);

console.log('http proxy server'.blue + ' started '.green.bold + 'on port '.blue + '8012'.yellow);
