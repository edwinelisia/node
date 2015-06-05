//learnyounode 1
//console.log("HELLO WORLD")

//console.log(process.argv)
// learnyounode 2
// var total = 0
// for(var i = 0; i < process.argv.length; i++) {
//   if ( i > 1 ) {
//       //console.log(process.argv[i])
//       total += Number(process.argv[i])
//   }
// }
//
// console.log(total)

// learnyounode 3
// var fs = require('fs');
// var length = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1
// console.log(length)

// learnyounode 4
// var fs = require('fs')
// fs.readFile(process.argv[2], callback)
// function callback(err, data) {
//   console.log(data.toString().split('\n').length -1)
// }

// learnyounode 5
// var fs = require('fs')
// fs.readdir(process.argv[2], callback)
// function callback(error, list) {
//   for(var i = 0; i< list.length; i++) {
//     fileNameArray = list[i].split('.')
//     if (fileNameArray[1] == process.argv[3]) {
//       console.log(list[i])
//     }
//   }
// }

// learnyounode 6
// var mymodule = require('./mymodule.js');
// mymodule(process.argv[2], process.argv[3], printList);
//
// function printList(error, list) {
//   list.forEach(function(file) {
//     fileNameArray = file.split('.')
//     if (fileNameArray[1] === process.argv[3]) {
//       console.log(file)
//     }
//   })
// }

// learnyounode 7
// var http = require('http')
// http.get(process.argv[2], function(response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })

// learnyounode 8
// var bl = require('bl')
// var http = require('http')
// http.get(process.argv[2], function(response) {
//   response.pipe(bl(function(error, data) {
//     console.log(data.length)
//     console.log(data.toString())
//   }))
// })

// learnyounode 9
// var bl = require('bl')
// var http = require('http')
// var result = []
// var totalUrl = process.argv.length - 2
//
// function after(n, callback) {
//   return function() {
//     if (--n === 0) callback(result)
//   }
// }
//
// var done = after(totalUrl, function(r) {
//   r.forEach(function(data) {
//     console.log(data)
//   })
// })
//
// function httpCall(i) {
//   http.get(process.argv[i+2], function(response) {
//     response.pipe(bl(function(error, data) {
//       result[i] = data.toString()
//       //console.log(i + " " + data.toString())
//     }))
//     response.on('end', function() {
//       done()
//     })
//   })
// }
//
// for (var i = 0; i < totalUrl; i++) {
//   httpCall(i)
// }

// learnyounode 10
//var net = require('net');
//var strftime = require('strftime');
//
//var server = net.createServer(function(socket) {
//    console.log("Client Connected");
//    var date = new Date;
//    time = strftime('%Y-%m-%d %H:%M');
//    socket.write(time + '\r\n');
//    //socket.pipe(socket);
//    socket.destroy();
//    socket.on('end', function() {
//        console.log("Client disconnected");
//    })
//});
//server.listen(process.argv[2], function () {
//    console.log("Time server started. Listening on port " + process.argv[2]);
//});

// learnyounode 11

