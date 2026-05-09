// //node ./src/m3/instanceTypeGuard3-4.ts
// //oop : instance of type guard / type narrowing

// class Person{
//     name: string;

//     constructor(name: string){
//         this.name = name;
//     }

//      getSleep(numOfhours : number){
//         console.log(`${this.name} every ${numOfhours} hours sleeping`)
//     }
// }

// class Student extends Person{
//     constructor(name: string){
//         super(name)
//     }

//     doStudy(numOfhours : number){
//         console.log(`${this.name} every ${numOfhours} hours study`)
//     }
// }

// class Teacher extends Person{
//     constructor(name: string){
//         super(name);
//     }

//      takeClass(numOfhours : number){
//         console.log(`${this.name} every ${numOfhours} hours class nei`)
//     }
// }



// const getUserInfo = (user : Person)=>{
//     if(user instanceof Student){
//         user.doStudy(10)
//     }
//     else if(user instanceof Teacher){
//         user.takeClass(5)
//     }
//     else{
//         user.getSleep(24)
//     }
// }

// const student1 = new Student ('Mr. Student');
// const teacher1 = new Teacher ('Mr. David Brown');
// const person1 = new Person ('Media Recorder. person');


// getUserInfo(student1);
// getUserInfo(teacher1);
// getUserInfo(person1);


//============================ OR function guard use
//node ./src/m3/instanceTypeGuard3-4.ts
//oop : instance of type guard / type narrowing

class Person{
    name: string;

    constructor(name: string){
        this.name = name;
    }

     getSleep(numOfhours : number){
        console.log(`${this.name} every ${numOfhours} hours sleeping`)
    }
}

class Student extends Person{
    constructor(name: string){
        super(name)
    }

    doStudy(numOfhours : number){
        console.log(`${this.name} every ${numOfhours} hours study`)
    }
}

class Teacher extends Person{
    constructor(name: string){
        super(name);
    }

     takeClass(numOfhours : number){
        console.log(`${this.name} every ${numOfhours} hours class nei`)
    }
}

// function guard

const isStudent =(user: Person) =>{
    return user instanceof Student; //true false user is Student
}

const isTeacher = (user: Person)=>{
    return user instanceof Teacher; //true false user is Teacher
}

const getUserInfo = (user : Person)=>{
    if(isStudent (user)){
        user.doStudy(10)
    }
    else if(isTeacher(user)){
        user.takeClass(5)
    }
    else{
        user.getSleep(24)
    }
}

const student1 = new Student ('Mr. Student');
const teacher1 = new Teacher ('Mr. David Brown');
const person1 = new Person ('Media Recorder. person');


getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);