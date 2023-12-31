import React from "react";
import './MainArea.css';
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from "react"
import PostContain from "../PostContain/PostContain";
import PaginationContain from "../PaginationContain/PaginationContain";
import UserTagContain from "../PostContain/UserTagContain";
const serverUrl = process.env.PUBLIC_URL

const data = [];
const num = 80;
for (let i = 0; i < num; i++) {
    data.push({id:'test' + i,num:i});
}
console.log(data)

function MainArea() {
    const [testData, setTest] = useState(data.slice(0, 10));
    const [currPage, setCurrPage] = useState(1)
    // 控制使用者簡介顯示
    const [showUserTag, setShowUserTag] = useState(false)
    // 元素位置紀錄目前hover
    const [userTagPosition, setUserTagPosition] = useState({top: 0, left: 0})
    // 先建立一個名為userTagRef的Ref當UserTag裡面對應的ref={userTagRef}渲染後userTagRef裡面就會存放那個ref裡面的元素內容
    const userTagRef = useRef(null);
    console.log(testData)
    // useEffect(() => {
    //     const newData = data.slice(0, 10);
    //     setTest(newData);
    // }, []);
    return(
        <div className="Main grid grid-cols-3 gap-2 justify-center ">
            {/* <div className="w-screen h-full z-10 fixed flex items-center justify-center">
                <div className="w-screen h-full z-40 bg-black opacity-20"></div>  
                <div className="w-96 h-auto bg-white opacity-100 z-50 fixed rounded-lg">
                    213
                    213
                    213
                    213
                    213
                    <div>
                    213
                    </div>
                </div>
            </div> */}
            
            <div className="Lside sticky mr-11 max-h-[1rem] top-[10%] lg:block hidden">
                <div className="Upper">
                    <ul className="profile">
                        <li>
                            <div className="upper-item">
                                <img src={serverUrl + '/images/facebook.png'} alt="logo"></img>
                                <span>測試</span>
                            </div>
                        </li>
                        <li>
                            <div className="upper-item">
                                <img src={serverUrl + '/images/facebook.png'} alt="logo"></img>
                                <span>123</span>
                            </div>
                        </li><li>
                            <div className="upper-item">
                                <img src={serverUrl + '/images/facebook.png'} alt="logo"></img>
                                <span>123</span>
                            </div>
                        </li><li>
                            <div className="upper-item">
                                <img src={serverUrl + '/images/facebook.png'} alt="logo"></img>
                                <span>123</span>
                            </div>
                        </li><li>
                            <div className="upper-item">
                                <img src={serverUrl + '/images/facebook.png'} alt="logo"></img>
                                <span>123</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="lside-line"></div>
                <div className="Lower">
                    <ul className="game">
                        <li>
                            <div className="lower-item">
                                <img src={serverUrl + '/logo192.png'} alt="logo"></img>
                                <span>123</span>
                            </div>
                        </li>
                        <li>
                            <div className="lower-item">
                                <img src={serverUrl + '/logo192.png'} alt="logo"></img>
                                <span>123</span>
                            </div>
                        </li><li>
                            <div className="lower-item">
                                <img src={serverUrl + '/logo192.png'} alt="logo"></img>
                                <span>123</span>
                            </div>
                        </li><li>
                            <div className="lower-item">
                                <img src={serverUrl + '/logo192.png'} alt="logo"></img>
                                <span>123</span>
                            </div>
                        </li><li>
                            <div className="lower-item">
                                <img src={serverUrl + '/logo192.png'} alt="logo"></img>
                                <span>123</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="contain  md:max-w-3xl max-w-screen-sm">
                <div className="video">
                    <div className="video-block">
                        <a>
                            <img src={serverUrl + '/images/顯示卡序號.jpg'} alt="logo"></img>
                        </a>
                    </div>
                    <div className="video-block">
                        <a>
                            <img src={serverUrl + '/images/顯示卡序號.jpg'} alt="logo"></img>
                        </a>
                    </div>
                    <div className="video-block">
                        <a>
                            <img src={serverUrl + '/images/顯示卡序號.jpg'} alt="logo"></img>
                        </a>
                    </div>
                    <div className="video-block">
                        <a>
                            <img src={serverUrl + '/images/顯示卡序號.jpg'} alt="logo"></img>
                        </a>
                    </div>
                </div>
                <div className="min-contain">
                    <div className="post-action-area">
                        <div className="post-action-bottom-contain">
                            <div className="post-action-top items-center">
                                <img src={serverUrl + '/logo192.png'}></img>
                                <input className="items-center outline-none" placeholder="你在想甚麼" type="text"></input>
                            </div>
                            <div className="min-line"></div>
                            <div className="post-action-bottom">
                                <div className="stream">
                                    <img src={serverUrl + '/images/youtube.png'}></img>
                                    <span>視訊直播</span>
                                </div>
                                <div className="photo">
                                    <img src={serverUrl + '/images/youtube.png'}></img>
                                    <span>相片/影片</span>
                                </div>
                                <div className="action">
                                    <img src={serverUrl + '/images/youtube.png'}></img>
                                    <span>感受/活動</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post m-2 max-w-4xl">
                    <PostContain 
                        setShowUserTag={setShowUserTag}
                        setUserTagPosition={setUserTagPosition}
                    />
                    <PostContain 
                        setShowUserTag={setShowUserTag}
                        setUserTagPosition={setUserTagPosition}
                    />
                    {/* <PaginationContain data={data} setTest={setTest} testData={testData} currPage={currPage} setCurrPage={setCurrPage}/> */}
                    {/* <div> */}
                        {showUserTag && (
                            <UserTagContain userTagPosition={userTagPosition} setShowUserTag={setShowUserTag} showUserTag={showUserTag} userTagRef={userTagRef} />
                        )}
                    {/* </div> */}
                </div>
            </div>
            <div className="friend-list lg:block hidden sticky max-h-[40rem] top-[10%]">
                <div>
                    <p>test</p>
                </div>
                <div>
                    <p>test</p>
                </div>
                <div>
                    <p>test</p>
                </div>
                <div>
                    <p>test</p>
                </div>
                <div>
                    <p>test</p>
                </div>
                <div>
                    <p>test</p>
                </div>
                <div>
                    <p>test</p>
                </div>
            </div>
        </div>
    )
}

export default MainArea
