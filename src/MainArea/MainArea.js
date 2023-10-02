import React from "react";
import './MainArea.css';
import { Link } from 'react-router-dom'
import PostContain from "../PostContain/PostContain";
const serverUrl = process.env.PUBLIC_URL
function MainArea() {
    return(
        <div className="Main grid grid-cols-3 gap-2 justify-center ">
            <div className="Lside sticky  mr-11 max-h-0  lg:block hidden top-[10%]">
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
                </div>
            </div>
            <div className="friend-list lg:block hidden sticky max-h-[10rem] top-[10%]">
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
