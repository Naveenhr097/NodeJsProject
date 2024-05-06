// // // const request = new XMLHttpRequest();
// // // const url = 'https://www.boredapi.com/api/activity';
// // // request.open('GET', url);
// // // request.send();

// // // const url = 'https://catfact.ninja/docs/api-docs.json';
// // const url = `https://reqres.in/api/user/`;
// // // let idx = [];
// // const getcondata = () =>{
// //     fetch (url)
// //     .then (res => res.json())
// //     .then (({data}) => data.forEach(({id}) => { 
        
// //     fetch(url+`${id}`)
// //     .then (res => res.json())
// //     .then(data => console.log(data))
// //     })
// //     )}
// // // const request = fetch(url)
// // // request.then(res => res.json())
// // // .then(data => {
// // //     data.data.forEach((element , idx) => {
// // //         console.log(url+`${element.id}`);
// // //  return fetch(url+`${element.id}`)  
// // //  .then(res => res.json())
// // // .then((data) => {
// // //     console.log(`data of ${idx} user`)
// // //     console.log(data)
// // //     })
// // //     })
// // // })

// // const url = `https://reqres.in/api/user/`;
// const url = 'http://idghasikjba.com/';
 
// const getcondata = () => {
// fetch(url)
// .then(
//     res => {res.json(); console.log(res.status)}, 
//     err => {console.log("err is :"); console.log(err)} 
//     )
// }

// getcondata();

const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes);

server.listen(2000);