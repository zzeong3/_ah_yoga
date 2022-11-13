import React, {useState} from 'react';

export default function Type() {
const [activeIndex, setActiveIndex]=useState(0);
const tabClickHandler=(index)=>{
    setActiveIndex(index);
};

  return (
    <section id="type" className='myScroll'>
        <h2 className="hidden">yoga type</h2>
            <div className='wrap_box'>
                <div className={activeIndex===0 ? "box_big type1 on" : "box_big type1"} >
                    <div className='thumb_big'>
                        <div className='thumb'><img src={process.env.PUBLIC_URL+'/img/tab1.png'}/></div>
                    </div>
                    <div className='box_smail'>
                        <div className='thumb_small'>
                            <img src={process.env.PUBLIC_URL+'/img/tab1.png'}/>
                        </div>
                        <strong className='tit'>ashtanga</strong>
                        <p className='desc'>
                            Architectural firm focused on the creating strong, beautiful buildings with spaces that are flexible, is beautiful, and appropriate for the needs of its occupants
                        </p>
                    </div>
                </div>
                <div className={activeIndex===1 ? "box_big type2 on" : "box_big type2"} >
                    <div className='thumb_big'>
                        <div className='thumb'><img src={process.env.PUBLIC_URL+'/img/tab2.png'}/></div>
                    </div>
                    <div className='box_smail'>
                        <div className='thumb_small'>
                            <img src={process.env.PUBLIC_URL+'/img/tab2.png'}/>
                        </div>
                        <strong className='tit'>hata</strong>
                        <p className='desc'>
                            Gomez-Alvarez talked about his connection to the building itself. After visiting the facility for the first time, he said he immediately knew the potential it had
                        </p>
                    </div>
                </div>
                <div className={activeIndex===2 ? "box_big type3 on" : "box_big type3"}>
                    <div className='thumb_big'>
                        <div className='thumb'><img src={process.env.PUBLIC_URL+'/img/tab3.png'}/></div>
                    </div>
                    <div className='box_smail'>
                        <div className='thumb_small'>
                            <img src={process.env.PUBLIC_URL+'/img/tab3.png'}/>
                        </div>
                        <strong className='tit'>vinyasa</strong>
                        <p className='desc'>
                            It’s modern, designed for a future. It’s very technological. You have wi-fi and video, a big screen and a window in each space. You can walk right out of one floor
                        </p>
                    </div>
                </div>
                <div className={activeIndex===3 ? "box_big type4 on" : "box_big type4"}>
                    <div className='thumb_big'>
                        <div className='thumb'><img src={process.env.PUBLIC_URL+'/img/img15.png'}/></div>
                    </div>
                    <div className='box_smail'>
                        <div className='thumb_small'>
                            <img src={process.env.PUBLIC_URL+'/img/img15.png'}/>
                        </div>
                        <strong className='tit'>bikram</strong>
                        <p className='desc'>
                            Chicago-based Designers was the lead designer of the building, led by Will Radford and Matt Trott. They wanted a creative office that utilize the space and needed
                        </p>
                    </div>
                </div>
            </div>
           
            <div className='paging'>
                <button type='button' className={activeIndex===0 ? "btn on" : "btn"} onClick={()=>tabClickHandler(0)}><span className='txt'>Ashtanga</span>
                </button>
                <button type='button' className={activeIndex===1 ? "btn on" : "btn"} onClick={()=>tabClickHandler(1)}><span className='txt'>Hata</span></button>
                <button type='button' className={activeIndex===2 ? "btn on" : "btn"} onClick={()=>tabClickHandler(2)}><span className='txt'>Vinyasa</span></button>
                <button type='button' className={activeIndex===3 ? "btn on" : "btn"} onClick={()=>tabClickHandler(3)}><span className='txt'>Bikram</span></button>
            </div>
        
    </section>
  )
}

