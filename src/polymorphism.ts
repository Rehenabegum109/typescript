class Person {
    getSleep() {
        console.log(`i am a Normal happy person .I sleep for a 8 hours`)
    }
};
class Students extends Person {
    getSleep() {
        console.log(`i am a studen so i sleep 6 hours`)
    }
};
class NextLevelDeveloper extends Person{
    getSleep() {
        console.log(`i am a next level developer,i sleep for 5 hours`)
    }
};

const getSleepingHours =(param:Person) =>{
    param.getSleep()
}

const person1 =new Person();
const person2 =new Students();

const person3 =new NextLevelDeveloper();
getSleepingHours(person3);

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super(); // ❗ must call
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super(); 
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
};
const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6)
];

shapes.forEach(shape => {
    console.log(shape.getArea());
});