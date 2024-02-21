
import { Link, useParams } from 'react-router-dom';
import { PartnersInfo } from '../../data/home';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Avtocomplete from './Avtocomplete';


const BrandPage = () => {
    const { id } = useParams();

    const brand = PartnersInfo.find(brand => brand.id === parseInt(id));

    if (!brand) {
        return <div>Бренд не найден</div>;
    }

    const { img, title, content, contentTitle, content2 } = brand;
    const scrollToTop = () => {
        window.scrollTo({
            top: 200,
        });
    };

    return (
        <>
            <div className='overflow-hidden'>
                <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-diski" >
                    <div className='container '>
                        <NavBar />
                        <div className='mt-28 px-4' data-aos="fade-right">
                            <h1 className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'>
                                {title}
                            </h1>
                        </div>
                    </div>
                </header>
                <ScrollToTop />
                <main className='my-10 container'>
                    <section className='flex gap-10'>
                        <div className='flex-shrink-0'>
                            <Avtocomplete />
                            <div className='flex flex-col gap-3 border max-w-[350px] w-full mt-10'>
                                <p className='w-full py-2 px-4 bg-gray-100 font-body font-semibold'>Производители</p>
                                <div className='flex flex-col gap-3 px-4 pb-5'>
                                    {PartnersInfo.map(e => (
                                        <Link key={e.id}
                                            to={`/partners/${e.id}`}
                                            onClick={scrollToTop}
                                            className='hover:text-primary transition-all'>
                                            {e.title}
                                        </Link>
                                    ))}
                                    <a href='#!' className='hover:text-primary transition-all text-lg'>Показать все...</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={img} alt={title} className='max-h-[175px] max-w-[365px]' />
                            {content.split('\n').map((paragraph, index) => (
                                <p key={index} className="text-sm text-justify mb-4 text-md md:text-lg">
                                    {paragraph}
                                </p>
                            ))}
                            <h3 className='font-semibold mb-4 text-lg md:text-xl uppercase'>
                                {contentTitle}
                            </h3>
                            {content2.split('\n').map((paragraph, index) => (
                                <p key={index} className="text-sm text-justify mb-2 text-md md:text-lg">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default BrandPage;