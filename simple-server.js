var http = require('http');
var person = require('./person');


http.createServer(function(request, response){
	
	console.log(JSON.stringify(request.headers))
	response.writeHead(200, {
		'Content-Type' : 'application/json'
		//Als er function voor staat bij {} = asynchroon afgespinned, bij geen function niet.
	})
	
//	response.end(
//	JSON.stringify({user: 'thomas', id:1
//	})
//	)

	response.end(JSON.stringify(person.i18l('')));
}).listen(8080);



console.log('Lekker port 8080');