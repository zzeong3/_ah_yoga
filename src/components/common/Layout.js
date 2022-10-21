import {useRef, useEffect} from 'react'; 
export default function Layout (props) {
    const frame = useRef(null);

    useEffect(()=>{ 
        frame.current.classList.add('on');
    },[]); 
    
    return (
        <section className={`content ${props.name}`} ref={frame}>
            
            <div className="inner">
                <h2>{props.name}</h2>
                {props.children}
            </div>
        </section>
    );
}