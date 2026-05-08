type User = {
    name:string;
    age:number;
};

interface Iuser {
    name:string;
    age:number;
};

type Role ={
    role: "admin" | 'user'
};
type UserWithRole = User & Role;
 interface IUserWithRole extends Iuser {
    role: 'admin' |  'user';
 }
const user1 : IUserWithRole ={
    name:'Reehena',
    age:33,
    role:'admin'
};
const user2 : Iuser ={
    name:"rehena",
    age:44,
};
type IsAdmin =boolean;
const isAdmin :IsAdmin =false
type Add =(num1:number, num2:number) =>
    number;
interface IAdd {
    (num1:number, num2:number) :number;
}
const add:IAdd =(num1,num2) => num1 +num2;
type Friends =string[];
interface IFriends {
    [index:number]:string
}
const friends :IFriends =['alice','bob']