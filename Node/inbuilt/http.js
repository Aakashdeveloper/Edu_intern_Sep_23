let http = require('http');

//req > what we send to server (params,queryParams,body)
//res > what server send us

let server = http.createServer((req,res) => {
    res.write('Hii From Http Server');
    res.end()
})

server.listen(3422)