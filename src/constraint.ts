// constrains :strict rules deye
type student = { id: number ;name:string ,dateOfBirth: string }
const addStudentCourse =<T extends student> (studentInfo: T) =>{
    return {
        course:'Next Level Developrt',
        ...studentInfo
    };

};
const student1 ={
    id:123,
    Name:'Rehena',
    hasPen:true,
    dateOfBirth:'1990-01-01'
};
const student2 ={
    id:45,
    name:'Alice',
    hasCar :true
};
const student3 ={
    id:444,
    name:'Bob',
    hasWatch:true
}
const res3 =addStudentCourse(student3);
console.log(res3);