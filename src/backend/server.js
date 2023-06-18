const htpp = require('http');
const express = require('./rest');
const server = htpp.createServer(express) 

server.listen(3000);
console.log('Hello world');