const http=require('http')
const fs=require('fs');

const port=process.env.port || 3000

const home=fs.readFileSync('index.html')
 const contact=fs.readFileSync('./contact.html')
const about=fs.readFileSync('./about.html')
const service=fs.readFileSync('./service.html')

const server=http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;

    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    if(url=='/'){
        res.end(home);
    }
    else if(url=='/about'){
        res.end(about);
    }
    else if(url=='/service'){
        res.end(service);
    }
    else if(url=='/contact'){
        res.end(contact);
    }
else {
    res.statusCode=404;
    res.end("<h1>404 not found</h1>")
}
    
});
server.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server is runing at http://localhost:3000")
    }
})