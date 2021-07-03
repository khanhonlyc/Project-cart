import iphone from './img/iphone.jpg';
import sony from './img/sony.jpg';
import oppo from './img/oppo.jpg';

var initialState =[
    {
        id : 1,
        name : 'iPhone 12 Pro',
        image : iphone,
        description : 
        '5Gの速さ。スマートフォンで最速のA14 Bionic チップ。暗い場所で撮った写真を次のレベルへ引き上げる、Proのカメラシステム。iPhone 12 Pro Maxなら、さらにその上の性能を持つカメラが使えます',
        price : 120000,
        rating: 5
    },
    {
        id : 2,
        name : 'Sony XPERIA 10',
        image : sony,
        description : '5G対応のミドルレンジ向けSoC「Snapdragon 690 5G」を搭載。メモリーはこのクラスとしては多めな6GBで、ストレージは128GB。5GはSub-6に対応',
        price : 53000,
        rating: 4
    },
    {
        id : 3,
        name : 'OPPO Reno5',
        image : oppo,
        description : '【CPU】MediaTek Dimensity 1000+ (5G対応、Cortex-A77 x4 + Cortex-A55 x4 8コア, 2.6 GHz); 【GPU】Mali-G77 MC9; 【OS】ColorOS 7.2 (Android 11ベース); 【メモリ】8GB / 12GB; 【ストーレージ】128GB / 256GB',
        price : 42000,
        rating: 2
    }

];

const products = (state = initialState, action) =>{

    switch(action.type){
        default : return [...state];
    }
}

export default products;