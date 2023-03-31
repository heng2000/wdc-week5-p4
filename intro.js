/*
 * @Author: yuheng li a1793138
 * @Date: 2023-03-30 18:53:20
 * @LastEditors: yuheng 
 * @LastEditTime: 2023-03-30 18:57:19
 * @FilePath: \express\intro.js
 * @Description: 
 * 
 * Copyright (c) ${2023} by ${yuheng li}, All Rights Reserved. 
 */
const express = require('express');
const app = express();
const port =3000;

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen(port,() => {
    console.log('love you :${port}');
});
