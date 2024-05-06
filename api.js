// const request = new XMLHttpRequest();
// const url = 'https://www.boredapi.com/api/activity';
// request.open('GET', url);
// request.send();

const { json } = require("express/lib/response");

// const url = 'https://catfact.ninja/docs/api-docs.json';
const url = `https://reqres.in/api/user/`;

const getcondata = () => {

// const request = fetch(url)
// request.then(res => res.json())
// .then(data => {
//     data.data.forEach((element , idx) => {
//         console.log(url+`${element.id}`);
//  return fetch(url+`${element.id}`)  
//  .then(res => res.json())
// .then((data) => {
//     console.log(`data of ${idx} user`)
//     console.log(data)
//     })
//     })
// })



try {
    let promises = []
    let dataArr = [];
    fetch(url)
.then(res => res.json())
.then(({data}) => {
    for(let i=0; i<data.length; i++) {
        // console.log(fetch(url+`${data[i].id}`))
        promises.push(fetch(url+`${data[i].id}`))
    }
 })
.then(()=> {
    // console.log(promises);
    Promise.all(promises).then(data => dataArr.push(data.json())).then(() => {
        for(let i=0; i<dataArr.length; i++) {
            // console.log(fetch(url+`${data[i].id}`))
            // promises.push(fetch(url+`${data[i].id}`))
            
            console.log(dataArr[i])
        }
    })
})

// console.log(promises);
// Promise.all(promises).then(data => console.log(data))

} catch (error) {
    console.log(error)
}

}


getcondata();