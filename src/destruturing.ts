// object destruturing
// array destructuring
const user ={
    id:1234,
    name:{
        firstname:"Rehena",
        middlename:'akter',
        lastname:'munira',
        
    },
    gender:'Female',
    age:23,
    favouriteColor:'black'
};
const {favouriteColor ,name: {middlename}} =user;
console.log(favouriteColor,middlename);

const friends =['Rahim','karim','rahima','jkannat'];
const [, , mybestfriend ,c] =friends;
console.log(mybestfriend)