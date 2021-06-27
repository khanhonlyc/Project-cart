var initialState =[
    {
        id : 1,
        name : 'Iphone 8 Plus',
        image : 'https://i5.walmartimages.com/asr/d2593601-ce4e-4175-a732-0fe33c230b71_1.ffe07c6451044c475c78601735e2f4b1.jpeg',
        description : 'san pham do apple san xuat',
        price : 500,
        inventory : 10,
        rating: 3
    },
    {
        id : 3,
        name : 'Samsung Galaxy S20',
        image : 'https://jamobile.co.jp/wp-content/uploads/2020/12/S20-FE.jpg',
        description : 'san pham do samsung san xuat',
        price : 300,
        inventory : 10,
        rating: 4
    }

];

const products = (state = initialState, action) =>{
    //console.log('action',action);
    switch(action.type){
        default : return [...state];
    }
}

export default products;