type GenericArray<T> =Array<T>;
// const friends :string[] =['alice','bob','charlie'];
const friends :GenericArray<string> =['alice','bob','charlie'];

// const rollNumbers :number[] =[1,2,3,4,5,6,7,8,9];
const rollNumbers :GenericArray<number> =[1,2,3,4,5,6,7,8,9];
// const isEligibleForMarriege:boolean[] = [true, false, true];
// const isEligibleForMarriege:Array<boolean> = [true, false, true];
const isEligibleForMarriege:GenericArray<boolean> = [true, false, true];

const sqrFunc =(value :number) =>{
    return value*value
}

type Coordinates <X,Y> =[X,Y];
const Coordinates1 :Coordinates<number,number> =[20,30];
const Coordinates2:Coordinates<string,string> =['20','60']

const userlist :GenericArray<{name:string, age:number}> =[
    {
        name:'Rehena',
        age:45
    },
    {
        name:'Alice',
        age:67
    }
]