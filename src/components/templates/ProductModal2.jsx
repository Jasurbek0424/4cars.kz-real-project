// eslint-disable-next-line no-unused-vars
import React from 'react';
import Cards from './Cards';
import Complect from '../../assets/complect.png';

const ProductModal2 = () => {

    const shina = [
        { id: 1, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 2, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 3, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 4, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
    ]
    return (
        <>
            <div className='flex gap-4 flex-wrap mt-10'>
                <Cards card={shina} />
                <Cards card={shina} />
            </div>
        </>
    );
};

export default ProductModal2;