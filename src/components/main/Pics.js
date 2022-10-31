import { useSelector } from "react-redux";
import Popup from '../common/Popup';
import {useRef, useState} from 'react';

export default function Pics({Scrolled, start}) {

    const position = Scrolled - start || 0; // 0
    const Pics = useSelector(store => store.flickrReducer.flickr)
    const pop = useRef(null);
    const [Index, setIndex] = useState(0);

    return(
        <>

        <main id="pics" className='myScroll'>
            <p 
                style={{
                        left: 100 + position,
                    }}
                >Flickr
            </p>
            <h3
                style={{
                    left:100 + position /2,
                }}
            >Flickr
            </h3>

            <ul>
            {Pics.map((pic, idx)=>{
                if(idx > 5) return;
                return (
                    <li key={pic.id} onClick={()=>{
                        pop.current.open();
                        setIndex(idx);
                    }}>
                        <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} alt="" />
                    </li>
                )
            })}
            </ul>
        </main>

        <Popup ref={pop}>
            {Pics.length !== 0 && (
                <img 
                    src={`https://live.staticflickr.com/${Pics[Index].server}/${Pics[Index].id}_${Pics[Index].secret}_b.jpg`} alt={Pics[Index].title}/>
                )      
            }
        </Popup>

        </>
        
    )
}