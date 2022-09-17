/* global kakao */
import {useState, useEffect, useRef} from "react";
import '../styles/Map.scss'
import Apply from "./Apply";
import markerLogo from '../images/markerLogo.png'


export default function Map(props) {
    const [kakaoMap, setKakaoMap] = useState(null);
    const [cartView, setCartView] = useState(true);
    const [userPtr, setUserPtr] = useState([36.661808, 127.50278849999998])
    const [getNow, setGetNow] = useState(false)
    const [focusPtr, setFocusPtr] = useState(userPtr)
    const [focusPin,setFocusPin] = useState([])
    const [focusInfo,setFocusInfo] = useState()

    const positions = [
        {
            title: '청주동물원',
            latlng: new kakao.maps.LatLng(36.6519876, 127.5231213),
            text : '도심 속 작은 동물원',
            content: [
                {
                    'leader': '황진경',
                    'date': '2022-09-17'
                }
            ]
        },
        {
            title: '상당산성자연휴양림',
            latlng: new kakao.maps.LatLng(36.6780697, 127.5469115),
            text : '맑은 자연과 함께 쉬어가는 장소',
            content: [
                {
                    'leader': '김홍길',
                    'date': '2022-09-19'
                },
                {
                    'leader': '남재현',
                    'date': '2022-09-23'
                }
            ]
        },
        {
            title: '무심천',
            latlng: new kakao.maps.LatLng(36.6396283, 127.4831005),
            text : '소풍가기 딱 좋아요',
            content: [
            ]
        },
        {
            title: '문암 생태공원',
            latlng: new kakao.maps.LatLng(36.6747628, 127.4475878),
            text : '웰빙 테마의 생테 체험 공원',
            content: [
                {
                    'leader': '김홍길',
                    'date': '2022-09-19'
                },
                {
                    'leader': '남재현',
                    'date': '2022-09-23'
                },
                {
                    'leader': '황진경',
                    'date': '2022-09-30'
                }
            ]
        }
    ];

    useEffect(()=>{
        positions.map((p)=>{
            if(p.latlng.getLat() == focusPin[0] && p.latlng.getLng() == focusPin[1]){
                setFocusInfo(p)
            }
        },[])
    },[focusPin])

    positions.forEach((p, index) => {
        var imageSrc = markerLogo, // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
            imageOption = {offset: new kakao.maps.Point(27, 69)};

        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
        const marker = new kakao.maps.Marker({
            map: kakaoMap,
            position: p.latlng,
            title: p.title,
            image: markerImage
        })
        kakao.maps.event.addListener(marker, 'click', (e) => {

            const geocoder = new kakao.maps.services.Geocoder()
            // 마커 위에 인포윈도우를 표시합니다
            const lat = marker.getPosition().getLat().toFixed(7)
            const lon = marker.getPosition().getLng().toFixed(7)

            setFocusPin([lat,lon])

            document.querySelector('.cartBox').classList.add('active')
        })
    })


    useEffect(() => {
        document.querySelector('.cartBox').classList.toggle('active')
    }, [cartView])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
                setUserPtr([position.coords.latitude, position.coords.longitude])
                initMap();
            }
        )
    }, [getNow])


    const initMap = () => {
        const container = document.querySelector('#map')
        const center = new kakao.maps.LatLng(focusPtr[0], focusPtr[1]);
        const options = {
            center,
            level: 8,
        };
        const map = new kakao.maps.Map(container, options);
        setKakaoMap(map);
    };

    useEffect(() => {
        initMap();
    }, []);

    const markerPosition = new kakao.maps.LatLng(focusPtr[0], focusPtr[1]);

    const marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(kakaoMap);

    const [applyView, setApplyView] = useState(false)

    return (
        <div className="mapPage">
            {
                applyView && <Apply setApplyView={setApplyView}></Apply>
            }
            {
                kakao.maps.event.addListener(marker, 'click', (e) => {

                    const geocoder = new kakao.maps.services.Geocoder()
                    // 마커 위에 인포윈도우를 표시합니다
                    const lat = marker.getPosition().getLat()
                    const lon = marker.getPosition().getLng()
                    setUserPtr(lat,lon)
                })
            }
            <div id="map">
                <div className="btnBox">
                    <div className="btnNow btn" onClick={() => {
                        setGetNow(!getNow)
                    }}>내 위치
                    </div>
                    <div className="btnCancel btn" onClick={() => {
                        props.setMapView(false)
                    }}>닫 기
                    </div>
                </div>
                <div className="cartBox">
                    <div className="cartToggle material-symbols-outlined" onClick={() => {
                        setCartView(!cartView)
                    }}>
                        {
                            cartView ? "keyboard_double_arrow_left" :
                                "keyboard_double_arrow_right"
                        }
                    </div>
                    <div className="cartList">
                        <div className="contentInfo">
                            <p className="contentTitle">{
                                focusInfo && focusInfo.title
                            }</p>
                            <p className="contentAbout">{
                                focusInfo && focusInfo.text
                            }</p>
                        </div>
                        <div className="contentApplyList">
                            {
                                focusInfo && focusInfo.content.map((position,index)=>{
                                    return(
                                        <div className="contentApply">
                                            <p>{position.leader}</p>
                                            <p>{position.date}</p>
                                            <div className="btnJoin" onClick={()=>{
                                                props.setConnectInfo(position)
                                                props.setMapView(false)
                                            }}>신청</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="contentBtnBox">
                            <div className="btn btnApply" onClick={() => {
                                setApplyView(!applyView)
                            }}>등 록
                            </div>
                            <div className="btn btnCancel" onClick={() => {
                                document.querySelector('.cartBox').classList.toggle('active')
                            }}>닫 기
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}