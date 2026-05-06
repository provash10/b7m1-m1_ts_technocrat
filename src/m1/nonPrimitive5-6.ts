// array, object

let bazarList: string[] = ['eggs','milk','sugar']

bazarList.push(true)

let mixedArr:(string | number)[] = ['eggs',12,'milk',1,'sugar',2]

mixedArr.push('apple')        //ok
mixedArr.push(123);           //ok
mixedArr.push('apple | 432')  //ok

mixedArr.push(true)  //wrong

//tuple
let coordinates:[number,number]=[20,30] //ok
let coordinates1:[number,number]=[20,30,50]  //wrong

let couple:[string,string] = ['Husband','wife']

let nameRoll:[string,number] = ['Kotha', 100];

let destination:[string,string,number] = ['Dhaka', 'Khulna',4];

//reference type : object

const user :{
    firstName : string;
    middleName : string;
    lastName : string
} = {
    firstName : 'Athoi',
    middleName : 'Barman',
    lastName : 'Kotha'
}

const user1 :{
    organization : string;
    level : 'ph next level';   //value => type: literal types   // no change
    readonly batch : string;  // access modifier                // no change  with readonly

    firstName : string;
    middleName? : string;   //optional type/ chainning use for middleName if not have
    lastName : string;
    isMarrid: boolean
} = {
    firstName : 'Provash',
    // middleName : 'something',
    lastName : 'Barman',
    isMarrid : true,

    organization : 'ph',
    level : 'ph next level',
    batch : 'Seven'
}

user1.organization = 'Programming Hero'

console.log(user1)



