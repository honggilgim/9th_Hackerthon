import '../styles/ContentBox.scss'
import {useEffect, useState} from "react";
import ContentPage from "./ContentPage";
import mapLogo from "../images/maplogo.png"
import {useCookies} from "react-cookie";
import Map from "./Map";
import Check from './Check';
import sup1 from '../images/sup1.png'
import sup2 from '../images/sup2.png'
import sup3 from '../images/sup3.png'

export default function ContentBox() {
    const [recItemFocus, setRecItemFocus] = useState(false)
    const [contentFocus, setContentFocus] = useState(false)
    const [mapView,setMapView] = useState(false)
    const [cookies, setCookie] = useCookies()
    const [used,setUsed] = useState(false)
    const [connectInfo,setConnectInfo] = useState()
    const [chkView,setChkView] = useState(false)
    const [imgList,setImgList] = useState([null,null,null])
    const [sup,setSup] = useState()

    useEffect(()=>{
        connectInfo ? document.querySelector('.btnPay').classList.add('active') : document.querySelector('.btnPay').classList.remove('active')
    },[connectInfo])

    useEffect(()=>{
        used ? setImgList([sup1,sup2,sup3]) : setImgList([null,null,null])
        const items = document.querySelectorAll('.recommendItem')
        !used ? 
            items.forEach((item)=>{
                item.classList.add('hide')
            })
            :
            items.forEach((item)=>{
                item.classList.remove('hide')
            })
            
        
    },[used])

    return (<div className="contentBox">
        {
            contentFocus && <ContentPage setContentFocus={setContentFocus}></ContentPage>
        }
        {
            mapView && <Map sup={sup} setConnectInfo={setConnectInfo} setMapView={setMapView}></Map>
        }
        {
            chkView && <Check setChkView={setChkView} setUsed={setUsed}></Check>
        }
        
        <div className="recommendBox contentEl">
            <div className="recommendContent contentInner">
                <div className="recommendHeader">
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
                                        <div className="btnQuestion" onClick={()=>{
                                            setChkView(true)
                                        }}>정보 입력</div>
                                    </div>
                                </div>
                    }
                        <div className="recommendItem"
                             style={{"backgroundImage": `url(${imgList[0]})`}}
                             onMouseEnter={() => {
                                 setRecItemFocus(!recItemFocus)
                             }}
                             onMouseLeave={() => {
                                 setRecItemFocus(!recItemFocus)
                             }}
                             onClick={() => {
                                 setMapView(true)
                                 setSup(1)
                             }}>
                            <div className="recommendItemText">
                                <p className="recommendItemTitle">남재현</p>
                                {recItemFocus && <p className="recommendItemInfo">#친절 #밝음</p>}
                            </div>
                        </div>
                        <div className="recommendItem"
                             style={{"backgroundImage": `url(${imgList[1]})`}}
                             onMouseEnter={() => {
                                 setRecItemFocus(true)
                             }}
                             onMouseLeave={() => {
                                 setRecItemFocus(false)
                             }}
                             onClick={() => {
                                 setMapView(true)
                                 setSup(3)
                             }}>
                            <div className="recommendItemText">
                                <p className="recommendItemTitle">황진경</p>
                                {recItemFocus && <p className="recommendItemInfo">#성실 #배려</p>}
                            </div>
                        </div>
                        <div className="recommendItem"
                             style={{"backgroundImage": `url(${imgList[2]})`}}
                             onMouseEnter={() => {
                                 setRecItemFocus(!recItemFocus)
                             }}
                             onMouseLeave={() => {
                                 setRecItemFocus(!recItemFocus)
                             }}
                             onClick={() => {
                                 setMapView(true)
                                 setSup(0)
                             }}>
                            <div className="recommendItemText">
                                <p className="recommendItemTitle">김홍길</p>
                                {recItemFocus && <p className="recommendItemInfo">#존잘</p>}
                            </div>
                        </div>
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
                </div>
                <div className="cartBody">
                <p>{ connectInfo && connectInfo.title }</p>
                    <p>{ connectInfo && connectInfo.date }</p>
                </div>
                <div className="cartFooter">
                    <div className="btnPay btn"> 문 의</div>
                    <div className="btnClear btn" onClick={()=>{
                        setConnectInfo(false)
                    }}>취 소</div>
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