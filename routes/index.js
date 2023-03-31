/*
 * @Author: yuheng li a1793138
 * @Date: 2023-03-30 18:21:13
 * @LastEditors: yuheng 
 * @LastEditTime: 2023-03-31 20:10:11
 * @FilePath: \wdc-week5-p4\routes\index.js
 * @Description: 
 * 
 * Copyright (c) ${2023} by ${yuheng li}, All Rights Reserved. 
 */



var express = require('express');
const { request } = require('http');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Express" });
});

let last ="";
router.get("/last.txt", function(req, res,next){
    if((last== ""))
    {
        last =new Date();
        res.sendFile();
    }else{
        last =new Date();
        res.send(String(last));
    }
  
});
//3.2
let colorInHtml =["red","yellow","green","blue"];
let index=0;
router.get("/color.html",function(req, res, next){
    let color =colorInHtml[index]
    index++;
    if (index>=4)
    {
        index=0;
    }
    res.send(`<!DOCTYPE html>
    <html lang="en">
        <head>
            <title>prac 4</title>
        </head>
        <body>
            <h1 style ="color:${color}">${color}</h1>
        </body>
    </html>`);
//that is the end of 3.2
});


//3.3
let stringArray ="";
router.get('/stringArray.html', function(req, res,next){
    let text =new Date();
    stringArray += `<li>${text}</li>`;
    res.send(`<!DOCTYPE html>
    <html lang="en">
        <head>
            <title>
                prac 4
            </title>
        </head>
        <body>
            <u1>${stringArray}</u1>
        </body>
    </html>`);
});
//that's the end of part 3

//part 3 (2)
let visited = false;
router.get('/first.html', function(req, res,next) {
    if (!visited){
        res.sendFile(`<!DOCTYPE html>
        <html lang="en">
            <head>
                <title>
                    prac 4
                </title>
            </head>
            <body>
                <h1>welcome</h1>
                <a href="/main.html">main</a>
            </body>
        </html>`)
    }else{
        res.redirect("/main.html");
    }

});

router.get('/main.html', function(req, res,next) {
    if (visited)
    {
        res.sendFile(`<!DOCTYPE html>
        <html lang="en">
            <head>
                <title>
                    prac 4
                </title>
            </head>
            <body>
                <h1>My main site</h1>
            </body>
        </html>`)

    }else{
        res.redirect("/first.html");
    }
});
//part 4
let color4 =["red","yellow","green","blue"];
let color4Visited = 0;

router.get("/color.txt", function(req, res,next){
    let color =color4[color4Visited];
    color4Visited++;
    if (color4Visited>=4)
    {
        color4Visited=0;
    }
    res.send(color);
});

//end of 4.2
//4.3

let jsontime =[];
router.get("/log.json", function(req, res,next){
    let now  = String(new Date());
    jsontime.push(now);
    res.send(JSON.stringify(jsontime));
});

router.get("/log-ro.json", function(req, res,next){
    res.send(JSON.stringify(jsontime));
});

//end of 4.3
module.exports = router;

