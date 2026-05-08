interface Developer <T> {
    name:string;
    salary:number;
    device:{
        brand:string;
        model:string;
        releaseYear:number;
    };
    smartWatch:T
};
 const poorDeveloper :Developer <{
    heartRate:string;
    stopWatch:boolean;
    calculator:boolean;
    AiFeatures:boolean
 }> ={
    name:'Rehena',
    salary:2000,
    device:{
        brand:'apple',
        model:'iphone 12',
        releaseYear:2020
    },
    smartWatch:{
        heartRate:'400',
        stopWatch:true,
        calculator:true,
        AiFeatures:true
    }

 }