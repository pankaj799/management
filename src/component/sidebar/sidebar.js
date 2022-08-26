import React,{ useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Modal, Menu } from 'antd'
import { useSelector } from 'react-redux';
import {
    LinkOutlined,
    PlayCircleOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
} from '@ant-design/icons';

const Sidebar = () => {
    const dispatch = useDispatch();

    const [userType, setUserType] = useState(null)
    let user_data = useSelector(state => state.auth.user_data) 


    const location      = useLocation();
    const locationRoute = location.pathname;

    const [college_visible, setCollegeVisible] = useState(false);
    const onCollegeApplication = ()=>{
        setCollegeVisible(true)
    }
    const handleCollegeCancel = () => {
        setCollegeVisible(false);
    };


    useEffect(() => {
        if(user_data?.role){
            setUserType(user_data?.role);
        } 
	}, [user_data])

   

    return (
        <>
            <Modal className="collegeAppModal"
                visible={college_visible}
                title="College Application"
                onCancel={handleCollegeCancel}
                okButtonProps={{ style: { display: 'none' } }}
                footer={null}
            >
                <h5 className="text-center" style={{color:"#fff"}}>Coming Soon !!!</h5>
            </Modal>
            <div className="left_side">
                <ul className="">
                    <li><Link className={ locationRoute == '/home' ? ' active ':' ' } to={"/home"}>Home</Link></li>
                    <li><Link className={ locationRoute == '/chat' ? ' active ':' ' } to={"/chat"}>Chats</Link></li>
                    <li><Link className={ locationRoute == '/calendar' ? ' active ':' ' } to={"/calendar"}>Calendar</Link></li>
                    <li><Link className={ locationRoute == '/files' ? ' active ':' ' } to={"/files"}>Files</Link></li>
                    <li><a target="_blank" href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin">Mailbox</a></li>
                    <li><Link className={ locationRoute == '/knowledge' ? ' active ':' ' } to={"/knowledge"}>Knowledge Bar</Link></li>
                    <li><Link className={ locationRoute == '/blogs' ? ' active ':' ' } to={"/blogs"}>Blogs</Link></li>
                    <li className={userType != "student" ? " hideSection " : "" }><Link className={ locationRoute == '/grades' ? ' active ':' ' } to={"/grades"}>Grades</Link></li>
                    <li onClick={() => onCollegeApplication()}><a href="Javascript:void(0)">College Applications</a></li>
                    <li><Link className={ locationRoute == '/store' ? ' active ':' ' } to={"/store"}>MEP Store</Link></li>
                    <li><Link className={ locationRoute == '/faq' ? ' active ':' ' } to={"/faq"}>FAQ</Link></li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar;