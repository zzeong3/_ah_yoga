import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useSelector } from "react-redux";
import Popup from '../common/Popup';
import {useRef, useState} from 'react';

export default function Vids() {
    const pop = useRef(null);
    const swperRef = useRef(null);
    const [Index, setIndex] = useState(0);

    const { youtube } = useSelector(store => store.youtubeReducer);

    return(
        <>

        <section id="vids" className='myScroll'>
            <div class="lines">
                <div class="lines_line line1"></div>
                <div class="lines_line line2"></div>
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
            {youtube.length !==0 && (
                <Swiper ref={swperRef}
                modules={[Pagination, Navigation, Autoplay]}
                pagination={
                    {
                        clickable : true,
                    }
                }
                spaceBetween={120}
                loop={true}
                slidesPerView= {3}
                centeredSlides={true}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                breakpoints={{
                    320: {
                      slidesPerView: 1,  
                    },
                    580: {
                      slidesPerView: 3, 
                    },
                  }}
    
            >
                    {youtube.map((vid, idx)=>{
                        return(
                            <SwiperSlide key={idx}>
                                <div className="inner">
                                    <div className="pic" onClick={()=>{
                                            pop.current.open();
                                            setIndex(idx);
                                            swperRef.current.swiper.autoplay.stop();
                                        }}>
                                        <img src={vid.snippet.thumbnails.standard.url} alt="" />
                                    </div>
                                    <strong><span className='num'>0{idx + 1}.</span>{vid.snippet.title}</strong>
                                </div>
                            </SwiperSlide>
                        )
                    })}
               </Swiper>
             )}
           
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