// memory types 
// 1- stack
// 2- heap

let myname="anmol"
let anothername=myname
anothername="arpit"

console.log(myname);
console.log(anothername);

let userone={
    email: "fjn@google.com",
    upi: "jfvn"
}
let usertwo= userone
usertwo.email="hjfb@gmail.com"

console.log(userone.email);
console.log(usertwo.email);
