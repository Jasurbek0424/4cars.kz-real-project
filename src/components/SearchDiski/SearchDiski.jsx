// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import CardDiski from '../templates/Cards'
import Diski from '../../assets/cardDiski.png';
import Footer from '../Footer/Footer';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const SearchDiski = () => {
    const diska = [
        { id: 1, img: Diski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 2, img: Diski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 3, img: Diski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 4, img: Diski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 5, img: Diski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
    ]



    if (!diska || !Array.isArray(diska) || diska.length === 0) {
        // Проверка наличия массива products
        return <div>No products available</div>;
    }

    const itemsPerPage = 4; // Установите начальное количество товаров на странице
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(1);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const totalPages = Math.ceil(diska.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleProducts = diska.slice(startIndex, endIndex);
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-map" >
                <div className='container '>
                    <NavBar />
                </div>
            </header>
            <main>
                <div className='container'>
                    <section className='mt-10 mb-20'>
                        <h2 className='text-2xl font-body mb-10 px-4'>
                            Результаты по запросу xxx
                        </h2>
                        <div className=' max-w-[1200px] w-full m-auto flex flex-wrap gap-6 justify-center flex-col items-center px-4'>
                            <div className='flex gap-2 flex-wrap w-full justify-center'>
                                {visibleProducts.map((e) => (
                                    <CardDiski
                                        key={e.id}
                                        img={e.img}
                                        type={e.type}
                                        price={e.price}
                                        text={e.character}
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
                    </section>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default SearchDiski;