import { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-component';
import * as types from '../../redux/actionType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons' 

export default function Gallery(){
    const dispatch = useDispatch(); 
    const Items = useSelector(store => store.flickrReducer.flickr);
    const masonryOption = { transitionDuration: '.5s' };
    const [Opt, setOpt] = useState({type: 'user' , user : '188875987@N03'}); 
    const [Loading, setLoading] = useState(true);
    const [EnableClick, setEnableClick] = useState(true);
    const [Index, setIndex] = useState(0); 
    const frame = useRef(null);
    const input = useRef(null);
    const btnInterest = useRef(null);
    const btnMine = useRef(null);
    const pop = useRef(null);


    const showSearch = () => {
        const result = input.current.value.trim();
        input.current.value = '';
        btnMine.current.classList.remove('on');
        btnInterest.current.classList.remove('on');

        if (!EnableClick) return;
        if (!result) return alert('검색어를 입력하세요');
        setEnableClick(false);
        setLoading(true);
        frame.current.classList.remove('on');
        setOpt({ type: 'search', tags: result, });

       
    };

    const showInterest = () => {
        if(!EnableClick) return;
        setEnableClick(false);

        setLoading(true);
        btnMine.current.classList.remove('on');
        btnInterest.current.classList.add('on');
        frame.current.classList.remove('on');
        setOpt({type: 'interest'});
  
    }

    const showMine = () => {
        if(!EnableClick) return;
        setEnableClick(false);

        setLoading(true);
        btnMine.current.classList.add('on');
        btnInterest.current.classList.remove('on');
        setOpt({type : 'user', user: '188875987@N03'});

    }

    const showUser = (e) => {
        if(!EnableClick) return;
        btnMine.current.classList.remove('on');
        btnInterest.current.classList.remove('on');
        setEnableClick(false);
        setLoading(true);
        frame.current.classList.remove('on');
        setOpt({type : 'user', user : e.target.innerText}); 
    }

    useEffect (showMine, [])

    useEffect(()=>{
        dispatch({type: types.FLICKR.start, Opt})
    },[Opt])


    useEffect(()=>{
        setTimeout(()=>{
            frame.current.classList.add('on');
            setLoading(false);
            setEnableClick(true);
        },500)
    },[Items])

    return(
        <>

        <Layout name={'Gallery'}>
            <p className="desc_sub">
                Yoga is not about self improvement,<br />
                it's about self accceptance.
            </p>
            <div className="bg">
                <div className="bg1"></div>
                <div className="bg2"></div>
            </div>

            <div className='info'>
                {Loading && (
                    <img src={`${process.env.PUBLIC_URL}/img/loading.svg`} className="loading" alt=""/>
                )}
                <div className="controls">
                    <nav>
                        <button type='button' onClick={showMine} ref={btnMine}>AH-YOGA</button> 
                        <button type='button' onClick={showInterest} ref={btnInterest}>POPULAR</button>
                    </nav>
                    <div className="searchBox">
                        <input type="text" ref={input} placeholder="Search" 
                        onKeyUp={(e)=>{
                            if(e.key === 'Enter') showSearch();
                        }}/>
                        <button onClick={showSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                            <span className='hidden'>Search</span>
                        </button>
                    </div>
                </div>
                
                <div className="frame" ref={frame}>
                    <Masonry elementType={'div'} options={masonryOption}>

                        {Items.map((item, idx) => {
                            return (
                                <article key={idx}>
                                    <div className="inner">
                                        <div className="pic" 
                                            onClick={()=>{
                                                pop.current.open();
                                                setIndex(idx);
                                            }}>
                                            <img 
                                            src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`} alt={item.title} />
                                        </div>
                                        <strong>{item.title}</strong>

                                        <div className="profile">
                                            <img src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`} alt={item.owner} 
                                            onError= {(e) => {
                                                e.target.setAttribute(
                                                    'src', 'https://www.flickr.com/images/buddyicon.gif'
                                                );
                                            }}
                                            />
                                            <span onClick={showUser}>{item.owner}</span>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}

                    </Masonry>
                    
                </div>
            </div>
        </Layout>

        <Popup ref={pop}>
                {Items.length !== 0 && (
                        <img 
                            src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`} alt={Items[Index].title}/>
                    )      
                }
                
            </Popup>
            
        </>
    );
}
