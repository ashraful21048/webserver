var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    if(req.url=='/home'){
       let data= fs.readFileSync('home.html','utf-8');
       res.end(data);
    }
    else if(req.url=="/contact"){
        let data=fs.readFileSync('contact.html','utf-8');
        res.end(data);
    }
    else if(req.url=='/term'){
        let data=fs.readFileSync('term.html','utf-8');
        res.end(data);
    }
    else if(req.url=='/about'){
        let data = fs.readFileSync('about.html','utf-8');
        res.end(data);
    }
})
server.listen(3000);
console.log("server is running");