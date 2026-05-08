const arrayOfNum :number[] =[1,2,3,54]
const arrayOfstr :string[] =['apple','3','4']

const arrayOfStringMap:string[] =arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringMap);
type AreayOfNum ={
    height:number;
    width:number
};
type height =AreayOfNum["height"];

type AreaOfStr ={
    height:string;
    width:string;
}

// type AreaOfstring ={
// [key in 'height' | 'width]:string}

// type AreaOfBool ={
//     [key in keyof AreayOfNum]:boolean
// }
type Area<T> ={
    [key in keyof T]:T[key];
};

const area1 :Area<{ height: number; width: boolean }> = {
    height: 10,
    width: false
};