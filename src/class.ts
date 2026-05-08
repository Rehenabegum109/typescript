// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} is making sound: ${this.sound}`);
//   }
// }

// perameter properties
class Animal {
 
  constructor(public name: string, public species: string, public sound: string) {
    
  }

  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}
const cat = new Animal('cat', 'Feline', 'meow meow');
const dog = new Animal('dogesh', 'Canine', 'Gew gew');

dog.makeSound();
cat.makeSound();