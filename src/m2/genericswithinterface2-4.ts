
//Generics with interface

interface Developer<T,X=null>{
    name: string;
    salary: number;
    device:{
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?:X
}

type BrandwithWatch={ 
    heartRate: string;
    stopwatch : boolean;
}

interface BrandLatest{
    heartRate: string;
    callSupport: boolean;
    calculator: boolean;
    aiFeature:boolean;
}

const poorDeveloper : Developer<BrandwithWatch,{
    brand:'Yahama', engineCapacity: '200cc'
}> = {
    name: 'Mr. Rich',
    salary:100,
    device: {
        brand:'lenevo',
        model: 'A21',
        releasedYear: '2010'
    },
    smartWatch: {
        heartRate: '200',
        stopwatch : true,
    }
};

////////////////
const richDeveloper : Developer<BrandLatest> = {
    name: 'Mr. Poor',
    salary:200,
    device: {
        brand:'hp',
        model: 'x34',
        releasedYear: '2030'
    },
    smartWatch: {
        heartRate: '200',
        callSupport: true,
        calculator: true,
        aiFeature: true,
    },
    bike: null,
};
