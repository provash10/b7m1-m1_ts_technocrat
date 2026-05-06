//Utility types
//typescript utility types >>> https://www.typescriptlang.org/ko/docs/handbook/utility-types.html

type Product ={
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
};

//manually
// type ProductSummery ={
//     id: number;
//     name: string;
//     price: string;
// }

type ProductSummery = Pick<Product, 'id' | 'name' | 'price'>;

type ProductWithoutStock = Omit<Product, 'stock' | 'color'>;

type ProductWithColor = Required<Product>

const product: ProductWithColor={
    id: 222,
    name: 'Mouse',
    price: '20',
    stock: 100,
    color: 'black',
};

type OptionaProduct = Partial<Product>

type ProductReadonly = Readonly<Product>


const emptyObj: Record<string, unknown>={};
const product1={
    id: 222,
    name: 'Mouse',
    price: '20',
};

