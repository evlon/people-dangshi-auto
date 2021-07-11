

const urllib = require("url");
const Koa = require('koa');
const fs = require('fs');

class HackServer {
    constructor() {

        this.domainCache = {};

    }


    beforeDealHttpsRequest(requestDetail){
        console.log(requestDetail.host);
        if(requestDetail.host == "43.250.238.187:443"){
            requestDetail.host = "yqdszsjs.people.cn:443";
            return true;
        }
        if(requestDetail.host == "yqdszsjs.people.cn:443"){
            //requestDetail.host = "yqdszsjs.people.cn:443";
            return true;
        }


        return false;
        
    }

    /**
   *
   * @param {object} messageDetail
   * @param {string|buffer} messageDetail.data
   * @param {string} messageDetail.url
   * @param {object} messageDetail.requestOptions
   * @returns
   */
  beforeSendWsMessageToServer(messageDetail) {
    console.log('SendWsMessageToServer:' + messageDetail.data)
    return null;
  }

  /**
   *
   * @param {object} messageDetail
   * @param {string|buffer} messageDetail.data
   * @param {string} messageDetail.url
   * @param {object} messageDetail.requestOptions
   * @returns
   */
  beforeSendWsMessageToClient(messageDetail) {
      console.log('SendWsMessageToClient:' + messageDetail.data)
    return null;
  }


    beforeSendResponse(requestDetail, responseDetail) {


        let urlinfo = new urllib.URL(requestDetail.url);
        //https://yqdszsjs.people.cn/question/questionList?plate=5
        if (requestDetail.url.indexOf('https://yqdszsjs.people.cn/question/questionList') == 0) {
            let body = responseDetail.response.body;
            //{"success":true,"code":1000,"message":"success","data":[{"id":5636,"title":"2015年7月31日，北京携手( )成功获得2022年冬奥会举办权。","type":1,"optionA":"天津","optionB":"承德","optionC":"张家口","optionD":"沈阳","rightOption":"3"}]}

            let flags = "☀☆✔☠☂".split("");
            let json = JSON.parse(body);
            for (let i = 0, c = json.data.length; i < c; i++) {
                let dataItem = json.data[i];
                try{
                fs.appendFileSync("./data/people.json", JSON.stringify(dataItem) + ",\n");
                }catch(e){}
                let options = ['-','optionA', 'optionB', 'optionC', 'optionD', 'optionE', 'optionF', 'optionG', 'optionH']
                let rightOptions = dataItem.rightOption.split(',');
                for (let j = 0, jc = rightOptions.length; j < jc; j++) {
                    let key = options[parseInt(rightOptions[j])];
                    dataItem[key] = "[" + flags[j] + "] " + dataItem[key] ;//+ "[" + flags.join("]  [") + "] ";
                    //dataItem[key] = "[" + flags.join("]  [") + "] ";
                }
            }
            
            const newResponse = responseDetail.response;
            newResponse.body = JSON.stringify(json);

            return {
                response: newResponse
            }
        }
        else if (requestDetail.url.indexOf('https://yqdszsjs.people.cn/signIn/signInLog') == 0) {
            let body = responseDetail.response.body;
            //{"success":true,"code":1000,"message":"success","data":[{"id":5636,"title":"2015年7月31日，北京携手( )成功获得2022年冬奥会举办权。","type":1,"optionA":"天津","optionB":"承德","optionC":"张家口","optionD":"沈阳","rightOption":"3"}]}

            let json = JSON.parse(body);
            for (let i = 0, c = json.data.list.length; i < c; i++) {
                let dataItem = json.data.list[i];
                dataItem.contribution *=100000;
            }

            const newResponse = responseDetail.response;
            newResponse.body = JSON.stringify(json);

            return {
                response: newResponse
            }
        }       
    }




}



module.exports = HackServer