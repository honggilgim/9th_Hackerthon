import '../styles/ContentPage.scss'

export default function ContentPage(props){
    return(
        <div className="contentPage">
            <div className="contentForm">
                <div className="contentFormLeft contentFormInner"
                     style={{"backgroundImage": `url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDJfMjEz%2FMDAxNjU5NDA0ODIyOTQ4.spwNsIHpmCstb0NhYSolct3ZIUnwVQTlaYhHsq6pZZsg.hVTnaXckErWbE8kpIDEtCyqT4Vq4m40LH6AxlJsxK5kg.JPEG.hmresort%2Fbora_four_i2.jpg&type=sc960_832)`}}>
                </div>
                <div className="contentFormRight contentFormInner">
                    <p className="contentName">여행지 이름</p>
                    <div className="contentFormBtnBox">
                        <div className="btnCart btn">장바구니</div>
                        <div className="btnCancel btn" onClick={()=>{
                            props.setContentFocus(false)
                        }}>닫 기</div>
                    </div>
                </div>
            </div>
        </div>
    )
}