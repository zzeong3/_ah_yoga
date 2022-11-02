// key = AIzaSyAy6VlenkzBMN3Yy81EdqHO80h8HkvzNJw
// playList = PL-LezOK-mmmMRxgwnfa7UMKA3FpI_yYik

import Layout from "../common/Layout";
import { useState, useRef } from "react";
import Popup from "../common/Popup";
import { useSelector } from "react-redux";


export default function Youtube() {
    const [Index, setIndex] = useState(0);
    const pop = useRef(null);    
    const Vids = useSelector(store => store.youtubeReducer.youtube)

    return (
        <>

        <Layout name={'Youtube'}>
            <p className="desc_sub">
                This time, like all times, is a very good one, <br />
                if we but know what to do with it.
            </p>

            <div className="info">
                {Vids.map((data, index)=>{
                    // 문자열 가공
                    const title = data.snippet.title;
                    const desc = data.snippet.description;
                    const date = data.snippet.publishedAt;

                    return (
                        <article key={ index }>
                            <h3>{title.length >30 ? title.substr(0, 30) + '...' : title}</h3>
                            <div className="txt">
                                <p>{desc.length >500 ? title.substr(0, 500) + '...' : desc}</p>
                                <span>{date.split('T')[0]}</span>
                            </div>
                            <div className="pic" onClick={()=>{ 
                                    pop.current.open();
                                    setIndex(index);
                                }}>
                                <img src={data.snippet.thumbnails.standard.url} alt={data.snippet.title} />
                            </div>
                        </article>
                    );
                })}
            </div>
        </Layout>

        <Popup ref={pop}>
            {Vids.length !== 0 && (
                    <iframe src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`} frameBorder="0"></iframe>    
                )
            }
        </Popup>

        </>
    )
}