/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';


const SetFilter = (props) => {



    return (
        <>
            <div className=" relative -z-0 py-4 max-w-[600px] w-full">
                <h2 className="text-white text-lg font-bold font-body">
                    Типы размер
                </h2>
                <div className='flex flex-col gap-5'>
                    <div className="flex flex-wrap gap-2 text-white ">
                        <div>
                            <p>
                                Ширина
                            </p>
                            <select className='text-black px-4 outline-none border border-black'>
                                <option value='168'>168</option>
                                <option value='178'>178</option>
                                <option value='188'>188</option>
                            </select>
                        </div>
                        <div>
                            <p>
                                Профил
                            </p>
                            <select className='text-black px-4 outline-none border border-black'>
                                <option value='168'>168</option>
                                <option value='178'>178</option>
                                <option value='188'>188</option>
                            </select>
                        </div>
                        <div>
                            <p>
                                Диаметр
                            </p>
                            <select className='text-black px-4 outline-none border border-black'>
                                <option value='168'>168</option>
                                <option value='178'>178</option>
                                <option value='188'>188</option>
                            </select>
                        </div>

                    </div>
                    <div className='flex items-center gap-4 sire'>
                        <div>
                            <p className='text-white pb-1'>Производитель</p>
                            <select className='border border-black'>
                                <option value='all'>
                                    Поиск по производителю
                                </option>
                                <option value='all'>
                                    Поиск по производителю
                                </option>
                                <option value='all'>
                                    Поиск по производителю
                                </option>
                                <option value='all'>
                                    Поиск по производителю
                                </option>
                            </select>
                        </div>
                        <div>
                            <p className='text-white'>Сезонность</p>
                            <div className="inline-flex shadow-sm" role="group">
                                <button type="button" className="inline-flex border border-black items-center px-4  text-sm font-medium text-gray-900 bg-white focus:z-10 focus:bg-blue-700 focus:text-white">
                                    Зимние
                                </button>
                                <button type="button" className="inline-flex border border-black items-center px-4  text-sm font-medium text-gray-900 bg-white focus:z-10 focus:bg-blue-700 focus:text-white">
                                    Летние
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 cursor-pointer'>
                        <input type='checkbox' id={props.id} />
                        <label className='cursor-pointer text-white' htmlFor={props.id} >Только в наличии</label>
                    </div>
                    <div className='flex gap-4'>
                        <button className='btn bg-white text-cm px-2 active:bg-blue-300' type='submit'>
                            Подобрать
                        </button>
                        <button className=' border-b-white border-b-2 text-white bg-primary'>
                            Сбросить
                        </button>
                    </div>
                    <img
                        // eslint-disable-next-line react/prop-types
                        src={props.img}
                        alt='Shina'
                        className='absolute 2xl:w-52 xl:w-52 lg:w-48 md:w-44 sm:w-40 w-40 bottom-0 -right-3 -z-10'
                    />
                </div>
            </div>
        </>
    );
};

export default SetFilter;