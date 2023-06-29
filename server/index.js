const express = require("express")
const app = express()
// 使用cors响应头解决跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET,DELETE,OPTIONS');
    next();
})
let chartOne = require("./router/one")
let chartTwo = require("./router/two")
let chartThree = require("./router/three")
let chartFour = require("./router/four")
app.use("/one", chartOne)
app.use("/two", chartTwo)
app.use("/three", chartThree)
app.use("/four", chartFour)
app.listen(8888, () => {
    console.log("http://127.0.0.1:8888");
})