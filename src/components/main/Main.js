import { useEffect, useRef, useState } from 'react';
import Header from "../common/Header";
import News from "./News";
import Pics from "./Pics";
import Vids from "./Vids";
import Visual from "./Visual";
import Introduce from "./Introduce";
import Btns from "./Btns";
import Anime from '../../asset/Anime';


export default function Main() {
    const main = useRef(null);
    const pos = useRef([]);
    let secs = null;
    const [Index, setIndex] = useState(0);
    const [Scrolled, setScrolled] = useState(0);

    const getPos = () => {
        pos.current = [];
        secs = main.current.querySelectorAll('.myScroll');
        for (const sec of secs) pos.current.push(sec.offsetTop);
    }

    const activation = () => {
        const base = -window.innerHeight / 2
        const scroll = window.scrollY;
        const btns = main.current.querySelectorAll('.scroll_navi li');

        setScrolled(scroll);
        pos.current.map((pos, idx) => {
            if ( scroll  >= pos + base ) {
                for(const btn of btns) btn.classList.remove('on');
                for(const sec of secs) sec.classList.remove('on');
                btns[idx].classList.add('on');
                secs[idx].classList.add('on');
            }
        
        });
    };

    useEffect(()=>{
        getPos();
        window.addEventListener('resize', getPos); 
        window.addEventListener('scroll', activation);

        return ()=> {
            window.removeEventListener('resize', getPos); // 클린업 함수로 청소. 언마운트
            window.removeEventListener('scroll', activation);
        }
    }, []);

    useEffect(()=>{
        new Anime(window, {
            prop : 'scroll',
            value : pos.current[Index],
            duration : 500,
        })
    }, [Index]);

    return(
        <main ref = {main} className='home'>
            <Header />
            <Visual />
            <Introduce />
            <News />
            <Pics Scrolled={Scrolled} start={pos.current[2]}/>
            <Vids />
            <Btns setIndex={setIndex} />
        </main>
    )
}