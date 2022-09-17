import '../styles/ContentBox.scss'
import {useState} from "react";
import ContentPage from "./ContentPage";
import mapLogo from "../images/maplogo.png"
import {useCookies} from "react-cookie";
import Map from "./Map";

export default function ContentBox() {
    const [recItemFocus, setRecItemFocus] = useState(false)
    const [contentFocus, setContentFocus] = useState(false)
    const [mapView,setMapView] = useState(false)
    const [cookies, setCookie] = useCookies()
    const [used,setUsed] = useState(false)
    const [connectInfo,setConnectInfo] = useState()

    return (<div className="contentBox">
        {
            contentFocus && <ContentPage setContentFocus={setContentFocus}></ContentPage>
        }
        {
            mapView && <Map setConnectInfo={setConnectInfo} setMapView={setMapView}></Map>
        }
        <div className="recommendBox contentEl">
            <div className="recommendContent contentInner">
                <div className="recommendHeader">{}
                        {
                            cookies.id ? <p><strong>{cookies.id}</strong>님께 추천드립니다</p> :
                                <p><strong>로그인이  필요한 서비스입니다.</strong></p>
                        }
                </div>
                <div className="recommendBody">
                    {
                        !used && <div className="recommendUsedAlertPage">
                                    <div className="recommendUsedAlert">
                                        <p>데이터가 충분하지 않습니다!</p>
                                        <div className="btnQuestion">정보 입력</div>
                                    </div>
                                </div>
                    }
                        <div className="recommendItem"
                             style={{"backgroundImage": `url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDJfMjEz%2FMDAxNjU5NDA0ODIyOTQ4.spwNsIHpmCstb0NhYSolct3ZIUnwVQTlaYhHsq6pZZsg.hVTnaXckErWbE8kpIDEtCyqT4Vq4m40LH6AxlJsxK5kg.JPEG.hmresort%2Fbora_four_i2.jpg&type=sc960_832)`}}
                             onMouseEnter={() => {
                                 setRecItemFocus(!recItemFocus)
                             }}
                             onMouseLeave={() => {
                                 setRecItemFocus(!recItemFocus)
                             }}
                             onClick={() => {
                                 setContentFocus(!contentFocus)
                             }}>
                            <div className="recommendItemText">
                                <p className="recommendItemTitle">여행지</p>
                                {recItemFocus && <p className="recommendItemInfo">설명</p>}
                            </div>
                        </div>
                    }
                    <div className="recommendItem"></div>
                    <div className="recommendItem"></div>
                </div>
                <div className="recommendFooter"></div>
            </div>
        </div>
        <div className="cartBox contentEl">
            <div className="cartContent contentInner">
                <div className="cartHeader">
                    <div className="cartText">
                        <p className="cartTitle">{!connectInfo ? "예약 일정이 없습니다" : "예약"}</p>
                        <p className="cartPrice">
                            <strong>{connectInfo && connectInfo.leader}</strong>
                            { connectInfo && "도우미" }
                        </p>
                    </div>
                    <p className="cartNum">1건</p>
                </div>
                <div className="cartBody">
                    <div className="cartItem"
                         style={{"backgroundImage": `url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDJfMjEz%2FMDAxNjU5NDA0ODIyOTQ4.spwNsIHpmCstb0NhYSolct3ZIUnwVQTlaYhHsq6pZZsg.hVTnaXckErWbE8kpIDEtCyqT4Vq4m40LH6AxlJsxK5kg.JPEG.hmresort%2Fbora_four_i2.jpg&type=sc960_832)`}}></div>
                    <div className="cartItem"
                         style={{"backgroundImage": `url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDJfMjEz%2FMDAxNjU5NDA0ODIyOTQ4.spwNsIHpmCstb0NhYSolct3ZIUnwVQTlaYhHsq6pZZsg.hVTnaXckErWbE8kpIDEtCyqT4Vq4m40LH6AxlJsxK5kg.JPEG.hmresort%2Fbora_four_i2.jpg&type=sc960_832)`}}></div>
                    <div className="cartItem"
                         style={{"backgroundImage": `url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDJfMjEz%2FMDAxNjU5NDA0ODIyOTQ4.spwNsIHpmCstb0NhYSolct3ZIUnwVQTlaYhHsq6pZZsg.hVTnaXckErWbE8kpIDEtCyqT4Vq4m40LH6AxlJsxK5kg.JPEG.hmresort%2Fbora_four_i2.jpg&type=sc960_832)`}}></div>
                    <div className="cartItem"
                         style={{"backgroundImage": `url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDJfMjEz%2FMDAxNjU5NDA0ODIyOTQ4.spwNsIHpmCstb0NhYSolct3ZIUnwVQTlaYhHsq6pZZsg.hVTnaXckErWbE8kpIDEtCyqT4Vq4m40LH6AxlJsxK5kg.JPEG.hmresort%2Fbora_four_i2.jpg&type=sc960_832)`}}></div>
                    <div className="cartItem"
                         style={{"backgroundImage": `url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDJfMjEz%2FMDAxNjU5NDA0ODIyOTQ4.spwNsIHpmCstb0NhYSolct3ZIUnwVQTlaYhHsq6pZZsg.hVTnaXckErWbE8kpIDEtCyqT4Vq4m40LH6AxlJsxK5kg.JPEG.hmresort%2Fbora_four_i2.jpg&type=sc960_832)`}}></div>

                </div>
                <div className="cartFooter">
                    <div className="btnPay btn">결 제</div>
                    <div className="btnClear btn">비우기</div>
                </div>
            </div>
        </div>
        <div className="mapBox contentEl" onClick={()=>{
            setMapView(!mapView)
        }}>
            <div className="mapContent contentInner">
                <p className="mapTitle">지도에서 보기</p>
                <p className="mapText">선택한 여행지들을<br/>카카오 맵에서 확인하세요</p>
                <div className="mapContentFooter">
                    <div className="btnMap">바로가기</div>
                    <img src={mapLogo} alt="maplogo"/>
                </div>
            </div>
        </div>
    </div>)
}