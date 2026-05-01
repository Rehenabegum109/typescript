// union

type UserRole ='admin' | 'user';
const getDeshboard =(role :UserRole) =>{
    if(role === 'admin') {
        return 'admin dashboard';
    } else if(role === 'user') {
        return 'user dashboard';
    }else {
        return 'guest dashboard';
    }
}
getDeshboard('guest')

// intersection

type Employee ={
    id:string;
    name:string;
    phoneNo:string
};
type Manager  ={
    designation :string;
    teamsize:number
};
type Employeemanager =Employee & Manager;
const ChowduriShahab: Employeemanager={
    id:'2345',
    name:'Chowduri shahab',
    phoneNo:'01755875181',
    designation:'CEO',
    teamsize:30
}