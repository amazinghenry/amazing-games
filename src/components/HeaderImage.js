import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import headerImage1 from '../assets/header-images/games-bg-1.jpg'
import headerImage2 from '../assets/header-images/games-bg-2.jpg'
import headerImage3 from '../assets/header-images/games-bg-3.jpg'
import headerImage4 from '../assets/header-images/games-bg-4.jpg'


const HeaderImage = () => {
    return ( 
        <OwlCarousel 
        items={1}
        className='owl-theme'
        loop margin={10}
        autoplay ={true}
        dots = {true}
        nav = {false}>
            <div className='item'>
                <a href='/'>
                <img src={headerImage1} alt=""
                className='header-image' />
                </a>
            </div>
            <div className='item'>
            <a href='/'>
                <img src={headerImage2} alt=""
                className='header-image'  />
                </a>
            </div>
            <div className='item'>
            <a href='/'>
                <img src={headerImage3} alt=""
                className='header-image'  />
                </a>
            </div>
            <div className='item'>
            <a href='/'>
                <img src={headerImage4} alt=""
                className='header-image' />
                </a>
            </div>
        </OwlCarousel>
     );
}
 
export default HeaderImage;





