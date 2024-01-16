// eslint-disable-next-line no-unused-vars
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';

const SearchByCar = () => {

    const Seasons = [
        { label: 'California' },
        { label: 'Colarado' },
        { label: 'Florida' },
        { label: 'Georgiya' },
        { label: 'Texas' },
        { label: 'Wyoming' },
    ]
    return (
        <>
            <div className='h-64 relative max-w-[600px] w-full py-4'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='text-white text-lg mb-5'>
                            Сезон
                        </p>
                        <Autocomplete
                            className='bg-white rounded outline-none autocomplete'
                            disablePortal
                            id="combo-box-demo"
                            options={Seasons}
                            renderInput={(params) => <TextField {...params} label="Seasons" />}
                        />
                    </div>
                    <div className='flex items-center gap-2 text-white cursor-pointer'>
                        <Switch />
                        <p>Только в наличии</p>
                    </div>
                    <div className='flex gap-4'>
                        <button className='btn bg-white text-cm px-2 active:bg-blue-300' type='submit'>
                            Подобрать
                        </button>
                        <button className=' border-b-white border-b-2 text-white'>
                            Сбросить
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchByCar;