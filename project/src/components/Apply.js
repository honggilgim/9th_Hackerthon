import '../styles/Apply.scss'

export default function Apply(props){
    return(
        <div className="applyPage">
            <div className="applyForm">
                <div className="applyFooter">
                    <div className="btnApply btn">등 록</div>
                    <div className="btnCancel btn" onClick={()=>{
                        props.setApplyView(false)
                    }}>닫 기</div>
                </div>
            </div>
        </div>
    )
}