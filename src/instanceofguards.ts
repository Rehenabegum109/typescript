// // oop:instance of type guard type narowing
// class Person {
//     name:string;
//     constructor(name:string){
//         this.name=name
//     };
//     getSleep (numofhours:number) {
//         console.log(`${this.name} daily ${numofhours} hours sleep`)
//     }
// }
//  class Student extends Person {
//     constructor(name:string) {
//         super(name)
//     };
//     doStudy(numOfhours:number) {
//         console.log(`${this.name} daily ${numOfhours} study`)
//     }
//  };

//  class Teacher extends Person {
//     constructor(name:string) {
//         super(name)
//     };
//     takeClass (numOfhours :number) {
//         console.log(`${this.name} daily ${numOfhours} class nein`)
//     }
//  };
//  const isStudent =(user :Person) {
//     return user instanceof Student;
//  };
//  const isTeacher =(user: Person) =>{
//     return user instanceof Teacher;
//  };

//  const getUserInfo =(user:Person) =>{
//     if(isStudent(user)) {
//         user.doStudy(10);
//     } else if(isTeacher(user)) {
//         user.takeClass(5);
//     } else {
//         user.getSleep(7)
//     }
//  }

// =====================
// Base Class
// =====================

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} daily ${numOfHours} hours sleep`);
  }
}

// =====================
// Student Class
// =====================

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfHours: number) {
    console.log(`${this.name} daily ${numOfHours} study`);
  }
}

// =====================
// Teacher Class
// =====================

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfHours: number) {
    console.log(`${this.name} daily ${numOfHours} class nei`);
  }
}

// =====================
// Type Guards (IMPORTANT)
// =====================

const isStudent = (user: Person): user is Student => {
  return user instanceof Student;
};

const isTeacher = (user: Person): user is Teacher => {
  return user instanceof Teacher;
};

// =====================
// Main Function
// =====================

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10); // ✅ now Student type
  } else if (isTeacher(user)) {
    user.takeClass(5); // ✅ now Teacher type
  } else {
    user.getSleep(7);
  }
};

// =====================
// Usage
// =====================

const s1 = new Student("Rehena");
const t1 = new Teacher("Mr. Ahmed");

getUserInfo(s1);
getUserInfo(t1);