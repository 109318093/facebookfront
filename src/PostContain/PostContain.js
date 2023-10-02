import React from "react";
import { Link } from 'react-router-dom'
import MessagesContain from "./MessagesContain";
const serverUrl = process.env.PUBLIC_URL

function PostContain() {
    function shadowIcon(e) {
        const icon = document.getElementById('messageIcon')
        if(e.type == 'focus') {
            icon.classList.remove('hidden')
        } else {
            icon.classList.add('hidden')
        }
        
    }
    return(
        <div className="post-container bg-white flex rounded-lg shadow-xl mt-4 p-2 grid grid-cols-1">
            <div className="flex items-center">
                <img className="w-[3rem]" src={serverUrl + '/logo192.png'}></img>
                <div className="grid justify-items-start text-base">
                    <Link className="font-semibold" to="/LoginPage">UserName</Link>
                    <span>2天</span>
                </div>
            </div>
            <div className=" justify-center items-center p-3 text-left">
                <span className="text-sm whitespace-pre-wrap">嗨，大家好，我是前端工程師(小宇)我身邊的朋友常常問我說，成為前端工程師學歷是不是一定要有相關的資訊背景才會被公司錄取?我可以肯定的說不用，我面試多家公司的經驗，面試官只關心你會哪些程式，是否有作品。
    我從零基礎到架設網站再到前端工程師花了一年多的時間(大家應該很驚訝怎麼會花這麼多時間)。
    我一開始在線上課程udemy買課程花了半年學(HTML、CSS、Javascript、PHP、mysql)，學完後才發現，我不會上架自己的作品，只能用截圖的方式，把我在udemy學的作品放進履歷(過程並不順利畢竟面試官不知道是不是我寫的)，投了近百家公司終於有一家找我面試，也順利錄取，但條件是從實習生開始做起並且要通過考核才能轉正，月薪只有一萬，當下我接受了，畢竟轉正職後月薪是四萬起跳，做了三個月後，最終的考核是考留言板，可惜最終還是沒考過，主管也語重心長跟我說，我可能不適合做這一行，要我考慮是否轉行。
    之後我離開了公司，花了一個禮拜思考要不要放棄前端工程師，但想到我都花了9個月的時間學網頁了，這樣放棄豈不是太可惜了，我就從頭開始思考到底是哪裡出了問題，思考了幾天發現我對於程式並沒有融會貫通，於是我決定去職訓局上半年的課程，給自己最後的機會。
    從職訓局結訓後，不到一個月的時間，收到了很多家的面試，也順利成功錄取了。
    很開心擺脫了只能公司選我的窘境，也感謝當初的我沒有放棄前端工程師這條路。很多人看到這裡一定想說我要花這麼多的時間才能當前端工程師，還是放棄好了。
    在這裡跟大家說我這篇不是勸退文，經過了這次的經驗，我想告訴大家其實學程式是有捷徑的，舉例來說你要開一家飲料店，飲料店需要裝潢、員工、製作飲料設備、飲料材料、飲料配方。
                </span>
            </div>
            <div className="flex justify-between m-2">
                <div className="flex gap-2 text-sm text-gray-500">
                    <img className="w-[1rem]" src={serverUrl + '/images/good.svg'}></img>
                    <Link className="" to="/LoginPage">24</Link>
                </div>
                <div className="flex gap-2">
                    <div className="flex gap-2 text-sm">
                        <Link className="" to="/LoginPage">24</Link>
                        <img className="w-[1rem]" src={serverUrl + '/images/chat2.png'}></img>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <Link className="" to="/LoginPage">4</Link>
                        <img className="w-[1rem]" src={serverUrl + '/images/share.png'}></img>
                    </div>
                    
                </div>
            </div>
            <hr className="m-2"></hr>
            <div className="grid grid-cols-3 justify-between text-sm gap-3">
                <div className="flex justify-center cursor-pointer rounded-lg hover:bg-gray-100 p-2">
                    <img className="w-[1rem]" src={serverUrl + '/images/like.png'}></img>
                    <span>讚</span>
                </div>
                <div className="flex justify-center cursor-pointer rounded-lg hover:bg-gray-100 p-2">
                    <img className="w-[1rem]" src={serverUrl + '/images/chat2.png'}></img>
                    <span>留言</span>
                </div>
                <div className="flex justify-center cursor-pointer rounded-lg hover:bg-gray-100 p-2">
                    <img className="w-[1rem]" src={serverUrl + '/images/share.png'}></img>
                    <span>分享</span>
                </div>
            </div>
            <hr className="m-2"></hr>
            <div className="flex items-top gap-2 m-2">
                <img className="max-w-[2rem] max-h-[2rem] m-1" src={serverUrl + '/logo192.png'}></img>
                <div className=" w-full items-center outline-none " >
                    <p onFocus={shadowIcon} onBlur={shadowIcon} className="min-h-[2rem] p-2 bg-slate-200 w-full break-all outline-none text-sm text-left rounded-full focus:min-h-[5rem] focus:rounded-b-lg" role="textbox" contentEditable="true" aria-multiline="true" aria-placeholder="5-digit zipcode"></p>
                    <div id="messageIcon" className=" bg-slate-200 rounded-b-lg hidden">test</div>
                </div>
            </div>
            <MessagesContain />
        </div>
    )
}


export default PostContain