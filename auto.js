
const fetch = require('node-fetch');
const sleep = require('sleep-anywhere');
let sum = 2;
let maxsum = 30000;
async function doloop(){

  //curl 'https://yqdszsjs.people.cn//question/answer' -X POST 
  // -H 'Host: yqdszsjs.people.cn' 
  // -H 'Connection: keep-alive' 
  // -H 'Authorization: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MjdjOTgzNS1lZjc1LTRkYmUtODZjNy1iMWFkMjE5NjczNjciLCJDUkVBVEVEIjoxNjI1NTMyMzQ3NjI0LCJleHAiOjE2MjcwMDM1NzZ9.oj5tBMNWNBOOMsdPjjH23C2T_1MjIHc7g2vVdNXGuqbVcDtTN952NUXfM0Tjb1g-VZ7nUtJQEmGv1GnYasz0Qw' 
  // -H 'User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat' 
  // -H 'content-type: application/json' 
  // -H 'Referer: https://servicewechat.com/wxd1038c1088b41c74/7/page-frame.html' 
  // -H 'Accept-Encoding: gzip, deflate, br' 
  // -d '{"questionId":5600,"option":"","plate":5,"sumContribution":10}' --compressed
    let header = {
        Authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MjdjOTgzNS1lZjc1LTRkYmUtODZjNy1iMWFkMjE5NjczNjciLCJDUkVBVEVEIjoxNjI1NTMyMzQ3NjI0LCJleHAiOjE2MjcwMDM1NzZ9.oj5tBMNWNBOOMsdPjjH23C2T_1MjIHc7g2vVdNXGuqbVcDtTN952NUXfM0Tjb1g-VZ7nUtJQEmGv1GnYasz0Qw",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
        "Referer": "https://servicewechat.com/wxd1038c1088b41c74/7/page-frame.html"
      }
    
    let respQ = await fetch("https://yqdszsjs.people.cn/question/questionList?plate=5", {
        headers: header
      })

      let json = await  respQ.json();
      if(json.data.length == 1){
          let q = json.data[0];
          let type = q.type;
          if(type == 1){
            let qid = q.id;
            let option = q.rightOption;

            let answerData = {"questionId":qid,"option":(sum > maxsum ? "": option),"plate":5,"sumContribution":sum+=2};
            console.log(answerData);

            let respAnswer = await fetch("https://yqdszsjs.people.cn//question/answer", {
                headers: header,
                method: "POST",
        
                body: JSON.stringify(answerData),
              })

            let jsonAswer = await respAnswer.json();
            console.log(JSON.stringify(jsonAswer));
            return jsonAswer.data.status == 0;
        
          }
 
      }

      return true;
}

async function main(){

    while(true){
        let goon = await doloop();
        if(!goon){
          return;
        }
        await sleep(2000);
    }
}

main();