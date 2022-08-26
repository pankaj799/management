
import { Header, Footer, Sidebar } from '../../component/index'
import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Layout, Divider } from 'antd';
import faceiconImg from "../../images/faceicon.png"
import ImgiconImg from "../../images/Imgicon.png"
import naviconImg from "../../images/navicon.png"
import instaImg from "../../images/image 19.png"
import imggallImg from "../../images/Image Gallery.png"
import fbImg from "../../images/fb.png"
import chatImg from "../../images/Chat Bubble.png"
import playImg from "../../images/play.png"
import playvid from "../../images/videoplayback.mp4"
import { UserOutlined, BellOutlined, ClockCircleOutlined, FileAddOutlined } from '@ant-design/icons';
import meetingImg from "../../images/Event Accepted Tentatively.png"
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    createTheme,
    themes,
    YouTubeEvent,
} from '@merc/react-timeline';
const { Sider, Content } = Layout;


const Otherpost = () => {

    const dispatch = useDispatch();
    const [subSubjectArray, setSubSubjectArray] = useState([]);

    const theme = createTheme(themes.default, {
        timeline: {
            backgroundColor: '#e3e4e9',
        },
        timelineTrack: {
            background: `linear-gradient(
            to bottom, #5ec0a7 0%,#070d24 100%
          )`,
            backgroundColor: "#f3f0a4",
            width: '6px',
            boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`
        },
        date: {
            backgroundColor: '#3DA588',
            color: '#fff',
        },
        marker: {
            borderRadius: '4px',
            borderColor: '#BF2D51',
            borderWidth: '3px',
            transform: 'rotate(45deg)',
            backgroundColor: '#BF2D51',
            width: '50px',
            borderRadius: '50%',
            left: '2px',
            height: '50px'
        },
        button: {
            backgroundColor: '#000958',
        },
    });

    const MyCustomCard = ({ children }) => (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={instaImg}
                style={{
                    borderRadius: '2rem'
                }}
            />
            <div style={{
                background: "#243a6a",
                borderRadius: '2rem',
                color: 'white',
                padding: '2rem',
            }}>
                <div
                    style={{
                        background: "#3b5997",
                        borderRadius: '2rem',
                        color: 'white',
                        padding: '1rem'
                    }}>
                    <div>
                        <img />
                        <p>Facbook feed</p>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make
                        a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged
                    </p>
                    <p>27 Nov 2022</p>

                </div>
            </div>
            <div
                class="form-group d-flex flex-column justify-content-between"
                style={{
                    boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
                    background: 'white',
                    borderRadius: '2rem',
                    width: '370px'
                }}
            >
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Write Something...' style={{ background: 'transparent', border: 'none', padding: '1rem' }}></textarea>
                <div className='d-flex justify-content-between align-items-center p-4'>
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
                        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`
                    }}>Post</Button>

                </div>
            </div>
            {/* {children} */}
        </div>
    );

    const MyCustomMarker = () => (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{
                background: '#f3f0a4',
                borderRadius: '50%',
                width: '40px',
                left: '2px',
                height: '40px'
            }}>
            <img src={fbImg} style={{ width: '2rem' }} />
        </div>
    )


    return (
        <Layout style={{}}>
            <div
                className='d-flex flex-column justify-content-center align-items-center'
                style={{
                    width: '100%'
                }}
            >
                <Timeline theme={theme}>
                    <Events>
                        <TextEvent
                            text="**Markdown** is *supported*"
                            card={MyCustomCard}
                            marker={MyCustomMarker}
                        />

                        <TextEvent
                            text="**Markdown** is *supported*"
                            card={MyCustomCard}
                            marker={MyCustomMarker}
                        />

                        <TextEvent
                            text="**Markdown** is *supported*"
                            card={MyCustomCard}
                            marker={MyCustomMarker}
                        />

                        <ImageEvent
                            text="You can embed images..."
                            src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
                            alt="jellyfish swimming"
                            credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
                        >
                            <div>
                                <UrlButton href="https://unsplash.com/search/photos/undersea">
                                    View more undersea photos
                                </UrlButton>
                            </div>
                        </ImageEvent>

                        <YouTubeEvent
                            id="6UnRHtwHGSE"
                            name="General Tso's Chicken recipe"
                            text="... and YouTube videos!"
                        />
                    </Events>
                </Timeline>
            </div>
        </Layout >
    )
}

export default Otherpost;