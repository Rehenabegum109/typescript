type User ={
     id:number,
    name:{
        firstName:string;
        middleName:string;
        lastName:string;
    },
    gender:string;
    contactNo:string;
    address:{
        divisiton:string;
    }
}


const user1 :User={
    id:1234,
    name:{
        firstName:'Rehana',
        middleName:'akter',
        lastName:'munira'
    },
    gender:'Female',
    contactNo:'01712345678',
    address:{
        divisiton:'Dhaka'
    }
};
const user2 :User={
    id:5678,
    name:{
        firstName:'lehana',
        middleName:'akter',
        lastName:'monira'
    },
    gender:'Female',
    contactNo:'01812345678',
    address:{
        divisiton:'sylhet'
    }
};
type IsAdmin =true;
const isAdmin :IsAdmin =true;
type Name =string;
const myName:Name ='Ms. Rehana Akter Munira';
type AddFunc =(num1:number, num2:number) =>number;
const add :AddFunc =(num1,num2) => num1+num2