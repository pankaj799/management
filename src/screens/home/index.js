
import { Header, Footer, Sidebar } from '../../component/index'
import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Progress } from 'antd';
import btnImg from "../../images/Ellipse 38 (1).png"
import userImg from "../../images/image 53.png"
import userTwoImg from "../../images/image 55.png"
import userThreeImg from "../../images/image 54.png"
import userFourImg from "../../images/image 12.png"
import talesImg from "../../images/image 48.png"
import agenda from "../../images/agenda.png"
import Vector from "../../images/Vector.png"
import MailBox from "../../images/Open Envelope.png"
import Stamp from "../../images/Rubber Stamp.png"
import videoImg from "../../images/Video Call.png"
import clockImg from "../../images/clock.png"
import { UserOutlined, BellOutlined, ClockCircleOutlined, FileAddOutlined } from '@ant-design/icons';
import meetingImg from "../../images/Event Accepted Tentatively.png"
const { Sider, Content } = Layout;


const Home = () => {

    const dispatch = useDispatch();
    const [subSubjectArray, setSubSubjectArray] = useState([]);

    return (
        <Layout style={{}}>
            <Sider theme="light" width={300} style={{ background: 'rgb(245, 248, 249)' }}>
                <div className='progess-bar'>
                    <div className='progess-bar-one'>
                        <h4>Your Tasks</h4>
                        <p>stats for this week</p>
                        <Progress
                            type="circle"
                            percent={75}
                            strokeColor={{
                                '0%': '#f77090',
                                '100%': '#f77090',
                            }}
                            style={{
                                borderRadius: '50%',
                                padding : '2rem',
                                boxShadow: 'rgb(149 157 165 / 20%) 0px 8px 24px'
                            }}
                        />
                    </div>
                    <div className='progess-bar-two'>
                        <h4 style={{ padding: '2rem 0' }}>Today's task</h4>
                        <p style={{ marginBottom: '0' }}>60%</p>
                        <Progress
                            percent={50}
                            showInfo={false}
                            strokeColor={{
                                '0%': '#ff9356',
                                '100%': '#f72f2f',
                            }}
                        />
                        <div>
                            <div className='d-flex align-items-center'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='progress-input-check' />
                                <label for="vehicle1" style={{ marginLeft: '1rem', fontWeight: '500', marginTop: '7px' }} >Learn about</label><br />
                            </div>
                            <div className='d-flex align-items-center'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='progress-input-check' />
                                <label for="vehicle1" style={{ marginLeft: '1rem', fontWeight: '500', marginTop: '7px' }} >Learn about</label><br />
                            </div>
                            <div className='d-flex align-items-center'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='progress-input-check' />
                                <label for="vehicle1" style={{ marginLeft: '1rem', fontWeight: '500', marginTop: '7px' }} >Learn about</label><br />
                            </div>
                            <div className='d-flex align-items-center'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='progress-input-check' />
                                <label for="vehicle1" style={{ marginLeft: '1rem', fontWeight: '500', marginTop: '7px' }} >Learn about</label><br />
                            </div>
                            <div className='d-flex align-items-center'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='progress-input-check' />
                                <label for="vehicle1" style={{ marginLeft: '1rem', fontWeight: '500', marginTop: '7px' }} >Learn about</label><br />
                            </div>
                        </div>
                        <div className='d-flex '
                            style={{
                                padding: '2rem 0'
                            }}
                        >
                            <div
                                className='d-flex justify-content-around align-items-center '
                                style={{
                                    width: '150px',
                                    borderRadius: '2rem',
                                    height: '30px',
                                    boxShadow: 'rgb(149 157 165 / 20%) 0px 8px 24px'
                                }}>
                                <UserOutlined />
                                <BellOutlined />
                                <ClockCircleOutlined />
                            </div>
                            <div className='d-flex justify-content-center align-items-center '
                                style={{
                                    borderRadius: '2rem',
                                    marginLeft: '2rem',
                                    height: '30px',
                                    background: '#f72f2f',
                                    width: '30px',
                                    color: 'white',
                                    boxShadow: 'rgb(149 157 165 / 20%) 0px 8px 24px'
                                }}>
                                <FileAddOutlined />
                            </div>
                        </div>
                    </div>
                </div>
            </Sider>
            <Layout style={{ marginBottom: '1rem' }} className="site-layout">
                <Content className='d-flex flex-wrap p-4 align_main_home' style={{ background: '#F5F8F9' }} onClick={() => setCollapsed(!collapsed)}>
                    <div className="contentSection p-3" style={{ width: '100%', margin: '1rem 5rem ' }}>
                        <br /><br />
                        <div class="row">
                            <div class="col-md-12">
                                <div className='roadmap-main'>
                                    <div className='d-flex justify-content-around roadmap-main-adj'>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle d-flex justify-content-center align-items-center' style={{ backgroundColor: "#7ec9ff" }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(-42deg)`
                                                        }}
                                                    />
                                                    <img src={userImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        <img
                                                            src={agenda}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                        AGENDA
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Good Morning Dyna,
                                                        Here is what's your
                                                        Agenda Today! </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle d-flex justify-content-center align-items-center' style={{ backgroundColor: '#8EC3CE' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(-42deg)`
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        <img
                                                            src={Vector}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                        CONTACT
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Please send contact to Maya now.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle d-flex justify-content-center align-items-center' style={{ backgroundColor: '#9C51D2' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(-42deg)`
                                                        }}
                                                    />
                                                    <img src={userTwoImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        <img
                                                            src={meetingImg}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                        MEETING
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Maya Book a meeting in 60 min to discuss the contact.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-around roadmap-main-adj-two'>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle-two d-flex justify-content-center align-items-center' style={{ backgroundColor: '#E94CA0' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(132deg)`
                                                        }}
                                                    />
                                                    <img src={userThreeImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p-two'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        E-MAIL
                                                        <img
                                                            src={MailBox}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Please reply to Eva’s Email Now</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle-two d-flex justify-content-center align-items-center' style={{ backgroundColor: '#FCC84B' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(132deg)`
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p-two'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        APPROVE
                                                        <img
                                                            src={Stamp}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Time too approve the invoice</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle-two d-flex justify-content-center align-items-center' style={{ backgroundColor: '#F18361' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(132deg)`
                                                        }}
                                                    />
                                                    <img src={userThreeImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p-two'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        E-MAGZINE
                                                        <img
                                                            src={userFourImg}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Emm just subscribed to your E-Magzine</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-around roadmap-main-adj'>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle d-flex justify-content-center align-items-center' style={{ backgroundColor: '#548DBF' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(-42deg)`
                                                        }}
                                                    />
                                                    <img src={talesImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        <img
                                                            src={videoImg}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                        Meeting
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Meeting with Maya in 15 minutes</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle d-flex justify-content-center align-items-center' style={{ backgroundColor: '#C4DC4B' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(-42deg)`
                                                        }}
                                                    />
                                                    <img src={userTwoImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        <img
                                                            src={agenda}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                        CONTACT
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Congrats Dyna! Maya
                                                        Accepted & Signed the contract</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle d-flex justify-content-center align-items-center' style={{ backgroundColor: '#DB4044' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(-42deg)`
                                                        }}
                                                    />
                                                    <img src={userImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        <img
                                                            src={clockImg}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                        LUNCH
                                                    </h3>
                                                    <p style={{ width: '150px' }}>It’s time to treat yourself with a healthy Lunch to celebrate your hardwork so far!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-around roadmap-main-adj-two'>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle-two d-flex justify-content-center align-items-center' style={{ backgroundColor: '#A553DD' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(132deg)`
                                                        }}
                                                    />
                                                    <img src={userImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p-two '>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        <img
                                                            src={agenda}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                        AGENDA
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Good Morning Dyna,
                                                        Here is what's your
                                                        Agenda Today! </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle-two d-flex justify-content-center align-items-center' style={{ backgroundColor: '#8CDFE6' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(132deg)`
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p-two'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        <img
                                                            src={Vector}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                        CONTACT
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Please send contact to Maya now.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle-two d-flex justify-content-center align-items-center' style={{ backgroundColor: '#92E2F4' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(132deg)`
                                                        }}
                                                    />
                                                    <img src={userTwoImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p-two'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        <img
                                                            src={meetingImg}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                        MEETING
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Maya Book a meeting in 60 min to discuss the contact.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-around roadmap-main-adj'>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle d-flex justify-content-center align-items-center' style={{ backgroundColor: '#DD8973' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(-42deg)`
                                                        }}
                                                    />
                                                    <img src={talesImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        E-MAIL
                                                        <img
                                                            src={MailBox}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Please reply to Eva’s Email Now</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle d-flex justify-content-center align-items-center' style={{ backgroundColor: '#E4C376' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(-42deg)`
                                                        }}
                                                    />
                                                    <img src={userTwoImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        APPROVE
                                                        <img
                                                            src={Stamp}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Time too approve the invoice</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle d-flex justify-content-center align-items-center' style={{ backgroundColor: '#D94396' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(-42deg)`
                                                        }}
                                                    />
                                                    <img src={userImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        E-MAGZINE
                                                        <img
                                                            src={userFourImg}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Emm just subscribed to your E-Magzine</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-around roadmap-main-adj-two'>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle-two d-flex justify-content-center align-items-center' style={{ backgroundColor: '#EB4647' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(132deg)`
                                                        }}
                                                    />
                                                    <img src={userImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p-two'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        <img
                                                            src={videoImg}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                        Meeting
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Meeting with Maya in 15 minutes</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle-two d-flex justify-content-center align-items-center' style={{ backgroundColor: '#D6EC69' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(132deg)`
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p-two'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        <img
                                                            src={agenda}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                        CONTACT
                                                    </h3>
                                                    <p style={{ width: '150px' }}>Congrats Dyna! Maya
                                                        Accepted & Signed the contract</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='roadmap-main-one d-flex '>
                                            <div className='d-flex roadmap-main-one-adj'>
                                                <div className='roadmap-main-circle-two d-flex justify-content-center align-items-center' style={{ backgroundColor: '#5092C8' }}>
                                                    <img src={btnImg}
                                                        style={{
                                                            width: "100%",
                                                            transform: `rotateZ(132deg)`
                                                        }}
                                                    />
                                                    <img src={userTwoImg}
                                                        style={{
                                                            width: "50%",
                                                            position: 'absolute',
                                                            left: '24px',
                                                            top: '27px'
                                                        }}
                                                    />
                                                </div>
                                                <div className='roadmap-main-p-two'>
                                                    <h3 style={{ fontSize: '18px' }}>
                                                        <img
                                                            src={clockImg}
                                                            style={{
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        />
                                                        LUNCH
                                                    </h3>
                                                    <p style={{ width: '150px' }}>It’s time to treat yourself with a healthy Lunch to celebrate your hardwork so far!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout >
    )
}

export default Home;