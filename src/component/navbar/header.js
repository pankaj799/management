import React, { useState, useEffect } from "react";
import { Layout } from 'antd';
import { HashRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { img_url, TOKEN_VAR } from "../../constants/const"
import { logOut, getUserDetail, notifyApi } from "../../actions/auth"

const Header = () => {

    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();
    const handleLogOutClick = async () => {
        dispatch(logOut())
    }

    let user_data = useSelector(state => state.auth.user_data)
    let notify_data = useSelector(state => state.auth.notify_data)

    const [userHeaderData, setUserHeaderData] = useState(null)
    const [notifyModel, setNotifyModel] = useState(false)
    const [readNotifyData, setReadNotifyData] = useState([]);
    const [notReadNotifyData, setNotReadNotifyData] = useState([]);
    const [count, setCount] = useState(0);

    let openNotify = () => {
        setNotifyModel(true)
    }

    function myNotifications() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // useEffect(() => {
    //     let userToken = localStorage.getItem(TOKEN_VAR);
    //     if (userToken == "" || userToken == null || userToken == undefined) {
    //         dispatch(logOut())
    //     }
    //     else {
    //         dispatch(getUserDetail(userToken))
    //     }

    //     if (user_data != null && user_data != "") {
    //         setUserHeaderData(user_data);
    //     }

    // }, [user_data?.f_name, user_data?.state, user_data?.phone, user_data?.school_name, user_data?.class_of, user_data?.profile_pic])

    // useEffect(() => {
    //     if (!notify_data) {
    //         dispatch(notifyApi())
    //     }
    // }, [notify_data])

    // useEffect(() => {
    //     if (notify_data) {
    //         let newReadArr = []
    //         let newNotReadArr = []
    //         notify_data.map(data => {
    //             if (data.is_read == 0) {
    //                 newNotReadArr.push(data)
    //             } else {
    //                 newReadArr.push(data)
    //             }
    //         })
    //         setNotReadNotifyData(newNotReadArr)
    //         setReadNotifyData(newReadArr)
    //     }
    // }, [notify_data])

    var counter = 0;

    

    return (
        <>
            <div className="topHeaderBar" style={{height : '100px', backgroundColor: ''}}>
                <div className="row  m-0 p-0">

                    {/* <div className="col-md-3 left_section" style={{ paddingTop: "18px" }}>
                        <img className="nav_bar_logo" src={appBlueLogo} onClick={()=>history('/home')}/>
                    </div> */}
                    {/* <div className="col-md-12 right_section" style={{ paddingTop: "9px" }}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="">

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="">
                                        <Link to={"/profile"}>
                                            <img className="headerUserImg" src={user_data?.profile_pic ? img_url + user_data?.profile_pic : placeholderImg} />
                                        </Link>
                                    </div>
                                    <div className="">
                                        <ul className="headerUserDeatilUl">
                                            <Link to={"/profile"}><li className="headerUserDeatilName">{userHeaderData?.f_name + " " + userHeaderData?.l_name}</li></Link>
                                            <Link to={"/profile"}><li className="headerUserDeatilSchool">{userHeaderData?.role == "student" ? userHeaderData?.school_name : userHeaderData?.state}</li></Link>
                                            <Link to={"/profile"}><li className="headerUserDeatilClass">{userHeaderData?.role == "student" ? userHeaderData?.class_of : userHeaderData?.phone}</li></Link>
                                            <Link to={"/profile"}><li className="" style={{ fontWeight: '300', fontSize: '10px' }}>Edit Profile </li></Link>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                            <div className="p-0 mb-2 text-end d-sm-none d-md-block d-none d-sm-block">
                                <Link to={"/academic_support"}>
                                    <button className='btn btn-danger rounded-pill mt-2 ps-3 pe-3'>Request Academic Support</button>
                                </Link>
                            </div>
                            <div className="mb-2 text-center d-sm-none d-md-block d-none d-sm-block">
                                <Link to={"/notifications"}>
                                    <i className="fas fa-bell me-2 mt-1 me-4 fab" style={{ fontSize: "25px", color: "#63a8c9", position: 'relative' }}>
                                        <div className="d-flex justify-content-center align-items-center" style={{ position: 'absolute', top: '14px', right: '-10px' }}>
                                            <p style={{ background: 'red', width: '1rem', height: '1rem', fontSize: '10px', color: 'white', borderRadius: '50%', paddingTop: '4px' }}>{notReadNotifyData?.length}</p>
                                        </div>
                                    </i>
                                </Link>
                            </div>
                            <div className="mb-2 text-center pt-2">
                                <button onClick={() => handleLogOutClick()} className='btn btn-light btn-outline-info rounded-pill ps-3 pe-3'>Logout</button>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )
}
export default Header;