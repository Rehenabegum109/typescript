type Product ={
    id:number;
    name:string;
    price:number;
    stock:number;
    color?:string
};

type productSummery =Pick<Product,'id'| 'name' | 'price'>;
type ProductWithStock =Omit<Product,'stock' | 'color'>;

type ProductwithColor =Required<Product>;
const product:ProductwithColor ={
    id:1,
    name:'laptop',
    price:40,
    stock:10,
    color:'blue'
}

type optionProduct =Partial<Product>;
type ProductReadOnly =Readonly<Product>;

const emptyObj:Record<string,unknown> ={};
const product1 ={
    id:444,
    name:'mouse',
    price:90,
}