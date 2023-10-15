let http = require('http');
let fs = require('fs');
let port = 8772;

let server = http.createServer(function(req, res){
    fs.readFile('db.json','utf-8',function(err, data){
        if(err) throw err;
        res.write(data);
        res.end()
    })
})

server.listen(port)