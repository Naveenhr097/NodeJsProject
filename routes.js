const fs = require('fs');

const requsetHandler = (req, res) => {
const url = req.url;
console.log(url);
const method = req.method;
if(url === '/'){
res.setHeader("Content-Type", "text/html");
res.write('<body><form action = "/message" method = "POST"><input type = "text" name = "message"><button type = "Submit">Click</body>');
return res.end();
}

if(url === '/message' && method === 'POST'){
    const body = [];
   req.on('data', (chunk)=>{
    body.push(chunk);
    console.log(chunk);
   });

    return req.on('end', ()=>{
    const parsebody = Buffer.concat(body).toString();
    console.log(parsebody);
    const message = parsebody.split('=')[1];
    fs.writeFile('message.txt', message, (err)=>{
        if(err) throw err
        res.statusCode = 302;
        res.setHeader('Location' , '/');
        return res.end();
    });
    res.end();
   });
}};

module.exports = requsetHandler;