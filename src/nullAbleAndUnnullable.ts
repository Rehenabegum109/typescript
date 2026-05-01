// nullable

const getUser =(input: string | number | null | undefined) =>{
    if(input) {
        console.log(`From DB:${input}`);

    }else{
        console.log('From DB:All users')
    }
};
getUser('rehena')


// unknown
const discountCalulator =(input:unknown) =>{
    if(typeof input === 'number') {
const discountPrice =input *0.1;
console.log(discountPrice);
    }else if(typeof input === 'string') {
        // const splittedInput =input.split(" ");
                const [discountPrice] =input.split(" ");
        console.log(Number(discountPrice) *0.1);
    }else {
        console.log('wrong input')
    }
};
discountCalulator(100);
discountCalulator('1000 tk');
discountCalulator(null)

// never
const throwError =(msg :string): never => {
    throw new Error(msg);
}
throwError('Error.....')