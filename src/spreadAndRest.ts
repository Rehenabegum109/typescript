const friends =['Rahim','karim'];
const schoolFriends =['pintu,mintu','cintu'];
const collegeFriends =['Rafiq','Jamal'];

friends.push(...schoolFriends,...collegeFriends);
console.log(friends)

const user ={
    name:'Rehena Akter',
    age:23,
    salary:3500
};
const otherInfo ={
    location:'sylhet',
    profession :'web developer'
};
const newUser ={...user, ...otherInfo};
console.log(newUser);

const sendInvite =(friend :string, friend2:string, friend3:string) => {
    console.log(`please come to my party ${friend}, ${friend2}, and ${friend3}`)
}
sendInvite('Rahim','karim','Rafiq');
console.log(sendInvite)