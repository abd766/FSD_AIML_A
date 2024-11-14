function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register end");
            resolve();
        }, 3000);
    })
}
function sendemail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("email sent");
            resolve();
        }, 3000);
    })
}
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return reject("Login error")
            console.log("Login successful");
        }, 3000);
    })
}
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Got user data");
            resolve();
        }, 3000);
    })
}
function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User data displayed");
            resolve();
        })
    })
}
async function authenticate() {
    try {
        await register();
        await sendemail();
        await login();
        await getData();
        await displayData();
    }catch(err){
        console.log("Error:"+err)
    }
}

console.log("Work other applications");
authenticate();