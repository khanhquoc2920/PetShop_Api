import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebar-logo">
        <img src="./images/Petslogo.png" alt="Comapny logo"/>
        <div className="sidebar-close" id="sidebar-close">
            <i className='bx bx-left-arrow-alt'></i>
        </div>
    </div>
    <div className="sidebar-user">
        <div className="sidebar-user-info">
            <img src="./images/tommi.jpg" alt="User picture" className="profile-image"/>
            <div className="sidebar-user-name">
                UserName
            </div>
        </div>
        <button className="btn btn-outline">
            <i className='bx bx-log-out bx-flip-horizontal'></i>
        </button>
    </div>

    <ul className="sidebar-menu">
        <li>
            <a href="/" className="">
                <i className='bx bx-home'></i>
                <span>TRANG CHỦ</span>
            </a>
        </li>
        <li>
            <a href="/product">
                <i className='bx bx-shopping-bag'></i>
                <span>QUẢN LÍ MẶT HÀNG</span>
            </a>
        </li>
        <li>
            <a href="/addProduct">
                <i className='bx bx-shopping-bag'></i>
                <span>THÊM SẢN PHẨM</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i className='bx bx-chart'></i>
                <span>DANH MUC</span>
            </a>
        </li>
        <li className="sidebar-submenu">
            <a href="#" className="sidebar-menu-dropdown">
                <i className='bx bx-user-circle'></i>
                <span>TÀI KHOẢN</span>
                <div className="dropdown-icon"></div>
            </a>
            <ul className="sidebar-menu sidebar-menu-dropdown-content">
                <li>
                    <a href="#">
                        Hồ sơ cá nhân
                    </a>
                </li>
                <li>
                    <a href="#">
                        Cài đặt tài khoản
                    </a>
                </li>
                <li>
                    <a href="#">
                        Kết nối khác
                    </a>
                </li>
            </ul>
        </li>
        <li className="sidebar-submenu">
            <a href="#" className="sidebar-menu-dropdown">
                <i className='bx bx-category'></i>
                <span>project</span>
                <div className="dropdown-icon"></div>
            </a>
            <ul className="sidebar-menu sidebar-menu-dropdown-content">
                <li>
                    <a href="#">
                        list
                    </a>
                </li>
                <li>
                    <a href="#">
                        add project
                    </a>
                </li>
            </ul>
        </li>
        <li className="sidebar-submenu">
            <a href="#" className="sidebar-menu-dropdown">
                <i className='bx bx-category'></i>
                <span>e-commerce</span>
                <div className="dropdown-icon"></div>
            </a>
            <ul className="sidebar-menu sidebar-menu-dropdown-content">
                <li>
                    <a href="#">
                        list product
                    </a>
                </li>
                <li>
                    <a href="#">
                        add product
                    </a>
                </li>
                <li>
                    <a href="#">
                        orders
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">
                <i className='bx bx-mail-send'></i>
                <span>EMAIL</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i className='bx bx-chat'></i>
                <span>HỖ TRỢ</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i className='bx bx-calendar'></i>
                <span>LỊCH</span>
            </a>
        </li>
        <li className="sidebar-submenu">
            <a href="#" className="sidebar-menu-dropdown">
                <i className='bx bx-cog'></i>
                <span>CÀI ĐẶT</span>
                <div className="dropdown-icon"></div>
            </a>
            <ul className="sidebar-menu sidebar-menu-dropdown-content">
                <li>
                    <a href="#" className="darkmode-toggle" id="darkmode-toggle">
                        chế độ tối
                        <span className="darkmode-switch"></span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
   
</div>
  )
}
export default Sidebar