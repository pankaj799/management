
import { Header, Footer, Sidebar } from '../../component/index'
import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Layout, Divider } from 'antd';
import faceiconImg from "../../images/faceicon.png"
import ImgiconImg from "../../images/Imgicon.png"
import naviconImg from "../../images/navicon.png"
import instaImg from "../../images/image 19.png"
import TwitterImg from "../../images/Twitter.png"
import InstagramImg from "../../images/Instagram.png"
import YouTubeImg from "../../images/YouTube.png"
import PinterestImg from "../../images/Pinterest.png"
import LinkedInImg from "../../images/LinkedIn.png"
import EllipseImg from "../../images/Ellipse 62.png"
import imggallImg from "../../images/Image Gallery.png"
import fbImg from "../../images/fb.png"
import chatImg from "../../images/Chat Bubble.png"
import playImg from "../../images/play.png"
import playvid from "../../images/videoplayback.mp4"
import { HeartOutlined, BellOutlined, ClockCircleOutlined, FileAddOutlined } from '@ant-design/icons';
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
        <div className='d-flex flex-column justify-content-center align-items-center'
            style={{
                padding: '0 4rem',
            }}
        >
            <img src={instaImg}
                style={{
                    borderRadius: '2rem',
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
                }}
            />
            <div style={{
                background: "#243a6a",
                borderRadius: '2rem',
                color: 'white',
                width: '400px',
                padding: '2rem',
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
            }}>
                <div
                    style={{
                        background: "#3b5997",
                        borderRadius: '2rem',
                        color: 'white',
                        padding: '1rem'
                    }}>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <img />
                        <p style={{
                            fontWeight: '500'
                        }}>Facbook feed</p>
                    </div>
                    <p style={{
                        fontWeight: '200',
                        fontStyle: 'italic',
                        fontSize: '8px'
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since
                    </p>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <p
                            style={{
                                fontWeight: '200',
                                fontStyle: 'italic',
                                fontSize: '8px'
                            }}
                        >27 Nov 2022</p>
                        <p><HeartOutlined
                            style={{
                                transform: 'translateY(-2px)',
                                marginRight: '5px'
                            }}
                        />75</p>
                    </div>

                </div>
            </div>
            <div
                class="form-group d-flex flex-column justify-content-between"
                style={{
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
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
                        borderRadius: '2rem',
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
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
                height: '40px'
            }}>
            <img src={fbImg} style={{ width: '2rem' }} />
            {/* <div 
            style={{
                width : '200px',
                heigth : '5px',
                backgroundCOlor : 'black'
            }}
            ></div> */}
        </div>
    )

    const MyCustomCardOne = ({ children }) => (
        <div className='d-flex flex-column justify-content-center align-items-center'
            style={{
                padding: '0 4rem',
            }}>
            <img src={instaImg}
                style={{
                    borderRadius: '2rem',
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
                }}
            />
            <div style={{
                background: "#296a82",
                borderRadius: '2rem',
                width: '400px',
                color: 'white',
                padding: '2rem',
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
            }}>
                <div
                    style={{
                        background: "#00aced",
                        borderRadius: '2rem',
                        color: 'white',
                        padding: '1rem'
                    }}>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <img />
                        <p style={{
                            fontWeight: '500'
                        }}>Tweeter feed</p>
                    </div>
                    <p style={{
                        fontWeight: '200',
                        fontStyle: 'italic',
                        fontSize: '8px'
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since
                    </p>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <p
                            style={{
                                fontWeight: '200',
                                fontStyle: 'italic',
                                fontSize: '8px'
                            }}
                        >27 Nov 2022</p>
                        <p><HeartOutlined
                            style={{
                                transform: 'translateY(-2px)',
                                marginRight: '5px'
                            }}
                        />75</p>
                    </div>

                </div>
            </div>
            <div
                class="form-group d-flex flex-column justify-content-between"
                style={{
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
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
                        borderRadius: '2rem',
                        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`
                    }}>Post</Button>

                </div>
            </div>
            {/* {children} */}
        </div>
    );

    const MyCustomMarkerOne = () => (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{
                background: '#f5d3a0',
                borderRadius: '50%',
                width: '40px',
                left: '2px',
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
                height: '40px'
            }}>
            <img src={TwitterImg} style={{ width: '2rem' }} />
            {/* <div
            style={{
                width : "100px",
                height : '5px',
                background : 'black'
            }}
            >

            </div> */}
        </div>
    )

    const MyCustomCardThree = ({ children }) => (
        <div className='d-flex flex-column justify-content-center align-items-center'
            style={{
                padding: '0 4rem',
            }}
        >
            <img src={instaImg}
                style={{
                    borderRadius: '2rem',
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
                }}
            />
            <div style={{
                background: "#9e0277",
                borderRadius: '2rem',
                color: 'white',
                width: '400px',
                padding: '2rem',
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
            }}>
                <div
                    style={{
                        // background: "#f507aa",
                        backgroundImage: `linear-gradient(to bottom, #f504be, #ff009b, #ff0078, #ff0057, #f61d38)`,
                        borderRadius: '2rem',
                        color: 'white',
                        padding: '1rem'
                    }}>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <img />
                        <p style={{
                            fontWeight: '500'
                        }}>Tweeter feed</p>
                    </div>
                    <p style={{
                        fontWeight: '200',
                        fontStyle: 'italic',
                        fontSize: '8px'
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since
                    </p>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <p
                            style={{
                                fontWeight: '200',
                                fontStyle: 'italic',
                                fontSize: '8px'
                            }}
                        >27 Nov 2022</p>
                        <p><HeartOutlined
                            style={{
                                transform: 'translateY(-2px)',
                                marginRight: '5px'
                            }}
                        />75</p>
                    </div>

                </div>
            </div>
            <div
                class="form-group d-flex flex-column justify-content-between"
                style={{
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
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
                        borderRadius: '2rem',
                        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`
                    }}>Post</Button>

                </div>
            </div>
            {/* {children} */}
        </div>
    );

    const MyCustomMarkerThree = () => (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{
                background: '#eea48b',
                borderRadius: '50%',
                width: '40px',
                left: '2px',
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
                height: '40px'
            }}>
            <img src={InstagramImg} style={{ width: '2rem' }} />
            {/* <div
            style={{
                width : "100px",
                height : '5px',
                background : 'black'
            }}
            >

            </div> */}
        </div>
    )

    const MyCustomCardFour = ({ children }) => (
        <div className='d-flex flex-column justify-content-center align-items-center'
            style={{
                padding: '0 4rem',
            }}
        >
            <img src={instaImg}
                style={{
                    borderRadius: '2rem',
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
                }}
            />
            <div style={{
                background: "#a52424",
                borderRadius: '2rem',
                color: 'white',
                width: '400px',
                padding: '2rem',
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
            }}>
                <div
                    style={{
                        background: "#ff0000",
                        borderRadius: '2rem',
                        color: 'white',
                        padding: '1rem'
                    }}>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <img />
                        <p style={{
                            fontWeight: '500'
                        }}>Tweeter feed</p>
                    </div>
                    <p style={{
                        fontWeight: '200',
                        fontStyle: 'italic',
                        fontSize: '8px'
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since
                    </p>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <p
                            style={{
                                fontWeight: '200',
                                fontStyle: 'italic',
                                fontSize: '8px'
                            }}
                        >27 Nov 2022</p>
                        <p><HeartOutlined
                            style={{
                                transform: 'translateY(-2px)',
                                marginRight: '5px'
                            }}
                        />75</p>
                    </div>

                </div>
            </div>
            <div
                class="form-group d-flex flex-column justify-content-between"
                style={{
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
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
                        borderRadius: '2rem',
                        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`
                    }}>Post</Button>

                </div>
            </div>
            {/* {children} */}
        </div>
    );

    const MyCustomMarkerFour = () => (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{
                background: '#f5d08b',
                borderRadius: '50%',
                width: '40px',
                left: '2px',
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
                height: '40px'
            }}>
            <img src={YouTubeImg} style={{ width: '2rem' }} />
            {/* <div
            style={{
                width : "100px",
                height : '5px',
                background : 'black'
            }}
            >

            </div> */}
        </div>
    )

    const MyCustomCardFive = ({ children }) => (
        <div className='d-flex flex-column justify-content-center align-items-center'
            style={{
                padding: '0 4rem',
            }}
        >
            <img src={instaImg}
                style={{
                    borderRadius: '2rem',
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
                }}
            />
            <div style={{
                background: "#7a1717",
                borderRadius: '2rem',
                width: '400px',
                color: 'white',
                padding: '2rem',
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
            }}>
                <div
                    style={{
                        background: "#b7071a",
                        borderRadius: '2rem',
                        color: 'white',
                        padding: '1rem'
                    }}>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <img />
                        <p style={{
                            fontWeight: '500'
                        }}>Tweeter feed</p>
                    </div>
                    <p style={{
                        fontWeight: '200',
                        fontStyle: 'italic',
                        fontSize: '8px'
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since
                    </p>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <p
                            style={{
                                fontWeight: '200',
                                fontStyle: 'italic',
                                fontSize: '8px'
                            }}
                        >27 Nov 2022</p>
                        <p><HeartOutlined
                            style={{
                                transform: 'translateY(-2px)',
                                marginRight: '5px'
                            }}
                        />75</p>
                    </div>

                </div>
            </div>
            <div
                class="form-group d-flex flex-column justify-content-between"
                style={{
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
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
                        borderRadius: '2rem',
                        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`
                    }}>Post</Button>

                </div>
            </div>
            {/* {children} */}
        </div>
    );

    const MyCustomMarkerFive = () => (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{
                background: '#b898c0',
                borderRadius: '50%',
                width: '40px',
                left: '2px',
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
                height: '40px'
            }}>
            <img src={PinterestImg} style={{ width: '2rem' }} />
            {/* <div
            style={{
                width : "100px",
                height : '5px',
                background : 'black'
            }}
            >

            </div> */}
        </div>
    )

    const MyCustomCardSix = ({ children }) => (
        <div className='d-flex flex-column justify-content-center align-items-center'
            style={{
                padding: '0 4rem',
            }}
        >
            <img src={instaImg}
                style={{
                    borderRadius: '2rem',
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
                }}
            />
            <div style={{
                background: "#2a6a83",
                borderRadius: '2rem',
                width: '400px',
                color: 'white',
                padding: '2rem',
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
            }}>
                <div
                    style={{
                        background: "#0077b5",
                        borderRadius: '2rem',
                        color: 'white',
                        padding: '1rem'
                    }}>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <img />
                        <p style={{
                            fontWeight: '500'
                        }}>Tweeter feed</p>
                    </div>
                    <p style={{
                        fontWeight: '200',
                        fontStyle: 'italic',
                        fontSize: '8px'
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since
                    </p>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <p
                            style={{
                                fontWeight: '200',
                                fontStyle: 'italic',
                                fontSize: '8px'
                            }}
                        >27 Nov 2022</p>
                        <p><HeartOutlined
                            style={{
                                transform: 'translateY(-2px)',
                                marginRight: '5px'
                            }}
                        />75</p>
                    </div>

                </div>
            </div>
            <div
                class="form-group d-flex flex-column justify-content-between"
                style={{
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
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
                        borderRadius: '2rem',
                        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`
                    }}>Post</Button>

                </div>
            </div>
            {/* {children} */}
        </div>
    );

    const MyCustomMarkerSix = () => (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{
                background: '#92a8d1',
                borderRadius: '50%',
                width: '40px',
                left: '2px',
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
                height: '40px'
            }}>
            <img src={LinkedInImg} style={{ width: '2rem' }} />
            {/* <div
            style={{
                width : "100px",
                height : '5px',
                background : 'black'
            }}
            >

            </div> */}
        </div>
    )

    const MyCustomCardSeven = ({ children }) => (
        <div className='d-flex flex-column justify-content-center align-items-center'
            style={{
                padding: '0 4rem',
            }}
        >
            <img src={instaImg}
                style={{
                    borderRadius: '2rem',
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
                }}
            />
            <div style={{
                background: "#6e9384",
                borderRadius: '2rem',
                width: '400px',
                color: 'white',
                padding: '2rem',
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`
            }}>
                <div
                    style={{
                        background: "#93ccb5",
                        borderRadius: '2rem',
                        color: 'white',
                        padding: '1rem'
                    }}>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <img />
                        <p style={{
                            fontWeight: '500'
                        }}>Tweeter feed</p>
                    </div>
                    <p style={{
                        fontWeight: '200',
                        fontStyle: 'italic',
                        fontSize: '8px'
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since
                    </p>
                    <div
                        className='d-flex justify-content-between'
                    >
                        <p
                            style={{
                                fontWeight: '200',
                                fontStyle: 'italic',
                                fontSize: '8px'
                            }}
                        >27 Nov 2022</p>
                        <p><HeartOutlined
                            style={{
                                transform: 'translateY(-2px)',
                                marginRight: '5px'
                            }}
                        />75</p>
                    </div>

                </div>
            </div>
            <div
                class="form-group d-flex flex-column justify-content-between"
                style={{
                    boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
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
                        borderRadius: '2rem',
                        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`
                    }}>Post</Button>

                </div>
            </div>
            {/* {children} */}
        </div>
    );

    const MyCustomMarkerSeven = () => (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{
                background: '#93ccb5',
                borderRadius: '50%',
                width: '40px',
                left: '2px',
                boxShadow: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
                height: '40px'
            }}>
            <img src={EllipseImg} style={{ width: '2rem' }} />
            {/* <div
            style={{
                width : "100px",
                height : '5px',
                background : 'black'
            }}
            >

            </div> */}
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
                            card={MyCustomCardOne}
                            marker={MyCustomMarkerOne}
                        />

                        <TextEvent
                            text="**Markdown** is *supported*"
                            card={MyCustomCardThree}
                            marker={MyCustomMarkerThree}
                        />

                        <TextEvent
                            text="**Markdown** is *supported*"
                            card={MyCustomCardFour}
                            marker={MyCustomMarkerFour}
                        />

                        <TextEvent
                            text="**Markdown** is *supported*"
                            card={MyCustomCardFive}
                            marker={MyCustomMarkerFive}
                        />

                        <TextEvent
                            text="**Markdown** is *supported*"
                            card={MyCustomCardSix}
                            marker={MyCustomMarkerSix}
                        />

                        <TextEvent
                            text="**Markdown** is *supported*"
                            card={MyCustomCardSeven}
                            marker={MyCustomMarkerSeven}
                        />
                    </Events>
                </Timeline>
            </div>
        </Layout >
    )
}

export default Otherpost;