import { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import Masonry from 'react-masonry-component';


export default function Gallery(){
    const masonryOption = { transitionDuration: '.5s' };
    const [Items, setItems] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [EnableClick, setEnableClick] = useState(true);
    const [Index, setIndex] = useState(0);
    const frame = useRef(null);
    const input = useRef(null);
    const pop = useRef(null);


    const getFlickr = async (opt) => {
        const key = 'b0df1caf2be4e4a4a3efd41e6897ef7b';
        const method_interest = 'flickr.interestingness.getList';
        const method_search = 'flickr.photos.search';
        const method_user = 'flickr.people.getPhotos';
        const num = 40;
        let url = ' ';
        
        if( opt.type === 'interest') {
            url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
        }
        if( opt.type === 'search') {
            url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`
        }
        if( opt.type === 'user') {
            url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
        }

        const result = await axios.get(url);
        if (result.data.photos.photo.length  === 0) return alert ('해당 검색어의 결과 이미지가 없습니다.') 
        setItems(result.data.photos.photo);

        setTimeout(() => {
            setLoading(false);
            frame.current.classList.add('on');
            setTimeout(() => {
                setEnableClick(true);
            }, 500); 
        }, 1000);
       
    };

    useEffect (() => getFlickr({type : 'user', user: '188875987@N03'}), [])
    const showSearch = () => {
        const result = input.current.value.trim();
        input.current.value = '';

        if(!result) return alert ('검색어를 입력하세요');

        if(!EnableClick) return;
        setEnableClick(false);
        setLoading(true);
        frame.current.classList.remove('on');
        getFlickr({type : 'search', tags : result,});
    };

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
                    <img src={`${process.env.PUBLIC_URL}/img/loading.gif`} className="loading" alt=""/>
                )}
                <div className="controls">
                    <nav>
                        <button onClick={() => {
                            if(!EnableClick) return;
                            // 모션중이면 false일테니  return으로 방지
                            setEnableClick(false);
                            // true로 들어와서 다시 false로 바꾸어 재이벤트 방지
                            setLoading(true);
                            frame.current.classList.remove('on');
                            getFlickr({type: 'interest'});
                        }}>
                            Interest Gallery
                        </button>
                        <button onClick={() => {
                            if(!EnableClick) return;
                            // 모션중이면 false일테니  return으로 방지
                            setEnableClick(false);
                            // true로 들어와서 다시 false로 바꾸어 재이벤트 방지
                            setLoading(true);
                            frame.current.classList.remove('on');
                            getFlickr({type : 'user', user: '188875987@N03'});
                        }}>
                            My Gallery
                        </button>
                    </nav>
                    <div className="searchBox">
                        <input type="text" ref={input} placeholder="검색어를 입력하세요." 
                        onKeyUp={(e)=>{
                            if(e.key === 'Enter') showSearch();
                        }}/>
                        <button onClick={showSearch}>Search</button>
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
                                                pop.current.open(); // 자식(Popup.js)에 있는 컴포넌트 전달
                                                setIndex(idx);
                                            }}>
                                            <img 
                                            src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`} alt={item.title} />
                                        </div>
                                        <h2>{item.title}</h2>

                                        <div className="profile">
                                            <img src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`} alt={item.owner} 
                                            onError= {(e) => {
                                                e.target.setAttribute(
                                                    'src', 'https://www.flickr.com/images/buddyicon.gif'
                                                );
                                            }}
                                            />
                                            <span onClick={(e) => {
                                                if(!EnableClick) return;
                                                setEnableClick(false);
                                                setLoading(true);
                                                frame.current.classList.remove('on');
                                                getFlickr({type : 'user', user : e.target.innerText}); // 클릭한 애 텍스트가 저어어 주소로 넘어가서 그 아이디의 이미지가 불러옴
                                            }}
                                            >{item.owner}</span>
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
