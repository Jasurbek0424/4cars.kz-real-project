// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const OrderCall = () => {

    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [numberError, setNumberError] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };


    const handlePhoneNumberChange = (e) => {
        const numberValue = e.target.value

        if (numberValue.includes('+')) {
            setNumberError('');
        } else {
            setNumberError('Введите действительный номер телефона');
        }

        setPhoneNumber(numberValue);

    }

    return (
        <>
            <form action='' method='post' className='max-w-[300px] p-2 w-full flex flex-col 
            2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm font-body gap-4'>
                <div className='flex flex-col gap-4'>
                    <label
                        htmlFor='orderCallName'
                    >Имя <span className='text-red'>*</span>
                    </label>
                    <input
                        type='text'
                        id='orderCallName'
                        required
                        value={name}
                        onChange={handleNameChange}
                        autoComplete='FirstName'
                        placeholder='Виктор'
                        className='border-2 outline-none 2xl:py-2 xl:py-2 lg:py-1 py-1 px-2 rounded' />
                </div>
                {numberError && <p style={{ color: 'red', fontSize: '14px', maxWidth: '230px' }}>{numberError}</p>}
                <div className='flex flex-col gap-4'>
                    <label htmlFor='orderCallNumber'>Номер телефона <span className='text-red'>*</span></label>
                    <input
                        type=''
                        id='orderCallNumber'
                        required
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        autoComplete='phoneNumber'
                        className='border-2 outline-none py-2 px-2 rounded'
                        placeholder='+7(***)***-**-**'
                    />
                </div>
                <button type='submit' className='py-1 px-2 bg-primary text-white rounded'>
                    Заказать
                </button>
            </form>
        </>
    );
};

export default OrderCall;