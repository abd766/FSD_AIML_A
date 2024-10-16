// let a = 12
// if(a>10){
//     a = 30;
//     let b= 10
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// function hello(){
//     console.log("Hello");
// }
// hello();
// function add(x, y){
//     let z =  x+y;
//     console.log(y);
// }
// add(5,7);

// const hello = ()=> {return "Hello"}
// const sum = (x,y ) => { return x+y}

// console.log(hello);
// // console.log(sum(2,5));

// const student = {
//     name:"Xyx",
//     branch:"Aiml",
//     sec:"A"
// }

// const copy_student = { ...student,name:"Abc"}
// console.log(student);
// console.log(copy_student);

// const person = {
//     name:"Xyx",
//     age: 45,
//     salary: 11560.49
// }
// let {name, age, salary} = person;
// console.log(name);
// console.log(age);
// console.log(salary);

// const emp =["abc",23,11546.90]
// let [a,b,c]  = emp
// console.log(a,b,c);

// let map1 = new Map([
//     [1, 10],
//     [2, 20],
//     [3, 30],
//     [4, 40]
// ]);

// // console.log(map1.get(1));
// map1.set("key2","java");
// map1.set("key3","py");
// console.log(map1.get("key2"));
// console.log(map1.get("key3"));
// console.log(map1)


const myset = new Set();
console.log(myset);
myset.add(23);
myset.add(42);
myset.add(63);
myset.add(23);
console.log(myset);
const num = [1,2,3,4,5,6]
// const even = num.filter((value)=> (value % 2 == 0));
// const evenNums = new Set(
//     Array.from(myset).filter((value)=> {value % 2 == 0})
// );
// console.log(even);

const a1 = num.reduce((s,n)=>{
    return n+s;    
})
console.log(a1);