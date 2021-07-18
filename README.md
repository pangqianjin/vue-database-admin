# vue-database-admin
基于vue-cli创建的数据库pg-admin工具

## 一、如何启动
切换到根目录下，执行以下命令(启动客户端和服务端)
1. yarn serve
2. node ./src/server/index.js

## 二、原理
前端发送post请求给后端，后端使用pg.js连接数据库，通过response返回给前端

## 三、部分效果
### 1.未连接时
![image](https://user-images.githubusercontent.com/49555245/126039474-8bd7645f-ec63-450c-a78d-d75340d6a1be.png)
### 2.输入一个错误的连接地址
![image](https://user-images.githubusercontent.com/49555245/126039630-a867f9c8-a32e-4f1b-9e7b-839f29cae520.png)
### 3.输入一个正确的连接地址
![image](https://user-images.githubusercontent.com/49555245/126039676-bcf489ca-9376-4e6c-908a-8477f48c14ee.png)
![image](https://user-images.githubusercontent.com/49555245/126039694-eb40d78f-4a9a-46f0-8878-480f57182af8.png)
### 4.输入查询语句
