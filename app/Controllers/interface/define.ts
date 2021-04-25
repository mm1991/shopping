export interface Goods { 
    name: string, 
    amount:number, 
    price: number,
    intro: string
};

export interface GoodsGid { 
    gid: number
};

export interface OrderDefine { 
    gid: number,
    amount: number
};