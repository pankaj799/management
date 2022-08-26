import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom'
// import { userDetails } from '../actions/auth'

// import { Header, Sidebar, Footer } from '../components'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Tabs, Modal, Menu } from 'antd';
import { Header, Footer, SidebarOne } from '../component/index'
import Home from './home'
import Post from './post'
import Otherpost from './Otherpost'
const { Sider, Content } = Layout;

const Main = () => {

    let [collapsed , setCollapsed] = useState(false)

    return (
        // <Layout style={{}}>
        <>
            {/* <Sider className='center_section' style={{ background: '#edf3f7 !important' }} trigger={null} collapsible collapsed={collapsed}> */}
            <Router>
                {/* <SidebarOne /> */}
                {/* </Sider> */}
                {/* <Layout style={{ marginBottom: '1rem' }} className="site-layout"> */}
                    {/* <Header className="site-layout-background" /> */}
                    {/* <Content className='d-flex flex-wrap p-4 align_main_home' style={{ background: '#F5F8F9' }} onClick={() => setCollapsed(!collapsed)}> */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            {/* <Route path="/" element={<Post />} /> */}
                            <Route path="/post" element={<Post />} />
                            <Route path="/other-post" element={<Otherpost />} />
                            {/* <Route path="/home" element={<Home />} />
                            <Route path="/home" element={<Home />} /> */}
                        </Routes>
                    {/* </Content> */}
                {/* </Layout> */}
            </Router>
            {/* <Footer /> */}
            </>
        // </Layout>
    );
}
export default Main;