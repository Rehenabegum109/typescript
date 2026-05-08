// key of :type operator

type RichPeopleVehicle ={
    car:string;
    bike:string;
    cng:string;
};
type MyVehicle ='bike' | 'car' | 'cng';
type MyVehicle2 =keyof RichPeopleVehicle;

const MyVehicle:MyVehicle2 ='ship';

type User ={
    id:number;
    name:string;
    address:{
        city:string;
    }
};

const user:User ={
    id:222,
    name:'Rehena',
    address:{
        city:'shkandae'
    },
};


const myId =user['id'];
const myName =user['name'];
const mycity =user['address'] ['city'];
console.log({myId,myName,mycity})