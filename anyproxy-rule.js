const HackServer = require('./hackserver')
const fs = require('fs')


let hackserver = new HackServer();
function isPromise(obj) {
    return !!obj  //有实际含义的变量才执行方法，变量null，undefined和''空串都为false
        && (typeof obj === 'object' || typeof obj === 'function') // 初始promise 或 promise.then返回的
        && typeof obj.then === 'function';
  }

  
module.exports = {
    *beforeSendResponse(requestDetail, responseDetail) {
        return hackserver.beforeSendResponse(requestDetail, responseDetail);
    }
};