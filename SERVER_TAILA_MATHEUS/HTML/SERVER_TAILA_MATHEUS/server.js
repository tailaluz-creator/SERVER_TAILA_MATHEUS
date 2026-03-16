const http = require('http');
const fs = require('fs');
let port = 3000;
let host = 'localhost';

const server = http.createServer((req, res) =>{
    // header 
    res.setHeader('Content-Type', 'text/html');

    // roteamento
    let html_page = '';

    switch(req.url){
        case '/':
            html_page ='pag_inicial.html'
            res.statusCode = 200
            break;

        case '/pag_inicial':
            html_page ='pag_inicial.html'
            res.statusCode = 200
            break;  

        case '/sobre':
            html_page ='sobre.html'
            res.statusCode = 200
            break;    

        case '/servicos':
            html_page ='servicos.html'
            res.statusCode = 200
            break;    

        default:
            html_page ='erro.html'
            res.statusCode = 404
            break;
    }

    //preparar a página do html
    fs.readFile('./html/'+html_page,(err,data) => {
        if(err){
            console.log('erro');
            res.statusCode = 404;
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });
});
server.listen(port, host,()=>{
    console.log('Servidor está no ar!!!')
});