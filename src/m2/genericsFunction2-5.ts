//Generics with function

// const createArrayWithString = (value: string)=> [value]

// const createArrayWithNumber = (value: number)=> [value]

// const createArrayWithObj = (value: {id:number; name:string})=> {
//     return [value]
// }


//generic -------

const createArrayWithGeneric =<T> (value: T) =>{
    return [value]
}


const arrString = createArrayWithGeneric ('Apple')
const arrNumber = createArrayWithGeneric  (222)
const arrObj = createArrayWithGeneric({
    id: 123, name: 'Next Level',
})



// const arrString = createArrayWithString ('Apple')
// const arrNumber = createArrayWithNumber (222)
// const arrObj = createArrayWithObj ({
//     id: 123, name: 'Next Level',
// })


//tuple
const createArrayWithTuple=(param1: string, param2:string)=> [param1,param2]

const createArrayTupleWithGeneric =<X,Y>(param1:X, param2:Y) => [param1,param2]

const res1 = createArrayTupleWithGeneric(222,{ name:'Mezba'})


//

const addStudentToCourse = <T>(studentInfo:T)=>{
    return {
        course: 'Next Level',
        ...studentInfo
    }
};

const student1 = {
    id: 123,
    name: "Mezba",
    hasPen: true,
}

const student2 = {
    id: 321,
    name: 'Jhankar Mahbub',
    hasCar: true,
    isMarried: true,
};

const result1 = addStudentToCourse(student1);
console.log(result1);

const result2 = addStudentToCourse(student2);
console.log(result2);

