
const fetch = require('node-fetch');
const sleep = require('sleep-anywhere');
let sum = 0;
async function doloop(){

    let header = {
        Authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MjdjOTgzNS1lZjc1LTRkYmUtODZjNy1iMWFkMjE5NjczNjciLCJDUkVBVEVEIjoxNjI1NTMyMzQ3NjI0LCJleHAiOjE2MjcwMDM1NzZ9.oj5tBMNWNBOOMsdPjjH23C2T_1MjIHc7g2vVdNXGuqbVcDtTN952NUXfM0Tjb1g-VZ7nUtJQEmGv1GnYasz0Qw",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat"
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

            let answerData = {"questionId":qid,"option":option,"plate":5,"sumContribution":sum++};
            console.log(answerData);

            fetch("https://yqdszsjs.people.cn//question/answer", {
                headers: header,
                method: "POST",
        
                body: JSON.stringify(answerData),
              })
        
          }
          

        json.data[0].rightOption
      }
}

async function main(){

    while(true){
        await doloop();

        await sleep(2000);
    }
}

main();