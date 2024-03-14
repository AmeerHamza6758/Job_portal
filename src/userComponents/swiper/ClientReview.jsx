import './ClientReview.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
// DATA FROM MODULES
import { clientReview } from '../../modules/Data';


const ClientReview = () => {

    //   I have used jQuery CDN in Public Html to use this Carasoul
    const options = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 3,
        margin: 40,
        nav: false,
        dots: true,
    }


    return (
        <div className='main-container'>
            <div className='main-body'>
                <h1>What Our Client Review</h1>
                <p>Know your really worth and find the job that qualify your life.</p>

                <br />
                <OwlCarousel className="owl-carousel" {...options}>
                    {clientReview.map((item, index) => (
                        <div className="testimonial-item" key={index}>
                            <span>66</span>
                            <p >{item.message}</p>
                            <span className='horizontal-line'> </span>
                            <div className='last-section'>
                                <img src={item.picture} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.profession}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>

        </div>
    )
}

export default ClientReview;


                           



