// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../NavBar/NavBar';
import CardDiski from '../templates/Cards'
import Diski from '../../assets/cardDiski.png';
import Footer from '../Footer/Footer';

const SearchDiski = () => {
    const diska = [
        { id: 1, img: Diski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 2, img: Diski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 3, img: Diski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
        { id: 4, img: Diski, type: 'Шины BOTO Genesys 208', character: '155/70 R12 73T', price: '13 150 тг' },
    ]
    return (
        <>
            <header className=" bg-no-repeat bg-cover bg-center w-full h-screen bg-map" >
                <div className='container '>
                    <NavBar />
                </div>
            </header>
            <main>
                <div className='container'>
                    <section className='mt-10 mb-20'>
                        <h2 className='text-2xl font-body mb-10'>
                            Результаты по запросу xxx
                        </h2>
                        <div className=' max-w-[1200px] w-full m-auto flex flex-wrap gap-6 justify-center'>
                            <CardDiski card={diska} />
                            <CardDiski card={diska} />
                            <CardDiski card={diska} />
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

export default SearchDiski;