let http = require('http')
let fs = require('fs')
const port = 8990





http.createServer((req,res)=>{

    fs.readFile('index.html', (err,data)=>{

        res.writeHead(200,{'Content-type': 'text/html; charset=utf-8'})
          
        
        if(req.url==="/"){
            res.end(data)
        }else if(req.url ==="/test"){
            fs.readFile('page2.html',(err,data)=>{
                res.writeHead(200,{'Content-type': 'text/html; charset=utf-8'})
                res.end(data)
            })
        }
    })


}).listen(port, console.log(`Server is running ${port}`))