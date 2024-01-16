// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Card from './Cards';
import Complect from '../../assets/complect.png';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ProductModal2 = () => {

    const shina = [
        { id: 1, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 2, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 3, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 4, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 5, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 6, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 7, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 8, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 9, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 10, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
    ]

    if (!shina || !Array.isArray(shina) || shina.length === 0) {
        // Проверка наличия массива products
        return <div>No products available</div>;
    }

    const itemsPerPage = 6; // Установите начальное количество товаров на странице
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
            <div className='flex gap-4 w-full flex-col items-center mt-10'>
                <div className='flex gap-4 w-full flex-wrap mb-10 mt-4 justify-center moreOptions'>
                    {visibleProducts.map((e) => (
                        <Card
                            key={e.id}
                            img={e.img}
                            type={e.type}
                            price={e.price}
                            status={e.status}
                            none={e.none}
                        />
                    ))}
                </div>

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

export default ProductModal2;