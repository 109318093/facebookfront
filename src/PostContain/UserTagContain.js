import React from "react";
import { useRef, useEffect } from "react";
import { Link } from 'react-router-dom'
const serverUrl = process.env.PUBLIC_URL
function UserTagContain({userTagPosition, setShowUserTag, showUserTag, userTagRef}) {

    // 追蹤目前hover的元素位置
    useEffect(() => {
        // 檢查userTagRef元素是否渲染完成
        if(userTagRef.current) {
            // 渲染完成後就可以透過userTagRef.current取得該元素的內容
            const tagHight = userTagRef.current.clientHeight
            const tagLeft = userTagRef.current.clientWidth
            const userTagHight = userTagPosition.top - tagHight
            const userTagLeft = userTagPosition.left - tagLeft/2.5
            
            // 設定使用者簡介的style
            userTagRef.current.style.position  = "fixed"
            userTagRef.current.style.top = userTagHight+"px"
            userTagRef.current.style.left = userTagLeft+"px"
        }
        
    },[showUserTag])
    
    // 顯示使用者簡介
    function showContain () {
        setShowUserTag(true)
    }
    
    // 隱藏使用者簡介
    function unShowContain() {
        setShowUserTag(false)
    }

    return(
        // 必須加入ref屬性他是react操作他的虛擬DOM的物件渲染完成後他會講整個DOM存放入userTagRef裡面
        <div ref={userTagRef} className={`bg-white absolute rounded-lg shadow-xl`} onMouseOver={showContain} onMouseLeave={unShowContain}>
            <div className="m-2">
                <div className="flex items-center justify-start gap-2 m-1">
                    <img className="w-[3rem] m-2" src={serverUrl + '/logo192.png'}></img>
                    <div className="text-sm">
                        <div className="m-1 font-semibold text-left"><Link>userName</Link></div>
                        <div className="m-1 flex items-center justify-start gap-2 text-sm">
                            <img className="w-[1rem]" src={serverUrl + '../images/home.png'}></img>
                            <div className="text-center flex items-center text-sm">現居<span className="font-semibold  text-center text-sm">桃園市桃園區</span></div>
                        </div>
                        <div className="m-1 flex items-center justify-start gap-2 ">
                            <img className="w-[1rem]" src={serverUrl + '../images/shop.png'}></img>
                            <div className="text-center flex items-center text-sm">曾在台積電工作</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-base">
                    <div className="bg-gray-200 rounded-lg p-1 w-[8rem] flex items-center justify-center hover:bg-gray-300">
                        <div className="flex items-center gap-1 cursor-pointer">
                            <img className="w-[1rem]" src={serverUrl + '../images/chat.png'}></img>
                            <span className="font-semibold">發送訊息</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-sky-500 rounded-lg p-1 w-[6rem] hover:bg-sky-600 cursor-pointer">
                        <div className="flex items-center justify-center gap-2">
                            <img className="w-[1rem]" src={serverUrl + '../images/user.png'}></img>
                            <span className="font-semibold text-white">加朋友</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gray-200 rounded-lg p-1 w-[3rem] hover:bg-gray-300 cursor-pointer">
                        <div className="flex items-center justify-center gap-1">
                            <span className="font-semibold">...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTagContain