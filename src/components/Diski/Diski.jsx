// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import SelectDiski from '../templates/SelectDiski';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Avtocomplete from '../templates/Avtocomplete';
import CardShini from '../templates/Cards';
import CardDiski from '../../assets/cardDiski.png';
import Footer from './../Footer/Footer';

function valuetext(value) {
    return `${value}`;
}

const Diski = () => {

    const diska = [
        { id: 1, img: CardDiski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг', path: '/product' },
        { id: 2, img: CardDiski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг', path: '/product' },
        { id: 3, img: CardDiski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг', path: '/product' },
        { id: 4, img: CardDiski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг', path: '/product' },
    ]

    const [value, setValue] = useState([1000, 25000])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full h-screen bg-diski" >
                <div className='container '>
                    <NavBar />
                    <div className='mt-28'>
                        <h1 className='font-body font-bold text-6xl flex flex-col text-white'>
                            Диски
                        </h1>
                    </div>
                </div>
            </header>
            <main className='mt-20'>
                <div className='container flex flex-col items-center'>
                    <section className='mb-28'>
                        <h2 className='font-bold text-2xl mb-8'>
                            Подбор шин
                        </h2>
                        <div className='flex gap-4 items-center'>
                            <p className='max-w-[500px] text-justify text-xl leading-7'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at arcu tempor risus consectetur convallis sed ac tortor. Suspendisse vitae nisi eget magna ultrices egestas. Etiam nec nunc risus. Suspendisse sodales eget nisl a rhoncus. Pellentesque metus est, malesuada pretium risus vitae, finibus iaculis lectus. Nullam maximus fringilla elit, sed ultrices nunc suscipit quis. Donec consequat ligula quis ornare lacinia. Donec vitae arcu sed ipsum rutrum fringilla vitae eget diam.
                            </p>
                            <SelectDiski />
                        </div>
                    </section>
                    <section className='flex gap-10 mb-10'>
                        <div>
                            <Box sx={{ width: 300 }}>
                                <div className='flex justify-between mb-6'>
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
                        <div className='flex gap-6'>
                            <CardShini card={diska} />
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

export default Diski;