import '../styles/Header.scss'
import logo from '../images/logo.png'
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import Login from "./Login";
import Map from "./Map";

export default function Header() {
    const [loginState, setLoginState] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies()
    const [loginView, setLoginView] = useState(false)

    useEffect(() => {
        cookies.id && removeCookie('id')
    }, [loginState])

    return (<div id="header">
        {
            loginView && <Login setLoginView={setLoginView}></Login>
        }
        <img src={logo} alt="logo" className="logo"/>
        <div className="loginText">
            <p className="loginTextAlert" onClick={() => {
                (!loginState && cookies.id === undefined) && setLoginView(true)
            }}>
                {cookies.id ? `${cookies.id}님 환영합니다` : "로그인"}
            </p>
        </div>
    </div>)
}