import './Content.css';
import { GradientTitle } from '../GradientTitle/GradientTitle';
import { Slider } from '../Slider/Slider';

import Image_1 from '../../assets/images/Image_1.png';
import Image_2 from '../../assets/images/Image_2.png';
import Image_3 from '../../assets/images/Image_3.png';
import Image_4 from '../../assets/images/Image_4.png';
import Image_5 from '../../assets/images/Image_5.png';
import Image_6 from '../../assets/images/Image_6.png';


const sliderData = [
    {
        label: 'CEO AND COFOUNDER, ARKETA',
        title: 'Rachel Lea Fishman',
        img: Image_1
    },
    {
        label: 'CEO AND CO-FOUNDER, FORMA',
        title: 'Jason Fan',
        img: Image_2
    },
    {
        label: 'CEO, OPENAI',
        title: 'Sam Altman',
        img:Image_3
    },
    {
        label: 'SVP OF PRODUCT, JOBBER',
        title: 'Jeff Sheclock',
        img: Image_4
    },
    {
        label: 'HEAD OF STRATEGY, SARDINE',
        title: 'Simon Taylor',
        img: Image_5
    },
    {
        label: 'HEAD OF GLOBAL SALES, STRIPE',
        title: 'Eileen O\'Mara',
        img: Image_6
    },
]

export const Content = () => (
    <div className="content">
        <GradientTitle>Meet our speakers</GradientTitle>
        <div className="content__grid">
            <p>Our speaker lineup comprises leaders from Stripe and beyond, who’ll share knowledge and advice on the most pressing topics facing companies today. Stay tuned for more announcements.</p>
        </div>
        <Slider data={sliderData} />
    </div>
)
