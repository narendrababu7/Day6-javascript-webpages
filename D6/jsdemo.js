// console.log("Welcome to Js Script");
// Document.write("<h1>Welcome to Js Script</h1>");
// let X=10;
// var y=20;
// const z=30;
// a=100;
// console.log(X);
// let x = "this is a string";
// console.log(typeof x);
// let x;
// console.log(x)
// let a=null;
// console.log(a)
//let flowers=["Rose", "Lilly", "Tulip"];
//console.log(flowers)
//let person={name: "John",age: 30, city: "new york"};
//console.log(person)
//dailog boxes
//alert()//give the kind of output
//prompt()// takes the input in box
//confirm()// confirm dialogbox
//alert("hii this is my page!")
//let name = prompt("Enter name :");
//alert(name1);
//expression ? true : false;
//confirm("are a human?") ? alert("Welcome!") : alert("Access denided")

//let age=prompt("Enetr your age: ")
//if (age>=18){
    //alert("you are eligible to vote,");
//}
//else{
   //  alert("you are not eligible to vote,");
//}

//using ternary operator
//age>=18 ?  alert("you are eligible to vote,") :  alert("you are not eligible to vote,");

//let num =prompt("Enter a number: ")
//if(num>100){
   // alert("The number is greater than 100.");
//}
//else if (num > 50){
 //   alert("The number is greater than 50 but less than or equal to 100.");
//}
//else if(num > 0){
 //    alert("The number is greater than 0 but less than or equal to 50.");
//}
//else{
 //    alert("The number is less than or equal to 0.");
//}

//nested condition
//syntax
//if (condition1) {
   // if (condition2){
        //code to be executed
   // }
   // else{
        //code to be
   // }
//}
//else{
//    //code
//}  
//const age= prompt("Enter a age: ");
//if(age>17){
//    const count= prompt("Enter a blood count: ");
//    if (count>=100000){
//         const hemo= prompt("Enter a hemoglobin in % :");
//         if(hemo>=12){
//             const sugar= prompt("Enter a blood sugar level");
//             if(sugar >=80 && sugar <=120){
//                 alert("You are eligible to donate blood.");
//             }else{
//                 alert("You are not eligible to donate blood due to high sugar level.");
//             }
//         }else{
//             alert("You are not eligible to donate blood due to low hemoglobin.");
//         }
//     }
//     else{
//         alert("You are not eligible to donate blood due to low blood count.");
//     }
// }
// else{
//     alert("You are not eligible to donate blood due to age restriction");
// }
//for loop
//while loop
//do while




// for (initialization; Condition; increment/decrement){
//     //code
// }
// //program
let n=prompt("Enetr a number");
if (n>0){
for (let i=1;i<=n;i++){
    console.log(i);
}
}
else{
    alert("please enter a position number.");
}