// ? : ternary operator :decision making operator
// ?? : nulish coalescing operator
// ?. optional chaining operator


const marrigeEligibility =(age :number) =>{
    // if(age >=21){
    //     console.log('you are eligible for marriege');
    // }else{
    //     console.log('you are not eligible for marriege!')

    // };
    const result =age >=21 ? 'you are eligible for marriege':'your are not eligible for marriege!';
    console.log(result)
}
marrigeEligibility(55);

const userTheme ="Green theme";
const selectedTheme =userTheme ?? 'Dark theme';
console.log(selectedTheme);
