// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Diska from '../../assets/cardDiski.png';
import Card from './Cards';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Cart = () => {
    const shina = [
        { id: 1, img: Diska, type: 'Комплект дисков RIAL PADUA', character: '5x112 7.5x16 ET38 D70.1 sterling-silver', price: '192 000 тг', paying: 'Оплатить', order: 'Заказать', checkout: 'Оформить рассрочку' },
        { id: 2, img: Diska, type: 'Комплект дисков RIAL PADUA', character: '5x112 7.5x16 ET38 D70.1 sterling-silver', price: '192 000 тг', paying: 'Оплатить', order: 'Заказать', checkout: 'Оформить рассрочку' },
        { id: 3, img: Diska, type: 'Комплект дисков RIAL PADUA', character: '5x112 7.5x16 ET38 D70.1 sterling-silver', price: '192 000 тг', paying: 'Оплатить', order: 'Заказать', checkout: 'Оформить рассрочку' },
        { id: 4, img: Diska, type: 'Комплект дисков RIAL PADUA', character: '5x112 7.5x16 ET38 D70.1 sterling-silver', price: '192 000 тг', paying: 'Оплатить', order: 'Заказать', checkout: 'Оформить рассрочку' },
        { id: 5, img: Diska, type: 'Комплект дисков RIAL PADUA', character: '5x112 7.5x16 ET38 D70.1 sterling-silver', price: '192 000 тг', paying: 'Оплатить', order: 'Заказать', checkout: 'Оформить рассрочку' },
        { id: 6, img: Diska, type: 'Комплект дисков RIAL PADUA', character: '5x112 7.5x16 ET38 D70.1 sterling-silver', price: '192 000 тг', paying: 'Оплатить', order: 'Заказать', checkout: 'Оформить рассрочку' },
        { id: 7, img: Diska, type: 'Комплект дисков RIAL PADUA', character: '5x112 7.5x16 ET38 D70.1 sterling-silver', price: '192 000 тг', paying: 'Оплатить', order: 'Заказать', checkout: 'Оформить рассрочку' },
        { id: 8, img: Diska, type: 'Комплект дисков RIAL PADUA', character: '5x112 7.5x16 ET38 D70.1 sterling-silver', price: '192 000 тг', paying: 'Оплатить', order: 'Заказать', checkout: 'Оформить рассрочку' },
    ]


    if (!shina || !Array.isArray(shina) || shina.length === 0) {
        // Проверка наличия массива products
        return <div>No products available</div>;
    }

    const itemsPerPage = 8; // Установите начальное количество товаров на странице
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(1);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const totalPages = Math.ceil(shina.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleProducts = shina.slice(startIndex, endIndex);

    return (
        <>
            <div className='flex gap-4 flex-col w-full justify-center items-center'>
                <div className='flex gap-2 flex-wrap mb-10 mt-4 justify-center'>
                    {visibleProducts.map((e) => (
                        <Card
                            key={e.id}
                            img={e.img}
                            type={e.type}
                            price={e.price}
                            paying={e.paying}
                            order={e.order}
                            checkout={e.checkout}
                        />
                    ))}
                </div>
                <button type='submit' className='bg-primary mt-5 py-1 px-3 text-white rounded active:bg-blue-700'>
                    Заказать все
                </button>
                <Stack spacing={2} sx={{ mt: 2 }}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handleChangePage}
                    />
                </Stack>
            </div>

        </>
    );
};

export default Cart;