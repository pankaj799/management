import React, { useEffect, useState } from 'react';
import { Layout, Menu, Modal } from 'antd'
import NavItems from "../../constants/NavItems";
import { useHistory, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const { Sider } = Layout;

const SidebarOne = () => {

  const history = useNavigate()
  const location = useLocation()
  const [page, setPage] = useState('Home')
  const [college_visible, setCollegeVisible] = useState(false);

  const adminData = useSelector((state) => state.auth.user)

  useEffect(() => {
    activeNavigation(location.pathname)
  }, [page, { ...location }])

  const activeNavigation = (path) => {
    switch (path) {
      case "/home":
        setPage('Home')
        break;
      case "/profile":
        setPage('Profile')
        break;
      case "/blogs":
        setPage('Blogs')
        break;
      case "/store":
        setPage('MEP Store')
        break;
      case "/calendar":
        setPage('Calendar')
        break;
      case "/files":
        setPage('Files')
        break;
      case "/knowledge":
        setPage('Knowledge')
        break;
      case "/faq":
        setPage('FAQ')
        break;
      case "/grades":
        setPage('Grades')
        break;
      case "/chat":
        setPage('Chat')
        break;
      case "/college_applications":
        setPage('College Applications')
        break;
      case "/mailbox":
        setPage('Mailbox')
        break;
      case "/academic_support":
        setPage('Academic Support')
        break;
      case "/notifications":
        setPage('Notifications')
        break;
      default:
        setPage('Home')
    }
  }

  const handleCollegeCancel = () => {
    setCollegeVisible(false);
    history('/home')
  };

  const onCollegeApplication = () => {
    setCollegeVisible(true)
  }

  return (
    <Sider
      style={{
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        background: "#e2f1fc"
      }}
      breakpoint="md"
      width="250"
      collapsedWidth="75"
      theme='light'>
      {/* <div className="logo text-center d-flex justify-content-center align-items-center"
        style={{
          padding: '14px',
          background: '#cddde8',
          height: '100px'
        }}
      > */}
        {/* <div class="navbar-header " data-logobg="skin6">
          <a class="navbar-brand" href="dashboard.html">
            <b class="img-fluid">
              <img src={appBlueLogo} alt="homepage" style={{ width: '50%', }} />
            </b>
          </a>
          <a class="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
            href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
        </div>
      </div>
      <Modal className="collegeAppModal"
        visible={college_visible}
        title="College Applications"
        onCancel={handleCollegeCancel}
        okButtonProps={{ style: { display: 'none' } }}
        footer={null}
      >
        <h5 className="text-center mt-5 mb-5" style={{ color: "#fff" }}>Coming Soon !!!</h5>
      </Modal>
      <Menu
        className="mt-3"
        style={{ background: "#EDF3F7" }}
        selectedKeys={[page]}
        selectable={true}
        mode="inline">
        {NavItems.map((menuItem) =>
          <>
            <Menu.Item
              key={menuItem.name}
              icon={menuItem.icon}
              style={{
                listStyleType: 'none',
                // paddingTop: '1.5rem',
                // paddingBottom: '1.5rem',
                paddingLeft: '30%',
                display: `${!menuItem.hide && window.screen.availWidth < 700 ? "" : menuItem.hide ? "" : "none"}`,
                // height: '60px',
                color: '#346E9B'
              }}
              onClick={() => {
                menuItem.link == "/college_applications" ? onCollegeApplication() : ""
                setPage(menuItem.link)
                menuItem.ancor && menuItem.ancor != "" ? window.open(`${menuItem.ancor}`, "_blank") :  history(menuItem.link)
                menuItem.loadDirect && menuItem.loadDirect != "" ? window.location.reload() : ""
              }}>
              {menuItem.name}
            </Menu.Item>
          </>
        )}
      </Menu> */}
    </Sider >
  )
}
export default SidebarOne;