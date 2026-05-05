//constraint : strict rules deya

type Student = {id:number; name: string; dateOfBirth: string; class: string}

const addStudentToCourse = <T extends Student >(studentInfo:T)=>{
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

const student3={
    id: 444,
    name: 'Abdur Rakib',
    hasWatch: true,
    dateOfBirth: '20-20-2020',
    class: '1'
};

// const result1 = addStudentToCourse(student1);
// console.log(result1);

// const result2 = addStudentToCourse(student2);
// console.log(result2);

const result3 = addStudentToCourse(student3);
console.log(result3);
