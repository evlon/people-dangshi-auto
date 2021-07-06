


const fs = require('fs');
const path = require('path');
const cmd = require('node-cmd');

function main(args) {



  // process.env.ANYPROXY_HOME = this.config.proxyServer.certsPath;
  // if(!fs.existsSync(this.config.proxyServer.certsPath)){
  //   fs.mkdirSync(this.config.proxyServer.certsPath,{recursive:true});
  // }

  let options = {
    type: 'http',
    port: 8001,
    rule: require("./anyproxy-rule"),
    webInterface: {
      enable: true
    },
    wsIntercept: true,
    forceProxyHttps: true,
    dangerouslyIgnoreUnauthorized: false,
    silent: false
  };

  const ProxyServer = require('anyproxy').ProxyServer

  let proxyServer = new ProxyServer(options);
  proxyServer.on('ready', () => {
    console.log('proxy server ready.');
  });
  proxyServer.start();
  process.on('SIGINT', function () {
    proxyServer.close();
    console.log('Exit now!');

  });

}

module.exports.startServer = main;