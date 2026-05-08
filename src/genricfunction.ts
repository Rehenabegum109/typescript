const createArrayWithGenric =<T> (value:T) =>{
    return [value];
};
const arrString =createArrayWithGenric('Apple');
const arrNumber =createArrayWithGenric(2222);
const arrObj=createArrayWithGenric({
    id:12,
    Name :'Next Level Developer'
});

// Tuple
const createArrayWithGenricTuple =(param1:string, param2:string) =>{
    return [param1, param2];
};
const createTupleWithGenric =<X,Y> (param1:X , param2:Y) =>{
    return [param1, param2];
};
const res1 =createTupleWithGenric('Rehena', false);
const res2 =createTupleWithGenric('Rehena',{ name:'Rehena'});


const addStudentCourse =<T> (studentInfo: T) =>{
    return {
        course:'Next Level Developrt',
        ...studentInfo
    };

};
const student1 ={
    id:123,
    Name:'Rehena',
    hasPen:true
};
const student2 ={
    id:45,
    name:'Alice',
    hasCar :true
};
const res3 =addStudentCourse(student2);
console.log(res3);