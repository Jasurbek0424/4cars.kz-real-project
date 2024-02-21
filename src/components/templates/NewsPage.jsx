
import { useParams } from 'react-router-dom';
import { NewsInfo } from '../../data/home';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { FaAngleLeft } from "react-icons/fa6";


const NewsPage = () => {
    const { id } = useParams();

    const news = NewsInfo.find(news => news.id === parseInt(id));

    if (!news) {
        return <div>Новости не найдены</div>;
    }

    const { img, title, content, content2, contentTitle, date } = news;


    return (
        <>
            <div className='overflow-hidden'>
                <header className=" bg-no-repeat bg-cover bg-center w-full pb-20 bg-diski" >
                    <div className='container '>
                        <NavBar />
                    </div>
                </header>
                <ScrollToTop />
                <main className='my-10 container'>
                    <section className='flex flex-col items-center gap-4 px-4'>
                        <a href='/news' className='flex items-center gap-2 mb-4'> <FaAngleLeft /> назад</a>
                        <div className='px-4' data-aos="fade-right">
                            <h1 className='font-body font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl 
                        text-center'>
                                {title}
                            </h1>
                        </div>
                        <h3 className='md:text-xl lg:text-2xl font-bold text-primary'>
                            {date}
                        </h3>
                        <p className='text-justify lg:text-lg text-md max-w-[900px]'>
                            {content}
                        </p>
                        <img src={img} alt={title} />
                        <h3 className='font-semibold mb-4 text-lg md:text-xl uppercase'>
                            {contentTitle}
                        </h3>
                        {content2.split('\n').map((paragraph, index) => (
                            <p key={index} className="text-sm text-justify mb-2 text-md md:text-lg max-w-[900px]">
                                {paragraph}
                            </p>
                        ))}
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default NewsPage;