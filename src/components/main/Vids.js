
import { useSelector } from "react-redux";
import Popup from '../common/Popup';
import {useRef, useState} from 'react';

export default function Vids() {
    const pop = useRef(null);
    const [Index, setIndex] = useState(0);

    const { youtube } = useSelector(store => store.youtubeReducer);

    return(
        <>

        <section id="vids" className='myScroll'>
            <div className="lines">
                <div className="lines_line line1"></div>
                <div className="lines_line line2"></div>
            </div>
            <div className='info_tit'>
                <h2 className='tit'>
                    <span className='txt1'>
                        <span className='ico'></span>UDI activity
                    </span>
                    <span className='txt2'>
                        with <span className='inner_txt'>youtube</span>
                    </span>
                </h2>
                <p className='desc'>
                    <span className='txt'>Programs include Master</span>
                    of Architecture (M Arch), Specialist of Landscape Architecture, with Designer of Science in Design, was Master of Arts
                </p>
            </div>
                
            <ul>
            {youtube.map((vid, idx)=>{
                if(idx > 2) return;
                return(
                    <li key={idx} className="inner">
                        <div className="pic" onClick={()=>{
                                pop.current.open();
                                setIndex(idx);
                            }}>
                            <img src={vid.snippet.thumbnails.standard.url} alt="" />
                        </div>
                        <strong><span className='num'>0{idx + 1}.</span>{vid.snippet.title}</strong>
                    </li>
                )
            })}
             </ul>
           
        </section>

        <Popup ref={pop}>
        {youtube.length !== 0 && (
            <iframe src={`https://www.youtube.com/embed/${youtube[Index].snippet.resourceId.videoId}`} frameBorder="0"></iframe>    
            )
        }
        </Popup>

        </>     
    )
}