//oop - class - obj

// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name:string, species:string, sound:string){
//         this.name = name
//         this.species = species
//         this.sound = sound
//     }

//     makeSound(){
//         // console.log(`The animal is making sound`);
//         console.log(`${this.name} is making sound: ${this.sound}`);

//     }

// }


//parameter properties
class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    constructor(public name:string, public species:string, public sound:string){
        // this.name = name
        // this.species = species
        // this.sound = sound
    }

    makeSound(){
        // console.log(`The animal is making sound`);
        console.log(`${this.name} is making sound: ${this.sound}`);

    }

}


const dog = new Animal ('Dogesh', 'dog','Ghew ghew')
console.log(dog.name);
console.log(dog.sound);

const cat = new Animal ('Catesh', 'cat', 'mew mew')
console.log(cat.sound);

console.log(cat.makeSound())



// fuinction add (num1:number, num2:number){

// }

// add(2,3)