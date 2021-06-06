import * as types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));

//var initialState = data ? data:[];
var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 8 Plus',
            image: 'https://i5.walmartimages.com/asr/d2593601-ce4e-4175-a732-0fe33c230b71_1.ffe07c6451044c475c78601735e2f4b1.jpeg',
            description: 'san pham do apple san xuat',
            price: 500,
            inventory: 10,
            rating: 3
        },
        quantity: 5
    }
];


const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART: {
            console.log('action', state)
            return [...state];
        }
        default: return [...state];
    }
}

export default cart;