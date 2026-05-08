// // type guard
// // in typeOf

// type Alphaneumeric = number | string;

// const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
//   if (typeof num1 === 'number' && typeof num2 === 'number') {
//     return num1 + num2;
//   } else {
//     return num1.toString() + num2.toString(); // ✅ return added
//   }
// };

// console.log(add(2, 2));     
// console.log(add('4', '6')); 
// console.log(add(4, '9'));   

// type NormalUser ={
//   name:string
// };
// type AdminUser ={
//   name:string;
//   role: 'admin';

// };
// const getUserInfo ={user:NormalUser | AdminUser} =>{
//   if('role' in user) {
//     console.log(`${user.name} and his role:${user.role}`)
//   } else{
//     console.log(`${user.name}`)
//   }
// };
// getUserInfo({name :'Normal', role:'admin'})

// =====================
// Type Guard Example
// =====================

type Alphanumeric = number | string;

const add = (num1: Alphanumeric, num2: Alphanumeric) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

console.log(add(2, 2));     
console.log(add('4', '6')); 
console.log(add(4, '9'));   

// =====================
// User Type Guard Example
// =====================

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: 'admin';
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ('role' in user) {
    console.log(`${user.name} and his role: ${user.role}`);
  } else {
    console.log(`${user.name}`);
  }
};

// function calls
getUserInfo({ name: 'Normal' });
getUserInfo({ name: 'Admin', role: 'admin' });