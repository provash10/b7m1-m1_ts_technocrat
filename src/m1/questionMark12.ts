// ? :  ternary operator : decision making
// ??: nullish coalescing operator depends/works on null/undefined
// ?. optional chaining


const marriageEligible = (age:number)=>{
    // if(age>=21){
    //     console.log('You are eleigible')
    // }
    // else{
    //      console.log('You are not eleigible')
    // }

    // ? :  ternary operator : decision making

const result= age>=21 ? 'Granted 21' : 'Reject 20';
// return result;
console.log(result)
}

marriageEligible(21)
marriageEligible(20)


// ??: nullish coalescing operator

const userTheme = undefined  //default theme Light Theme
const selectedTheme = userTheme ?? 'Light Theme'

console.log(selectedTheme)

//OR
const userTheme2 = null   //default theme Light Theme
const selectedTheme2 = userTheme2 ?? 'Light Theme'

console.log(selectedTheme2)

//OR
const userTheme3 = 'Green Theme'   // Green Theme
const selectedTheme3 = userTheme3 ?? 'Light Theme'

console.log(selectedTheme3)

//OR
const userTheme4 = ''   //  empty
const selectedTheme4 = userTheme4 ?? 'Light Theme'

console.log(selectedTheme4)


const isAuthenticated = null

const resultWithTernary = isAuthenticated ? isAuthenticated : 'You are guest';

const resultWithNulish = isAuthenticated ?? 'You are guest'

console.log({resultWithTernary},{resultWithNulish})


// ?. optional chaining
const user : {
    address:{
        city: string;
        town: string;
        postalCode?: string;
    }
}={
    address:{
        city: 'Dhaka',
        town: 'Gulistan',
    }
}

const postalCode = user?.address?.postalCode;
console.log(postalCode)