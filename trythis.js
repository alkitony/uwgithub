const http = require('http');
const request2 = require('request');

const app = http.createServer((request, response) => {
    const data = request2({
        url: 'https://api.github.com/repositories?since=1000',
        json: true,
        headers: { 'user-agent': 'tonys-app' }
    }, (error, response, body) => console.log(response.body));

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('hello');
    response.end();
});

app.listen(3000);