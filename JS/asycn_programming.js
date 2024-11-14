function register() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Register end");
            resolve();
        }, 3000);
    })
}
function sendemail() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("email sent");
            resolve();
        }, 3000);
    })
}
function login(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Login successful");
            resolve();
        },3000);
    })
}
function getData() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Got user data");
            resolve();
        }, 3000);
    })
}
function displayData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("User data displayed");
            resolve();
        })
    })
}

console.log("Work other applications");
register().then(sendemail).then(login).then(getData).then(displayData);