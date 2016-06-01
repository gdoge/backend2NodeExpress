var cluster = require('cluster');
var http = require('http');

if (cluster.isMaster) {
  var numCPUs = require('os').cpus().length;
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  Object.keys(cluster.workers).forEach(function(id) {
    console.log(cluster.workers[id].process.pid);
  });
} else{

  // Create HTTP server.
  http.Server(function(req, res) {
    res.writeHead(200);



    //res.end("This answer comes from the process " + x);
res.end("hello world"+ process.pid);
    //that's just for example
    // while(true){
    //
    // }

    var x = 0;
    for(var i = 0; i < 100000000; i++){
      x += i;
      x -= i-1;
    }

  }).listen(8080);
}

// //
// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
// var x = 0;
// for(var i = 0; i < 100000000; i++){
//   x += i;
//   x -= i-1;
// }
//
//
//
//   res.send('Hello World! '+x);
// });
//
// app.listen(8080, function () {
//   console.log('Example app listening on port 8080!');
// });
