import { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';

export default function Location() {
    const {kakao} = window;

    const info = [
        {
            title : "본점",
            latlng : new kakao.maps.LatLng(37.507025, 126.756348),
            imgUrl : `${process.env.PUBLIC_URL}/img/marker1.png`,
            imgSize : new kakao.maps.Size(232, 99),
            imgPos : {offset: new kakao.maps.Point(116, 69)}
        },
        {
            title : "지점1",
            latlng : new kakao.maps.LatLng(37.5116828, 127.059151),
            imgUrl : `${process.env.PUBLIC_URL}/img/marker2.png`,
            imgSize : new kakao.maps.Size(232, 99),
            imgPos : {offset: new kakao.maps.Point(116, 69)}
        },
        {
            title : "지점2",
            latlng : new kakao.maps.LatLng(37.5258975, 126.9284261),
            imgUrl : `${process.env.PUBLIC_URL}/img/marker3.png`,
            imgSize : new kakao.maps.Size(232, 99),
            imgPos : {offset: new kakao.maps.Point(116, 69)}
        },
    ]

    const container = useRef(null);
    const btns = useRef(null);
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
        for (const btn of btns.current.children) btn.classList.remove('on');
        btns.current.children[Index].classList.add('on');

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
                <div id={"map"} ref= {container}></div>
                
                <div className="btnSet">
                    <button onClick={()=>{ setTraffic(!Traffic) }}>
                        {Traffic ? 'Traffiic OFF' : 'Traffiic ON'}
                    </button>
                    <ul className="branch" ref={btns}>
                        {
                            Info.map((el, idx)=>{

                                return(
                                    <li key={idx} onClick={()=>{setIndex(idx)}}>
                                        {el.title}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </Layout>
    )
}