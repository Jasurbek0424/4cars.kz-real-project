// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card1 from '../../assets/MasterCard.png';
import Card2 from '../../assets/PlatiniumCard.png';
import Card3 from '../../assets/EliteCard.png';
import Card4 from '../../assets/WorldCard.png';

const MyCredits = () => {
    return (
        <>
            <div className='flex flex-wrap justify-center gap-4 mt-4 px-6'>
                <img className='max-w-[400px] w-full shadow-md rounded-md' src={Card1} alt='' />
                <img className='max-w-[400px] w-full shadow-md rounded-md' src={Card2} alt='' />
                <img className='max-w-[400px] w-full shadow-md rounded-md' src={Card3} alt='' />
                <img className='max-w-[400px] w-full shadow-md rounded-md' src={Card4} alt='' />
            </div>
            <button type='submit' className='bg-primary mt-5 mb-5 py-1 px-3 text-white rounded active:bg-blue-700'>
                Привязать карту
            </button>
        </>
    );
};

export default MyCredits;