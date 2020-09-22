var http = require('http');
http.createServer()
.on('request',function(req,res){
    console.log('connecting to'+req.url);
    res.write('welcome to node');
    console.log('This will be printed last');
    res.end();
})
.listen(3000)
console.log('this will be printed first');
console.log('server listening to port 3000.....')