// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SetFilter from './SetFilter';
import SearchByCar from './SearchByCar';
import Diska from '../../assets/Diska.png'

const SelectDiski = () => {

    const [activeModal, setActiveModal] = useState('modal1');

    const openModal = (modalType) => {
        setActiveModal(modalType);
    };



    return (
        <>
            <section className='selectProduct'>
                <div className='bg-darkPrimary flex justify-between text-white '>
                    <button
                        onClick={() => openModal('modal1')}
                        className={`border-b-4 ${activeModal === 'modal1' ? 'border-white' : 'border-transparent'} py-4 w-1/2`}
                        type='submit'>
                        Диски по размеру
                    </button>
                    <button
                        onClick={() => openModal('modal2')}
                        className={`border-b-4 ${activeModal === 'modal2' ? 'border-white' : 'border-transparent'} w-1/2`}
                        type='submit'>
                        Диски по автомобилю
                    </button>
                </div>
                <div className='w-full flex-col flex justify-center items-center bg-primary px-4'>
                    {activeModal === 'modal1' && (<SetFilter img={Diska} id={'diska'} />)}
                    {activeModal === 'modal2' && (<SearchByCar />)}
                </div>
            </section>
        </>
    );
};

export default SelectDiski;