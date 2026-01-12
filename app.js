const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use( cors())
let data_set = [
    {id:"aaa-s", pwd:"aaa", name:"홍길동1", addr:"산골짜기"},
    {id:"bbb-s", pwd:"bbb", name:"김개똥1", addr:"개똥별"},
    {id:"ccc-s", pwd:"ccc", name:"고길동1", addr:"마포구"},
]
/*
request, response
*/
app.get( "/mem", (req, res) => {
    console.log("서버 실행 mem 통신 성공")
    console.log("mem 연산 끝나고 데이터 보냄")
    res.json (data_set);
})
app.get("/mem/:id", (req, res) => {
    const result =
        data_set.filter( data => data.id === req.params.id )[0]
    res.json(result)
})
app.post("/mem", (req, res) => {
    console.log("request body : ", req.body)
    data_set = data_set.concat(req.body);
})
app.listen(4000, ()=>console.log("4000 back 구동"))





