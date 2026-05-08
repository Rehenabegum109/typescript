class Student {
    name:string;
    age:number;
    address:string;

    constructor(name:string, age:number, address:string) {
        this.name = name;
        this.age = age;
        this.address = address;
    };
    getSleep(numOFHours: number) {
        console.log(`${this.name} ${numOFHours} hours of sleep`)
    }
};
const student1 =new Student('Ms Rehena',22, 'Sylhet');
student1.getSleep(6);






class Teacher {
    name:string;
    age:number;
    address:string;
    designation:string;

    constructor(name:string, age:number, address:string,designation :string ) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation =designation


    };
    getSleep(numOFHours: number) {
        console.log(`${this.name} ${numOFHours} hours of sleep`)
    };
    takeClass(numOfClass:number){
        console.log(`${this.name} is taking class:${numOfClass}`)
    }
};
const teacher1 = new Teacher('Mr. Ahmed', 35, 'Dhaka', 'Professor');
teacher1.getSleep(8);
teacher1.takeClass(6);

class Parent {
    name:string;
    age:number;
    address:string;
    constructor(name:string,age:number, address:string) {
        this.name=name,
        this.age=age;
        this.address=address
    }
}
class Manager extends Parent {
    designation:string;
    constructor(name:string, age:number,address:string, designation:string) {
        super(name,age,address)
        this.designation=designation
    };


};
const Manager1 =new Manager(
    'Mr. Smart miha',
    45,"bangladesh",'senior teacher'
);
Manager1.a
