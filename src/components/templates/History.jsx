// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from './Cards';
import Complect from '../../assets/complect.png';

const History = () => {
    const data = new Date()
    const formatNumber = (num) => (num < 10 ? `0${num}` : num);
    const day = formatNumber(data.getDate());
    const month = formatNumber(data.getMonth() + 1);
    const year = formatNumber(data.getFullYear() % 100);
    const formattedDate = `${day}.${month}.${year}`;

    const shina = [
        { id: 1, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг', status: 'Доставлено', none: '.' },
        { id: 2, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг', status: 'Доставлено', none: '.' },
        { id: 3, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг', status: 'Доставлено', none: '.' },
        { id: 4, img: Complect, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг', status: 'Доставлено', none: '.' },
    ]
    return (
        <>
            <div className='flex gap-4 flex-wrap w-full justify-center'>
                <Card card={shina} data={formattedDate} />
            </div>
        </>
    );
};

export default History;