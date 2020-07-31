
const http = require('http');

const url = require('url');

const path = require('path');

const fs = require('fs');

const students = require('./database/students');

const querystring = require('querystring');

const mime = require('mime');

const template = require('art-template');

template.config('base', path.join(__dirname, 'views'));

const server = http.createServer();

server.listen(3000);

server.on('request', (req, res)=> {//4
    //��װ����Ⱦ����
    res.render = function(tpl,data){
       let html = template(tpl,data);
       res.writeHeader(200,{'Content-Type':'text/html'})
       res.end(html);
    }

    let {pathname,query} = url.parse(req.url,true);//6
    //console.log(pathname);
    switch(pathname){
        case '/':
        case 'add':
            res.render('add',{action:'/save'});
            break;
        case '/list':
            res.render('list',{lists:students});
            break;
        case '/save':
            req.body='';
            /*
              �������һ�������¼�����������Ϊdata���¼�����������ĺ�����
              ��˼Ӧ�þ��ǣ������յ�����ʱ���������ݿ����post��
              chunk������Ǹ��βΣ��㻻������Ҳok�����������ڴ�������У�
              �ǰ��鴫��ģ�chunk���ǿ����˼*/
            req.on('data',(chunk)=>{
                req.body += chunk;
            }) 
            req.on('end',()=>{
                let formData = querystring.parse(req.body);
                students.push(formData);
            })
            fs.open('./database/students.json')   
        default :
    }
});