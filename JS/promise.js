// const mypromise = new Promise(
//     (resolve, reject)=>{

//         // console.log("Executed Promise");
//         // // resolve("success");
//         // reject("netwrok error")
//     }
// );
// mypromise.then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Bhai ho gya bs")
// })

const user = fetch("https://api.github.com/users/abd766")
user.then((data) => {
    return data.json();

}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
})