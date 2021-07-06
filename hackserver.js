

const urllib = require("url");
const Koa = require('koa');


class HackServer {
    constructor() {

        this.domainCache = {};

    }





    beforeSendResponse(requestDetail, responseDetail) {


        let urlinfo = new urllib.URL(requestDetail.url);
        //https://yqdszsjs.people.cn/question/questionList?plate=5
        if (requestDetail.url.indexOf('https://yqdszsjs.people.cn/question/questionList') == 0) {
            let body = responseDetail.response.body;
            //{"success":true,"code":1000,"message":"success","data":[{"id":5636,"title":"2015年7月31日，北京携手( )成功获得2022年冬奥会举办权。","type":1,"optionA":"天津","optionB":"承德","optionC":"张家口","optionD":"沈阳","rightOption":"3"}]}

            let json = JSON.parse(body);
            for (let i = 0, c = json.data.length; i < c; i++) {
                let dataItem = json.data[i];
                let options = ['-','optionA', 'optionB', 'optionC', 'optionD', 'optionE', 'optionF', 'optionG', 'optionH']
                let rightOptions = dataItem.rightOption.split(',');
                for (let j = 0, jc = rightOptions.length; j < jc; j++) {
                    let key = options[parseInt(rightOptions[j])];
                    dataItem[key] += "*";
                }
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