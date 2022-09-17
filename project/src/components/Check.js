import '../styles/Check.scss'
import {useEffect, useState} from 'react'

export default function Check(props) {
    const [questionPtr, setQuestionPtr] = useState(0)
    const [res,setRes] = useState([-1,-1,-1,-1,-1,-1,-1,-1])
    const questionInfo = [
        {
            code : 1,
            req : "주기적으로 새로운 친구를 만든다"
        },
        {
            code : 2,
            req : "자유 시간 중 상당 부분을 다양한 관심사를 탐구하는 데 할애한다"
        },
        {
            code : 3,
            req : "다른 사람이 울고 있는 모습을 보면 자신도 울고 싶어질 때가 많다"
        },
        {
            code : 4,
            req : "일이 잘못될 때를 대비해 여러 대비책을 세우는 편이다"
        },
        {
            code : 5,
            req : "압박감이 심한 환경에서도 평정심을 유지하는 편이다"
        },
        {
            code : 6,
            req : "파티나 행사에서 새로운 사람에게 먼저 자신을 소개하기보다는 주로 이미 알고 있는 사람과 대화하는 편이다"
        },
        {
            code : 7,
            req : "하나의 프로젝트를 완전히 완료한 후 다른 프로젝트를 시작하는 편이다"
        },
        {
            code : 8,
            req : "매우 감상적인 편이다"
        },
    ]

    useEffect(()=>{
        const response = document.querySelectorAll('.resList')
        const btnNext = document.querySelector('.btnNext')
        console.log(btnNext)
        response.forEach((r,index)=>{
            index === res[questionPtr] ? r.classList.add('active') : r.classList.remove('active')
        })
        res[questionPtr] != -1 ? btnNext.classList.add('active') : btnNext.classList.remove('active')
    })

    return(
       <div className="checkPage">
            <div className="checkForm">
            <span class="material-symbols-outlined btnCancel" onClick={()=>{
                props.setChkView(false)
            }}>
                    close
            </span>
                   <div className="formHeader">
                    { `${questionInfo[questionPtr].code} / ${questionInfo.length}`}
                   </div>
                   <div className="formBody">
                    <div className="reqSection">{
                        questionInfo[questionPtr].req
                    }</div>
                    <div className="resSection">
                        <div className="resList" onClick={()=>{
                            let copy = [...res]
                            copy[questionPtr] = 0
                            setRes(copy)
                        }}>매우 그렇다</div>
                        <div className="resList"  onClick={()=>{
                            let copy = [...res]
                            copy[questionPtr] = 1
                            setRes(copy)
                        }}>그렇다</div>
                        <div className="resList"  onClick={()=>{
                            let copy = [...res]
                            copy[questionPtr] = 2
                            setRes(copy)
                        }}>보통</div>
                        <div className="resList"  onClick={()=>{
                            let copy = [...res]
                            copy[questionPtr] = 3
                            setRes(copy)
                        }}>아니다</div>
                        <div className="resList"  onClick={()=>{
                            let copy = [...res]
                            copy[questionPtr] = 4
                            setRes(copy)
                        }}>매우 아니다</div>
                    </div>
                   </div>
                   <div className="formFooter">
                    <div className="btnBack btn" onClick={()=>{
                        questionPtr < 1 ? setQuestionPtr(0) : setQuestionPtr(questionPtr-1)
                    }}>이 전</div>
                    <div className="btnNext btn" onClick={()=>{
                        res[questionPtr] != -1 && (questionPtr > 6 ? setQuestionPtr(7) : setQuestionPtr(questionPtr+1))
                    }}>{
                        questionPtr === 7 ? "제 출" : "다 음"
                    }</div>
                   </div>
            </div>
       </div>
)}