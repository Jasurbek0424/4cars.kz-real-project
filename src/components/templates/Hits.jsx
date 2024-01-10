// eslint-disable-next-line no-unused-vars
import React from 'react';
import Xit1 from '../../assets/Xit1.png';
import Xit2 from '../../assets/Xit2.png';
import Xit3 from '../../assets/Xit3.png';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Hits = () => {
    const xits = [
        { id: 1, img: Xit1, type: 'Шины Cordiant Road Runner 185/70 R14 88H' },
        { id: 2, img: Xit2, type: 'Шины Cordiant Road Runner 185/70 R14 88H' },
        { id: 3, img: Xit3, type: 'Шины Cordiant Road Runner 185/70 R14 88H' },
    ]
    return (
        <>
            <section className='mb-20'>
                <h2 className='font-body text-center text-3xl mb-7 font-bold'>
                    Хиты продаж
                </h2>
                <div className='flex justify-around'>
                    {xits.map(e => (
                        <div key={e.id} className='text-center flex justify-center  flex-col'>
                            <img src={e.img} alt='' className='max-h-[480px]' />
                            <div className='max-w-[180px] m-auto text-center flex flex-col justify-between items-center gap-3'>
                                <p className='text-xl'>
                                    {e.type}
                                </p>
                                <Stack className='max-w-[120px]' spacing={1}>
                                    <Rating className='' name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
                                <a href='#!' className='bg-primary py-2 text-lg px-4 text-white '>
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Hits;