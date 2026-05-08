let anything: any;
anything ='Rehena';
// (anything as string)
const kgtoGMConverter =(input : string |number): number | string  |undefined => {
    if(typeof input === 'number') {
        return input *1000;
    } else if(typeof input === 'string') {
        const [value] = input.split(" ")
        return `converted value is :${Number(value) *1000}`
    }
}
const result1 =kgtoGMConverter(2) as number;
console.log({result1})
console.log(kgtoGMConverter("4 kg"))

type CustomError ={
    message :string;
}
try {

}catch (err) {
    console.log((err as CustomError).message)
}