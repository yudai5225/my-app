import type { NextPage } from 'next'
import SlideButtonRight from  './slideButtonRight';

interface props {
    slidePage: () => void;
}


const Slide1: NextPage<props> = ({slidePage}) => {

    return (
            <div style={{backgroundColor: 'red', height: '100vh'}}>
                <SlideButtonRight/>
                <div>
                    移動しました
                </div>
            </div>
    )
} 
export default Slide1;