type User = {
    id: number,
    name:{
        firstName: string;
        middleName: string;
        lastName: string;
    },
    gender: 'male'|'female',
    contactNo: string,
    address:{
        division: string;
        city: string;
    }
}

// const user3:{
//     id: number,
//     name:{
//         firstName: string;
//         middleName: string;
//         lastName: string;
//     },
//     gender: 'male'|'female',
//     contactNo: string,
//     address:{
//         division: string;
//         city: string;
//     }
// } = {
//     id: 333,
//     name:{
//         firstName: 'Micheal',
//         middleName: 'Robrtto',
//         lastName: 'Brown'
//     },
//     gender: 'male',
//     contactNo: '01710123456',
//     address:{
//         division: 'Dhaka',
//         city: 'dhaka',
//     }
// }

// const user4:{
//     id: number,
//     name:{
//         firstName: string;
//         middleName: string;
//         lastName: string;
//     },
//     gender: 'male'|'female',
//     contactNo: string,
//     address:{
//         division: string;
//         city: string;
//     }
// } = {
//     id: 777,
//     name:{
//         firstName: 'Tendsa',
//         middleName: 'David',
//         lastName: 'Hasi'
//     },
//     gender: 'female',
//     contactNo: '01811121212',
//     address:{
//         division: 'Khulna',
//         city: 'Khulna',
//     }
// }

const user3: User = {
    id: 333,
    name:{
        firstName: 'Micheal',
        middleName: 'Robrtto',
        lastName: 'Brown'
    },
    gender: 'male',
    contactNo: '01710123456',
    address:{
        division: 'Dhaka',
        city: 'dhaka',
    }
}

const user4: User = {
    id: 777,
    name:{
        firstName: 'Tendsa',
        middleName: 'David',
        lastName: 'Hasi'
    },
    gender: 'female',
    contactNo: '01811121212',
    address:{
        division: 'Khulna',
        city: 'Khulna',
    }
}

//function

type AddFunc = (num1:number, num2:number) => number

const add: AddFunc = (num1, num2) => num1 + num2