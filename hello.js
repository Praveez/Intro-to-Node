var http = require('http');
var fs = require('fs');
var url =require('url');
const PORT = process.env.PORT || 5000

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	if(filename == './') {filename = './index';}

	filename = filename + ".html";

	fs.readFile(filename, function(err, data){
		if (err) {
			res.writeHead(404, {'Content-Type' : 'text/html'});
			return res.end("404 NOT Found");
		}
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(data);
		res.end();
		return res.end();	
		
	});
	
}).listen(PORT);


console.log("Server listening on Port 8000...");