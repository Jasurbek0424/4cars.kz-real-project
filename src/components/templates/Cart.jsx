// eslint-disable-next-line no-unused-vars
import React from 'react';
import Diska from '../../assets/cardDiski.png';
import Card from './Cards';

const Cart = () => {
    const shina = [
        { id: 1, img: Diska, type: 'Комплект дисков RIAL PADUA', character: '5x112 7.5x16 ET38 D70.1 sterling-silver', price: '192 000 тг', paying: 'Оплатить', order: 'Заказать', checkout: 'Оформить рассрочку' },
        { id: 2, img: Diska, type: 'Комплект дисков RIAL PADUA', character: '5x112 7.5x16 ET38 D70.1 sterling-silver', price: '192 000 тг', paying: 'Оплатить', order: 'Заказать', checkout: 'Оформить рассрочку' },
        { id: 3, img: Diska, type: 'Комплект дисков RIAL PADUA', character: '5x112 7.5x16 ET38 D70.1 sterling-silver', price: '192 000 тг', paying: 'Оплатить', order: 'Заказать', checkout: 'Оформить рассрочку' },
        { id: 4, img: Diska, type: 'Комплект дисков RIAL PADUA', character: '5x112 7.5x16 ET38 D70.1 sterling-silver', price: '192 000 тг', paying: 'Оплатить', order: 'Заказать', checkout: 'Оформить рассрочку' },
    ]

    return (
        <>
            <div className='flex gap-4 flex-wrap w-full justify-center'>
                <Card card={shina} />
            </div>
            <button type='submit' className='bg-primary mt-5 py-1 px-3 text-white rounded active:bg-blue-700'>
                Заказать все
            </button>
        </>
    );
};

export default Cart;