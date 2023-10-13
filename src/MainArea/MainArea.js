import React from "react";
import './MainArea.css';
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import PostContain from "../PostContain/PostContain";
import PaginationContain from "../PaginationContain/PaginationContain";
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
    console.log(testData)
    // useEffect(() => {
    //     const newData = data.slice(0, 10);
    //     setTest(newData);
    // }, []);
    return(
        <div className="Main grid grid-cols-3 gap-2 justify-center ">
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
                    <PostContain />
                    <PaginationContain data={data} setTest={setTest} testData={testData} currPage={currPage} setCurrPage={setCurrPage}/>
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
