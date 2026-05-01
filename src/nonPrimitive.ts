// array,object

let mixedArray: (string | number)[] =['John', 12,'milk',45,'sugar',2];
mixedArray.push(true);
let x = [1,2,3];
let y = x;

y.push(4);

console.log(x); 

let couple: [string, string] =['jahn', 'doe']
couple.push('smith');
let destination :[string,string,number] =['dhaka', 'sylhet', 123];

const user:{
    organization:string;
    firstName:string;
    middleName:string;
    lastName ?:string;
    isMarried: boolean;
} ={
    organization:"Google",
    firstName:'Rehena',
    middleName:'khatun',
    lastName:'khatun',
    isMarried:false,
}
user.organization='microsoft';
console.log(user)