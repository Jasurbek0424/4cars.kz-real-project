// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import SelectDiski from '../templates/SelectDiski';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Avtocomplete from '../templates/Avtocomplete';
import CardShini from '../templates/Cards';
import CardDiski from '../../assets/cardDiski.png';
import Footer from './../Footer/Footer';
import './Diski.css';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

function valuetext(value) {
    return `${value}`;
}

const Diski = () => {

    const diska = [
        { id: 1, img: CardDiski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 2, img: CardDiski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 3, img: CardDiski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 4, img: CardDiski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
    ]

    const [value, setValue] = useState([1000, 25000])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
            <div className='overflow-hidden'>
                <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-diski" >
                    <div className='container '>
                        <NavBar />
                        <div className='mt-28 px-4' data-aos="fade-right">
                            <h1 className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'>
                                Диски
                            </h1>
                        </div>
                    </div>
                </header>
                <ScrollToTop />
                <main className='mt-10'>
                    <div className='container flex flex-col items-center'>
                        <section className='2xl:mb-28 mb-10 px-4 flex flex-col items-start w-full'>
                            <h2 className='font-bold text-2xl mb-8 2xl:text-start xl:text-start text-center'>
                                Подбор диск
                            </h2>
                            <div className=''>
                                <div data-aos="fade-left">
                                    <SelectDiski />
                                </div>
                            </div>
                        </section>
                        <section className='flex justify-between w-full gap-10 mb-10 filterProduct px-4'>
                            <div
                                data-aos="fade-up-right"
                                data-aos-anchor-placement="top-bottom"
                                className='fullAutoComplete '>
                                <Box className='autoCompleteContent'>
                                    <div className='flex justify-between mb-6 text-sm'>
                                        <p onChange={valuetext}>от {value[0]}</p>
                                        <p onChange={valuetext}>до {value[1]}</p>
                                    </div>
                                    <Slider
                                        getAriaLabel={() => 'Prace Value'}
                                        value={value}
                                        min={1000}
                                        max={25000}
                                        step={50}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                    // getAriaValueText={valuetext} function
                                    />
                                </Box>
                                <Avtocomplete />
                            </div>
                            <div
                                data-aos="fade-up-left"
                                data-aos-anchor-placement="top-bottom"
                                className='max-w-[850px] w-full flex flex-col justify-between items-center'>
                                <div
                                    className='flex 2xl:justify-between
                            xl:justify-between lg:justify-center md:justify-center sm:justify-center justify-center
                            2xl:flex-nowrap xl:flex-nowrap lg:flex-wrap flex-wrap 2xl:gap-6 
                            xl:gap-3 lg:gap-2 md:gap-2 sm:gap-5 gap-3 w-full sm:px-2'>
                                    {visibleProducts.map((e) => (
                                        <CardShini
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
            </div>

        </>
    );
};

export default Diski;