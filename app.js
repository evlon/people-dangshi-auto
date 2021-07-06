const program = require('commander');
program
    .version("v1.0")

let proxyServer = require("./proxyserver").startServer;
proxyServer();


