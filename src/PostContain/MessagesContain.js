import React, { useState, useEffect  } from "react";
import { Link } from 'react-router-dom'
import { v4 } from "uuid";
const serverUrl = process.env.PUBLIC_URL

function MessagesContain ({id,name,conten,comment,setMsg,setShowUserTag,setUserTagPosition}) {
    
    function showUserTag(e) {
        const tagPosition = e.target.getBoundingClientRect();
        setShowUserTag(true)
        setUserTagPosition({ top: tagPosition.top, left: tagPosition.left})
    }

    function unShowUserTag() {
        setShowUserTag(false)
    }

    const [showReply, setShowReply] = useState(false); // 初始化状态
    // 顯示回覆對話框
    const showComment = () => {
        if(showReply == true) {
            setShowReply(false);
        } else {
            setShowReply(true);
        }
        
    };

    // const [message, setMessage] = useState('')
    // 按下enter把回覆內容加進去
    async function sendMessage(e) {
        // 判斷鍵盤按鍵是否為shift+enter
        if(e.keyCode == 13 && e.shiftKey == false) {
            const newMsg = {
                id: v4(),
                name: 'test6',
                conten:e.target.innerHTML,
                items: []
            };
            // 把回覆內容新增至訊息data內
            await setMsg(prevData => insertNewMessage(prevData, id, newMsg));
            // 清空回覆欄位
            e.target.innerHTML = ''
            setShowReply(false);
            e.preventDefault()
        } 
    }

    function sendMessageBtn() {
        
        const newMsg = {
            id: v4(),
            name: 'test6',
            conten:document.getElementById(id).innerHTML,
            items: []
        };

        // 使用 setMsg 更新状态，传递新的评论数据
        // useState宣告出來的function第一個值都是當前的資料內容
        // 通常都會取名叫做prevData透過改變prevData讓useState去更改資料狀態重新渲染
        setMsg(prevData => insertNewMessage(prevData, id, newMsg));
        setShowReply(false);
        document.getElementById(id).innerHTML = ''
    }

    function insertNewMessage(comment, targetId, newMsg) {
        return comment.map(item => {
            if (item.id === targetId) {
                // 如果当前项的 ID 匹配目标 ID，将新消息插入到该项的 items 中
                return {
                // 建立一個名為items的新物件繼承item
                // item裡面包含原本的解構的item.itmes的物件以及新增newMsg
                // ...是ES6的解構方式要把她展開才會將newMsg放入items裡面若不展開會直接變成items[...],newMsg
                // 假設我item.items裡面的array長這樣[item1, item2, item3]
                // 使用[item.items, newMsg]結果==[[item1, item2, item3], newMsg]
                // 如果是[...item.items, newMsg]結果==[item1, item2, item3, newMsg]
                // 之後回傳items取代上方map傳進來的item
                ...item,
                items: [...item.items, newMsg]
                };
            } else if (item.items && item.items.length > 0) {
                // 如果当前项有嵌套的 items，则递归处理它们
                return {
                ...item,
                items: insertNewMessage(item.items, targetId, newMsg)
                };
            }
            return item;
        });
    }

    return(
        <div className="w-full">
            <div className="flex items-top gap-2 m-2 w-auto">
                <div>
                    <img className="max-w-[2rem] max-h-[2rem] m-1" src={serverUrl + '/logo192.png'} onMouseOver={(e) => showUserTag(e)} onMouseLeave={unShowUserTag}></img>
                </div>
                <div className="m-1 w-full">
                    <div className=" justify-center items-center p-3 text-left bg-slate-200 rounded-lg">
                        <div className="text-sm font-semibold cursor-pointer">{name}</div>
                            <p className="text-sm " dangerouslySetInnerHTML={{ __html: conten }}>

                            </p>
                    </div>
                    <div className="flex gap-4 items-center text-xs text-slate-600 font-semibold m-2">
                        <div className="cursor-pointer">讚</div>
                        <div className="cursor-pointer" onClick={showComment}>回復</div>
                        <div className="cursor-pointer">1天</div>
                    </div>
                    {showReply && (
                        <div className="flex items-top gap-2 m-2 w-auto">
                            <img className="max-w-[2rem] max-h-[2rem] m-1" src={serverUrl + '/logo192.png'}></img>
                            <div className="w-full items-center outline-none bg-slate-200 rounded-lg focus-within:min-h-[5rem]">
                                <div id={id} className=" items-center outline-none min-h-[2rem] p-2  w-full break-all text-sm text-left"
                                    role="textbox"
                                    contentEditable="true"
                                    onKeyDown={sendMessage}
                                    // dangerouslySetInnerHTML={{ __html: message }}
                                    >
                                    
                                </div>
                                <div className="flex justify-end items-center">
                                    <div id="messageIcon" className="m-1 p-1 w-7 rounded-full hover:bg-slate-300" role="button" onClick={sendMessageBtn}>
                                        <img className="" src={serverUrl + '/images/send.png'}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
            
            {comment && comment.length > 0 && (
                comment.map((msg) => {
                    return (
                    <div className="ml-12" key={msg.id}>
                        <MessagesContain 
                            id={msg.id} name={msg.name}
                            conten={msg.conten}
                            comment={msg.items}
                            setMsg={setMsg}
                            setShowUserTag={setShowUserTag}
                            setUserTagPosition={setUserTagPosition}
                        />
                    </div>
                    );
                })
            )}
        </div>
    )
}

export default MessagesContain