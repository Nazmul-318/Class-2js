
// Gradeing system.

console.log(`Result Grade and GPA :
----------------------------
`);

let bangla = Number(prompt('Bangla'));
let english = Number(prompt('English'));
let math = Number(prompt('Math'));
let islam = Number(prompt('Islam'));
let science = Number(prompt('Science'));


let Total = bangla + english + math + islam + science ;
let gpa = Total /100;


if(bangla >= 0 &&  bangla <= 32){
    console.log(`Grade : F`);
}
else if(bangla >=33 && bangla <= 39){
    console.log(`Grade : D`);
}
else if(bangla >=40 && bangla <= 49){
    console.log(`Grade : C`);
}
else if(bangla >=50 && bangla <= 59){
    console.log(`Grade : B`);
}
else if(bangla >=60 && bangla <= 69){
    console.log(`Grade : A-`);
}
else if(bangla >=70 && bangla <= 79){
    console.log(`Grade : A`);
}
else if(bangla >=80 && bangla <= 100){
    console.log(`Grade : A+`);
}
else{
    console.log(`invalid`);
}

if(english >= 0 &&  english <= 32){
    console.log(`Grade : F`);
}
else if(english >=33 && english <= 39){
    console.log(`Grade : D`);
}
else if(english >=40 && english <= 49){
    console.log(`Grade : C`);
}
else if(english >=50 && english <= 59){
    console.log(`Grade : B`);
}
else if(english >=60 && english <= 69){
    console.log(`Grade : A-`);
}
else if(english >=70 && english <= 79){
    console.log(`Grade : A`);
}
else if(english >=80 && english <= 100){
    console.log(`Grade : A+`);
}
else{
    console.log(`invalid`);
}


if(math >= 0 &&  math <= 32){
    console.log(`Grade : F`);
}
else if(math >=33 && math <= 39){
    console.log(`Grade : D`);
}
else if(math >=40 && math <= 49){
    console.log(`Grade : C`);
}
else if(math >=50 && math <= 59){
    console.log(`Grade : B`);
}
else if(math >=60 && math <= 69){
    console.log(`Grade : A-`);
}
else if(math >=70 && math <= 79){
    console.log(`Grade : A`);
}
else if(math >=80 && math <= 100){
    console.log(`Grade : A+`);
}
else{
    console.log(`invalid`);
}


if(islam >= 0 &&  islam <= 32){
    console.log(`Grade : F`);
}
else if(islam >=33 && islam <= 39){
    console.log(`Grade : D`);
}
else if(islam >=40 && islam <= 49){
    console.log(`Grade : C`);
}
else if(islam >=50 && islam <= 59){
    console.log(`Grade : B`);
}
else if(islam >=60 && islam <= 69){
    console.log(`Grade : A-`);
}
else if(islam >=70 && islam <= 79){
    console.log(`Grade : A`);
}
else if(islam >=80 && islam <= 100){
    console.log(`Grade : A+`);
}
else{
    console.log(`invalid`);
}


if(science >= 0 &&  science <= 32){
    console.log(`Grade : F`);
}
else if(science >=33 && science <= 39){
    console.log(`Grade : D`);
}
else if(science >=40 && science <= 49){
    console.log(`Grade : C`);
}
else if(science >=50 && science <= 59){
    console.log(`Grade : B`);
}
else if(science >=60 && science <= 69){
    console.log(`Grade : A-`);
}
else if(science >=70 && science <= 79){
    console.log(`Grade : A`);
}
else if(science >=80 && science <= 100){
    console.log(`Grade : A+`);
}
else{
    console.log(`invalid`);
}
console.log(`-----------------------------`);
console.log(`Average GPA point = ${gpa}`);
