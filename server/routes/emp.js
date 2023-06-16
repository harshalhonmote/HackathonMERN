import express from "express";
import atob from 'atob';
import 'dotenv/config';
import con from './dbUtil.js'

const route = express.Router();


//-----LogIn-------------------
route.post('/login',(req,resp)=>{

  var pass = atob(req.body.pass);
  var sql = `select * from emp where ename='${req.body.email}' and city='${pass}'`;
   con.query(sql,(err, results)=> {
   // console.log(results.length !=0);
      if(results.length !=0 )
      {
          var data = {"isValid":true};
          resp.setHeader("Content-Type","application/json");
         resp.send(JSON.stringify(data));
      } 
      else
      {
        var data = {"isValid":false};
        resp.setHeader("Content-Type","application/json");
       resp.send(JSON.stringify(data));
      }
      resp.end();
   
   });
})

//------------------------------------------------
route.get('/',(req,resp)=>{
    // resp.send("Get emp called");

   var sql = 'select * from emp';
   con.query(sql,(err, results)=> 
   {
      if(err==null)
      {
         var data = JSON.stringify(results);
         resp.setHeader("Content-Type","application/json");
         resp.send(data);
      }
      else
      {
        resp.send(err);
      }
    });
})





export { route };