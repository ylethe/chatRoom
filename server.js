/**
 * Created by yjf on 16-11-16.
 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

new WebpackDevServer(webpack(config), config.devServer)
    .listen(config.port, 'localhost', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:' + config.port);
        console.log('Opening your system browser...');
        open('http://localhost:' + config.port + '/webpack-dev-server/');
    });
/*var http = require('http'),
    server = http.createServer((req,res)=> {
        res.writeHead(200,{
            'Content-Type':'text/html'
        });
        res.write('<h1>hello world!</h1>');
        res.end();
    });
var express =require('express'),
    app =express(),
    server=require('http').createServer(app),
    io = require('socket.io').listen(server),
    users=[];
//app.use('/',express.static(_dirname+'/src'));


io.on('connection',(socket)=> {
    //昵称设置
    socket.on('login',(nickname)=> {
        if(users.indexOf(nickname)>-1){
            socket.emit('昵称已存在');
        }
        else {
            socket.userIndex = users.length;
            socket.nickname =nickname;
            users.push(nickname);
            socket.emit('登陆成功');
            io.sockets.emit('system',nickname,users.length,'login');
        }
    });
    //掉线事件
    socket.on('disconnect',()=>{
        users.splice(socket.userIndex,1);
        socket.broadcast.emit('system',socket.nickname,users.length,'logout');

    });

    //接收消息
    socket.on('postMessage',(msg)=>{
        socket.broadcast.emit('newMsg',socket.nickname,msg);
    });

    //接收图片
    socket.on('img',(imgData)=>{
        socket.broadcast.emit('newImg',socket.nickname,imgData);
    })
});*/
