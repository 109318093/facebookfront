import React from "react";
import { Link } from 'react-router-dom'
import { v4 } from "uuid";
const serverUrl = process.env.PUBLIC_URL

function MessagesContain ({id,name,comment,setMsg}) {
    // console.log(setMsg)

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

    const newMsg = {
        id: v4(),
        name: 'test4',
        items: []
    };
    function getPostItem() {
        const newMsg = {
            id: v4(),
            name: 'test4',
            items: []
        };

        // 使用 setMsg 更新状态，传递新的评论数据
        // useState宣告出來的function第一個值都是當前的資料內容
        // 通常都會取名叫做prevData透過改變prevData讓useState去更改資料狀態重新渲染
        setMsg(prevData => insertNewMessage(prevData, id, newMsg));
    }
    return(
        <div>
            <div className="flex items-top gap-2 m-2">
                <img className="max-w-[2rem] max-h-[2rem] m-1" src={serverUrl + '/logo192.png'}></img>
                <div className="m-1">
                    <div className=" justify-center items-center p-3 text-left bg-slate-200 rounded-lg">
                        <div className="text-sm font-semibold cursor-pointer">{name}</div>
                            <p className="text-sm ">嗨，大家好，我是前端工程師(小宇)我身邊的朋友常常問我說，成為前端工程師學歷是不是一定要有相關的資訊背景才會被公司錄取?我可以肯定的說不用，我面試多家公司的經驗，面試官只關心你會哪些程式，是否有作品。
                我從零基礎到架設網站再到前端工程師花了一年多的時間(大家應該很驚訝怎麼會花這麼多時間)。
                我一開始在線上課程udemy買課程花了半年學(HTML、CSS、Javascript、PHP、mysql)，學完後才發現，我不會上架自己的作品，只能用截圖的方式，把我在udemy學的作品放進履歷(過程並不順利畢竟面試官不知道是不是我寫的)，投了近百家公司終於有一家找我面試，也順利錄取，但條件是從實習生開始做起並且要通過考核才能轉正，月薪只有一萬，當下我接受了，畢竟轉正職後月薪是四萬起跳，做了三個月後，最終的考核是考留言板，可惜最終還是沒考過，主管也語重心長跟我說，我可能不適合做這一行，要我考慮是否轉行。
                之後我離開了公司，花了一個禮拜思考要不要放棄前端工程師，但想到我都花了9個月的時間學網頁了，這樣放棄豈不是太可惜了，我就從頭開始思考到底是哪裡出了問題，思考了幾天發現我對於程式並沒有融會貫通，於是我決定去職訓局上半年的課程，給自己最後的機會。
                從職訓局結訓後，不到一個月的時間，收到了很多家的面試，也順利成功錄取了。
                很開心擺脫了只能公司選我的窘境，也感謝當初的我沒有放棄前端工程師這條路。很多人看到這裡一定想說我要花這麼多的時間才能當前端工程師，還是放棄好了。
                在這裡跟大家說我這篇不是勸退文，經過了這次的經驗，我想告訴大家其實學程式是有捷徑的，舉例來說你要開一家飲料店，飲料店需要裝潢、員工、製作飲料設備、飲料材料、飲料配方。
                            </p>
                    </div>
                    <div className="flex gap-4 items-center text-xs text-slate-600 font-semibold m-2">
                        <div className="cursor-pointer">讚</div>
                        <div className="cursor-pointer" onClick={getPostItem}>回復</div>
                        <div className="cursor-pointer">1天</div>
                    </div>
                </div>
            </div>
            
            {comment && comment.length > 0 && (
                comment.map((msg) => {
                    // console.log(msg); // 在渲染前插入 console.log
                    return (
                    <div className="ml-10" key={msg.id}>
                        <MessagesContain id={msg.id} name={msg.name} comment={msg.items} setMsg={setMsg} />
                    </div>
                    );
                })
            )}
        </div>
    )
}

export default MessagesContain