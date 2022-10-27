import type { NextPage } from 'next'

interface props {
    slidePage: () => void;
}


const Slide2: NextPage<props> = ({slidePage}) => {

    return (
            <div style={{backgroundColor: 'blue', height: '100vh'}}>
                <button onClick={slidePage} >link</button>
                <div>
                    移動しました
                </div>
            </div>
    )
} 
export default Slide2;