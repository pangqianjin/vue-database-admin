const pgOpt = require('pg')
const express = require('express')
var bodyParser = require('body-parser');// 使用req.body
const app = express()
app.use(bodyParser.json());// 使用req.body
app.use(bodyParser.urlencoded({ extended: false }));// 使用req.body

var client, connected
var conStr

app.post('/connect', (req, res)=>{
    res.header("Access-Control-Allow-Origin","*")
    conStr = req.body.addr
    client = new pgOpt.Client(conStr)

    console.log('connecting', req.body.addr, '...')
    client.connect(err=>{
        if(err){
            console.log('connect err:', err)
            client.end()
            res.send({err})
            return
        }else{
            connected = true;
            console.log('connect success! connect addr:', conStr)
            res.send({err: null})
        }  
    })
})


app.post('/query', (req, res)=>{// {err | result}
    res.header("Access-Control-Allow-Origin","*")// 允许跨域
    if(client && connected){
        client = new pgOpt.Client(conStr)
        client.connect((err)=>{
            if(err){
                res.send({err, result:null})
                console.log('connect err: not connected')
            }
            try{
                client.query(req.body.queryString, (err, response)=>{
                    if(err){
                        res.send({err, result:null})
                        console.log('query err', err)
                        return
                    }
    
                    res.send({err: null, result: response})
                    console.log('query result:', response)
                })
            }catch(err){
                res.send({err, result: null})
                console.log('query err', err)
            }
        })
    }
})

const server = app.listen('8000', ()=>{
    var host = server.address().address;
	var port = server.address().port;
	console.log(host);
	console.log("应用实例，访问地址为：http://%s:%s", host, port);
})
