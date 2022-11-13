import { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons' 

export default function Location() {
    const { kakao } = window;

    const info = [
        {
            title : "DIRECT CONTACT",
            latlng : new kakao.maps.LatLng(37.5125585, 127.1025353),
            imgUrl : `${process.env.PUBLIC_URL}/img/marker.png`,
            imgSize : new kakao.maps.Size(64, 64),
            imgPos : {offset: new kakao.maps.Point(35, 80)}
        },
        {
            title : "지점1",
            latlng : new kakao.maps.LatLng(37.5116828, 127.059151),
            imgUrl : `${process.env.PUBLIC_URL}/img/marker.png`,
            imgSize : new kakao.maps.Size(64, 64),
            imgPos : {offset: new kakao.maps.Point(35, 80)}
        },
        {
            title : "지점2",
            latlng : new kakao.maps.LatLng(37.5258975, 126.9284261),
            imgUrl : `${process.env.PUBLIC_URL}/img/marker.png`,
            imgSize : new kakao.maps.Size(64, 64),
            imgPos : {offset: new kakao.maps.Point(35, 80)}
        },
    ]

    const container = useRef(null);
    const [Location, SetLocation] = useState(null);
    const [Traffic, setTraffic] = useState(false);
    const [Info] = useState(info); 
    const [Index, setIndex] = useState(0);

    const option = { 
        center: Info[Index].latlng, 
        level: 3 
    };

    const markerPosition = Info[Index].latlng;
    const imageSrc = Info[Index].imgUrl;
    const imageSize = Info[Index].imgSize;
    const imageOption = Info[Index].imgPos;
    const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
    )

    const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage
    });


    useEffect(()=>{
        container.current.innerHTML = ''; 

        // 지도 인스턴스 최종 생성
        const map_instance = new kakao.maps.Map(container.current, option);
        marker.setMap(map_instance); 
        SetLocation(map_instance);

        //지도, 스카이뷰
        const mapTypeControl = new kakao.maps.MapTypeControl();
        map_instance.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        const zoomControl = new kakao.maps.ZoomControl();
        map_instance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


        // 본점,지점1/2 on클래스 토글
        // for (const btn of btns.current.children) btn.classList.remove('on');
        // btns.current.children[Index].classList.add('on');

        window.addEventListener('resize', ()=>{
            map_instance.setCenter(Info[Index].latlng);
        });

    }, [Index]); 


    // 트래픽 토글 전용 useEffect 
    useEffect(()=>{
        if(!Location) return;

        Traffic 
            ? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC) 
            : Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)

    }, [Traffic]);




    return (
        <Layout name={'Location'}>
            <p className="desc_sub">
                Yoga takes us to the present moment,<br />
                the only place where life exists.
            </p>

            <div className="info">
                <div className='area_map'>
                    <div className='area_txt'>
                        <strong className='tit'>
                            <span className='txt'>CONTAC</span>
                            <span>GET IN TOUCH</span>
                        </strong>
                        <p className='desc1'>In truth, yoga doesn't "take time" - it gives time.</p>
                        <p className='desc2'>
                            Yoga takes us to the present moment,<br />
                            the only place where life exists.
                        </p>
                    </div>
                    <div id="map" ref= {container}></div>
                    <button className='btn btn_traffic' onClick={()=>{ setTraffic(!Traffic) }} >
                        {Traffic ? 'Traffiic OFF' : 'Traffiic ON'}
                    </button>
                    
                </div>
                <div className="set_contact">
                    <div className='cont'>
                        <strong className='tit'>DIRECT CONTACT</strong>
                        <button className={Index===0 ? "btn on" : "btn"} onClick={()=>{setIndex(0)}}><span className='txt'>VIEW</span></button>
                        <em className='tit_cont'>address</em>
                        <address className='desc_cont'>#603-417, 47 Sejong-daero 23-gil, Jongno-gu, Seoul,<br />Republic of Korea (Postal Code: 03182)</address>
                        <dl className='list_location'>
                            <dt>tel</dt><dd><a href="tel:+380962722100" className="location_link">UA: +38 096 272 2100</a></dd>
                            <dt>mail</dt><dd><a href="mailto:mail@halo-lab.com" className="location_link">mail@halo-lab.com</a></dd>
                        </dl>
                        <div className='area_sns'>
                            <a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                            <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                        </div>
                    </div>
                    <div className='cont'>
                        <strong className='tit'>MEDIA CONTACT</strong>
                        <button className={Index===1 ? "btn on" : "btn"}   onClick={()=>{setIndex(1)}}><span className='txt'>VIEW</span></button>
                        <em className='tit_cont'>production request</em>
                        <p className='desc_cont'>We are delighted to partner with the leading nonprofit system of substance use disorder treatment, mental health care, recovery resources, and related prevention and education services.</p>
                    </div>
                    <div className='cont'>
                        <strong className='tit'>BETTER TOGETHER</strong>
                        <button className={Index===2 ? "btn on" : "btn"}   onClick={()=>{setIndex(2)}}><span className='txt'>VIEW</span></button>
                        <em className='tit_cont'>jobs</em>
                        <p className='desc_cont'>Pathlight is making a $15,000 donation in support of SHE RECOVERS Foundation’s mission in 2021. SHE RECOVERS Foundation is grateful to Pathlight for their outstanding commitment to mental health.</p>
                    </div>
            
                </div>
            </div>
        </Layout>
    )
}