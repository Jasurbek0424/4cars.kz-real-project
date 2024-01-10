/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

function CardShini(props) {

    return (
        <>
            {props.card.map(e => (
                <div key={e.id} className='max-w-[210px] font-body w-full text-center max-h-[305px] h-full text-white rounded'>
                    <img className='max-w-[110px] max-h-[140px]  m-auto mb-3' src={e.img} alt='' />
                    <div className='bg-primary py-2 px-4 flex flex-col gap-2'>
                        <h2 className='text-xs'>
                            {e.type}
                        </h2>
                        <p className='text-xs'>
                            {e.character}
                        </p>
                        <span className='font-bold text-lg'>
                            {e.price}
                        </span>
                        <div className='flex justify-between'>
                            {e.status ?
                                <p className=''>
                                    {e.status}
                                </p> : e.paying ?
                                    <a href='/product' type='submit' className='active:bg-gray-100  text-xs px-2 outline-none bg-white text-primary rounded'>
                                        {e.paying}
                                    </a> :
                                    <a href='/product' type='submit' className='active:bg-gray-100  text-xs px-2 outline-none bg-white text-primary rounded'>
                                        Купить
                                    </a>
                            }
                            {props.data ?
                                <p className='text-sm'>{props.data}</p> :
                                e.order ?
                                    <a href='/product' type='submit' className='active:bg-blue-700 
                                rounded px-2 text-xs outline-none border border-white'>
                                        {e.order}
                                    </a>
                                    :
                                    <button type='submit' className='active:bg-blue-700 
                                        rounded px-2 text-xs outline-none border border-white'>
                                        В корзину
                                    </button>
                            }
                        </div>
                        {e.none ?
                            <p className='hidden'>{e.none}</p> :
                            e.checkout ?
                                <a href='/product' type='submit' className='py-1 text-xs px-3 bg-red-600 rounded active:bg-red-700'>
                                    {e.checkout}
                                </a> :
                                <a href='/product' type='submit' className='py-1 text-xs px-3 bg-red-600 rounded active:bg-red-700'>
                                    Купить в рассрочку
                                </a>
                        }
                    </div>
                </div>
            ))}

        </>
    )
}

export default CardShini
