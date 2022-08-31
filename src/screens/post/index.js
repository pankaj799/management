
import { Header, Footer, Sidebar } from '../../component/index'
import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Layout, Divider } from 'antd';
import faceiconImg from "../../images/faceicon.png"
import ImgiconImg from "../../images/Imgicon.png"
import naviconImg from "../../images/navicon.png"
import instaImg from "../../images/image 18.png"
import imggallImg from "../../images/Image Gallery.png"
import chatImg from "../../images/Chat Bubble.png"
import triOneImg from "../../images/triangle1.png"
import arrowImg from "../../images/arrow.png"
import triTwoImg from "../../images/triangle2.png"
import playImg from "../../images/play.png"
import playvid from "../../images/videoplayback.mp4"
import { UserOutlined, BellOutlined, ClockCircleOutlined } from '@ant-design/icons';
import meetingImg from "../../images/Event Accepted Tentatively.png"
import { Timeline, TimelineEvent } from "react-event-timeline";
const { Sider, Content } = Layout;


const Post = () => {

    const dispatch = useDispatch();
    const [subSubjectArray, setSubSubjectArray] = useState([]);


    return (
        <Layout style={{}}>
            <div
                className='d-flex flex-column justify-content-center align-items-center'
                style={{
                    width: '100%',
                    // overflow: "none"
                }}
            >
                <div
                    className='d-flex flex-column justify-content-center align-items-center'
                    style={{
                        width: '90%',
                        margin: '4rem 0',
                        boxShadow: `-10px -10px 149px 19px rgba(255,255,255,1)`
                    }}
                >
                    <div class="row m-0" style={{ width: "90%" }}>
                        <div class="col-8 d-flex flex-column justify-content-center">
                            <div class="form-group d-flex flex-column justify-content-between">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" placeholder='Write Something...' style={{ background: 'transparent', border: 'none' }}></textarea>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div
                                        className='d-flex justify-content-between align-items-center'
                                        style={{ width: '100px' }}
                                    >
                                        <img src={ImgiconImg} style={{ width: '20px' }} />
                                        <img src={naviconImg} style={{ width: '20px' }} />
                                        <img src={faceiconImg} style={{ width: '20px' }} />
                                    </div>
                                    <Button style={{
                                        background: '#93CCB5',
                                        border: "none",
                                        color: 'white',
                                        borderRadius: '2rem',
                                        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`
                                    }}>Post</Button>
                                </div>
                            </div>
                        </div>
                        <div class="col-4"><img src={instaImg} style={{ height: '300px' }} /></div>
                        <div
                            style={{
                                borderTop: '2px solid #929397',
                                borderBottom: '2px solid #929397',
                                height: '1rem',
                                width: '100%'
                            }}
                        >

                        </div>
                    </div>
                    <div className='mt-3'
                    // style={{
                    //     overflowY: "scroll"
                    // }}
                    >
                        <Timeline
                            lineColor="#f3f0a3"
                            lineStyle={{
                                width: '6px',
                                left: '18px',
                                boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`
                            }}
                        >
                            <TimelineEvent
                                // title="John Doe sent a SMS"
                                className='timelineEvent'
                                bubbleStyle={{
                                    border: '1px solid #f3f0a3',
                                    background: "#f3f0a3",
                                    top: '80px',
                                    height: '40px',
                                    width: '40px',
                                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`

                                }}
                                contentStyle={{
                                    margin: '1rem 2rem',
                                    border: '2rem solid #ebedf2',
                                    background: "#f1f1f1",
                                    position: 'relative',
                                    boxShadow: `inset 10px 10px 29px -20px rgba(0,0,0,0.75), rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px`
                                }}
                                iconStyle={{
                                    width: '40px'
                                }}
                                // createdAt="2016-09-12 10:06 PM"
                                icon={<img src={imggallImg} style={{ width: '20px', height: '20px' }} />}
                            >
                                <img src={arrowImg}
                                    style={{
                                        position: 'absolute',
                                        top: '70px',
                                        left: '-30px',
                                        width: '30px',
                                        backgound: 'black'
                                    }}
                                />
                                <div
                                    style={{
                                        // background : 'red'
                                    }}
                                >
                                    <img src={instaImg} style={{ width: '200px', height: 'auto' }} />
                                    <img src={instaImg} style={{ width: '200px', height: 'auto' }} />
                                    <img src={instaImg} style={{ width: '200px', height: 'auto' }} />
                                    <img src={instaImg} style={{ width: '200px', height: 'auto' }} />
                                </div>
                                <div
                                    className='d-flex justify-content-end p-4 pr-5'
                                >
                                    <div className='d-flex'>
                                        <ClockCircleOutlined
                                            style={{
                                                fontSize: "2rem",
                                                color: "#999999"
                                            }}
                                        />
                                        <h4
                                            style={{
                                                color: "#999999"
                                            }}
                                        >
                                            8 days ago
                                        </h4>
                                    </div>
                                </div>
                            </TimelineEvent>
                            <TimelineEvent
                                // onClick={() => alert("clicked")}
                                bubbleStyle={{
                                    border: '1px solid #f4d09a',
                                    background: "#f4d09a",
                                    top: '20px',
                                    height: '40px',
                                    width: '40px',
                                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
                                }}
                                contentStyle={{
                                    margin: '1rem 2rem',
                                    border: '2rem solid #ebedf2',
                                    background: "#f1f1f1",
                                    position: 'relative',
                                    boxShadow: `inset 10px 10px 29px -20px rgba(0,0,0,0.75), rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px`
                                }}
                                iconStyle={{
                                    width: '40px'
                                }}
                                icon={<img src={chatImg} style={{ width: '20px', height: '20px' }} />}
                            >
                                <img src={arrowImg}
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        left: '-30px',
                                        width: '30px',
                                        backgound: 'black'
                                    }}
                                />
                                <div
                                    style={{
                                        padding: '2rem'
                                    }}
                                >
                                    <div className='d-flex align-self-end'>
                                        <h4>Joe Daman</h4>
                                        <p style={{ marginBottom: '3px', paddingTop: '4px', marginLeft: '10px' }}>commented on your post</p>
                                    </div>
                                    <p>
                                        Like we talked, you said that you would share the shipment details? This
                                        is an urgent order and so I am losing patience. Can you expedite the
                                        process and pls do share the details asap. Consider this a gentle
                                        reminder if you are on track already!
                                    </p>
                                </div>
                                <div
                                    className='d-flex justify-content-end p-4 pr-5'
                                >
                                    <div className='d-flex'>
                                        <ClockCircleOutlined
                                            style={{
                                                fontSize: "2rem",
                                                color: "#999999"
                                            }}
                                        />
                                        <h4
                                            style={{
                                                color: "#999999",
                                                marginLeft: '8px'
                                            }}
                                        >
                                            8 days ago
                                        </h4>
                                    </div>
                                </div>

                            </TimelineEvent>
                            <TimelineEvent
                                // onClick={() => alert("clicked")}
                                bubbleStyle={{
                                    border: '1px solid #eea389',
                                    background: "#eea389",
                                    top: '120px',
                                    height: '40px',
                                    width: '40px',
                                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
                                }}
                                contentStyle={{
                                    margin: '0px 2rem',
                                    border: '2rem solid #ebedf2',
                                    position: 'relative',
                                    background: "#ebedf2"
                                    // boxShadow: `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`
                                }}
                                iconStyle={{
                                    width: '40px'
                                }}
                                icon={<img src={playImg} style={{ width: '20px', height: '20px' }} />}
                            >
                                <img src={arrowImg}
                                    style={{
                                        position: 'absolute',
                                        top: '105px',
                                        left: '-30px',
                                        width: '30px',
                                        backgound: 'black'
                                    }}
                                />
                                <div>
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                                    </div>
                                    <div
                                        className='d-flex justify-content-between'
                                        style={{
                                            padding: '2rem 0'
                                        }}
                                    >
                                        <Button style={{
                                            background: '#93CCB5',
                                            border: "none",
                                            color: 'white',
                                            borderRadius: '2rem',
                                            boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`
                                        }}>View Comment</Button>
                                        <div className='d-flex'>
                                            <ClockCircleOutlined
                                                style={{
                                                    fontSize: "2rem",
                                                    color: "#999999"
                                                }}
                                            />
                                            <h4
                                                style={{
                                                    color: "#999999",
                                                    marginLeft: '8px'
                                                }}
                                            >
                                                8 days ago
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                            </TimelineEvent>
                        </Timeline>
                    </div>

                </div>
                {/* <Divider style={{color : '#929397'}}/>
                <Divider style={{color : '#929397'}}/> */}
            </div>
        </Layout >
    )
}

export default Post;