/**
 * Created by 143301 on 2017/6/2.
 */
const request=require('request');
function getExpressDetail(req,res,params) {
  console.log('快递单号',params);
  let ExpressId =params.id;
  // let ExpressId ='';
  //440342130610
  const options = {
    headers: {"Content-Type": "application/json;charset=utf-8"},
    url: 'https://m.kuaidi100.com/autonumber/auto?num='+ExpressId,
    method: 'GET',
    json: true
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('body内容',JSON.stringify(body));
      if(body[0]){
        let code=body[0].comCode;
        let paramsIn={
          code:code,
          expressId:ExpressId
        };
        getDetail(req,res,paramsIn)
      }else{
        let message={
          message:'订单不存在',
          status:10001
        };
        res.end(JSON.stringify(message));
      }


    }
  });

}

function getDetail(req,res,paramsIn) {
  let code=paramsIn.code;
  let ExpressId=paramsIn.expressId;
  const options = {
    headers: {"Content-Type": "application/json;charset=utf-8"},
    url: 'https://m.kuaidi100.com/query?type='+code+'&postid='+ExpressId,
    method: 'GET',
    json: true
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(JSON.stringify(body));
      res.end(JSON.stringify(body));
    }
  });
}

exports.getExpressDetail=getExpressDetail;
