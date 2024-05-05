// const request = new XMLHttpRequest();
// const url = 'https://www.boredapi.com/api/activity';
// request.open('GET', url);
// request.send();

const { json } = require("express/lib/response");

// const url = 'https://catfact.ninja/docs/api-docs.json';
const url = `https://reqres.in/api/user/`;

const getcondata = () => {
const request = fetch(url)
request.then(res => res.json())
.then(data => {
    data.data.forEach((element , idx) => {
        console.log(url+`${element.id}`);
 return fetch(url+`${element.id}`)  
 .then(res => res.json())
.then((data) => {
    console.log(`data of ${idx} user`)
    console.log(data)
    })
    })
})
}

getcondata();