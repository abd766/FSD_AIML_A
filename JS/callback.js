function register(cb) {
    setTimeout(() => {
        console.log("Register end");
        cb();
    }, 3000);
}
function sendemail(cb) {
    setTimeout(() => {
        console.log("email sent");
        cb();
    }, 3000);
}
function login(cb) {
    setTimeout(() => {
        console.log("login successful");
        cb();
    }, 3000);
}
function getData(cb) {
    setTimeout(() => {
        console.log("get user data");
        cb();
    }, 3000);
}
function displayData() {
    console.log("display user data");
}

function wait() {
    const ms = 3000 + new Date().getTime();
    while (ms > new Date()) { }
}
register(function () {
    sendemail(function () {
        login(function (){
            getData(function (){
                displayData();
            })
        });
    });
});
