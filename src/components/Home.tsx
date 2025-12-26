import React from 'react'
// import { Flat, Heat, Nested } from '@alptugidin/react-circular-progress-bar'
import { MoreVertical } from "lucide-react"
import 'bootstrap/dist/css/bootstrap.min.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
// import { Chart } from 'chart.js'
import icon from '../Assets/images/rocket.webp'
import icon2 from '../Assets/images/quest_icon.webp'
import smiley from '../Assets/images/satisfaction.webp';
import img from '../Assets/images/referral.webp'
import lines from '../Assets/images/graph_lines.webp'
import xd from '../Assets/images/xd.webp'
import jira from '../Assets/images/jira.webp'
import spotify from '../Assets/images/spotify.webp'
import slack from '../Assets/images/slack_logo.webp'
import track from '../Assets/images/track.webp'
import invision from '../Assets/images/invision.webp'
import members from '../Assets/images/members.webp'
import user from '../Assets/images/avatar_1.webp'
import user2 from '../Assets/images/avatar_2.webp'
import user3 from '../Assets/images/avatar_3.webp'
import user4 from '../Assets/images/avatar_4.webp'
import user5 from '../Assets/images/avatar_5.webp'
import bell from '../Assets/images/bell.webp'
import css3 from '../Assets/images/logo_css3.webp'
import card from '../Assets/images/card.webp'
import cart from '../Assets/images/cart_icon.webp'
import bar from '../Assets/images/bar-lines.webp'


const Home = () => {
    const progressData = [
        { label: 'Chakra Soft UI Version', value: 60, image: xd, members: [user2, user, user3, user4, user5] },
        { label: 'Add Progress Track', value: 30, image: jira, members: [user3, user4, user5] },
        { label: 'Fix Platform Errors', value: 80, image: slack, members: [user4, user5] },
        { label: 'Launch our Mobile App', value: 45, image: spotify, members: [user, user4, user3] },
        { label: 'Add the New Pricing', value: 100, image: track, members: [user2, user4, user5, user3] },
        { label: 'Redesign Online Shop', value: 55, image: invision, members: [user2, user, user3, user4, user5] },
    ];

    const ordersData = [
        {
            title: "$2400 Design Changes",
            date: "22 Dec, 7:20 PM",
            img: bell,
        },
        {
            title: "New order #4219423",
            date: "21 DEC 11:21 PM",
            img: css3,
        },
        {
            title: "Server Payments for April",
            date: "21 DEC 9:28 PM",
            img: cart,
        },
        {
            title: "New card added for order #3210145",
            date: "20 DEC 3:52 PM",
            img: card,
        },
        {
            title: "Unlock packages for Development",
            date: "19 DEC 11:35 PM",
            img: bell,
        },
        {
            title: "New order #9851258",
            date: "18 DEC 4:41 PM",
            img: xd,
        },
    ];

    // const now = 60;
    return (
        <>
            <div className="custom-sidebar">
                {/* <!-- The sidebar --> */}
                <div className="sidebar">
                    <div className="heading">
                        <p className='head-title'> VISION UI FREE</p>
                    </div>

                    <div className="sidebar-items">
                        <a className="active" href="#home">
                            <span className='side-icons side-active-icons'>
                                <i className="ri-home-4-line"></i>
                            </span>
                            Dashboard
                        </a>
                    </div>
                    {/* <a className="active" href="#home">Dashboard</a> */}

                    <div className="sidebar-items">
                        <a href="#tables">
                            <span className='side-icons '>
                                <i className="ri-bar-chart-grouped-line"></i>
                            </span>
                            Tables
                        </a>
                    </div>

                    <div className="sidebar-items">
                        <a href="#billing">
                            <span className='side-icons'>
                                <i className="ri-bank-card-line"></i>
                            </span>
                            Billing
                        </a>
                    </div>

                    <div className="sidebar-items">
                        <a href="#rtl">
                            <span className='side-icons'>
                                <i className="ri-tools-fill"></i>
                            </span>
                            RTL
                        </a>
                    </div>

                    <div className="sec-heading">
                        <p className='sec-title'> Account Pages</p>
                    </div>

                    <div className="sidebar-items">
                        <a href="#rtl">
                            <span className='side-icons'>
                                <i className="ri-user-fill"></i>
                            </span>
                            Profile
                        </a>
                    </div>

                    <div className="sidebar-items">
                        <a href="#rtl">
                            <span className='side-icons'>
                                <i className="ri-file-3-line"></i>
                            </span>
                            Sign In
                        </a>
                    </div>

                    <div className="sidebar-items">
                        <a href="#rtl">
                            <span className='side-icons'>
                                <img src={icon} alt='rocket' style={{ width: '20px' }} />
                            </span>
                            Sign Up
                        </a>
                    </div>

                    <div className="lower-container">
                        <span >
                            <img src={icon2} alt='rocket' style={{ width: '40px', margin: '10px 0 0 0', cursor: 'pointer' }} />
                        </span>
                        <h6 className='sec-title'> NEED HELP?</h6>
                        <p className='sec-line'> Please check our docs </p>

                        <button className='doc-btn'> Documentation </button>
                    </div>
                </div>
            </div>

            {/* <!-- Page content --> */}
            <div className="main_content">
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="custom-breadcrumb" aria-label="breadcrumb">
                                    <ol className="right-breadcrumb">
                                        <li className="right-breadcrumb-item"><a href="#">Pages</a></li>
                                        <li className="right-breadcrumb-item active">Dashboard</li>
                                    </ol>
                                    <span className="breadcrumb-heading">Dashboard</span>
                                </div>

                            </div>

                            <div className="col-6">
                                <div className="right-side">
                                    <div className="search-box">
                                        <a href='#' className="input__field">
                                            <i className="ri-search-line right-icons"></i>
                                            <input type="email" placeholder="Type here..." />
                                        </a>
                                    </div>

                                    <div className="sign__in">
                                        <button style={{ border: 'none', backgroundColor: 'transparent' }}>
                                            <i className="ri-user-fill right-icons"></i>
                                            <span className="icon-btn" style={{ color: '#718096', margin: '0 0 0 5px' }}>Sign In</span>
                                        </button>
                                    </div>

                                    <a href='#' style={{ textDecoration: 'None' }}>
                                        <i className="ri-settings-3-fill right-icons"></i>
                                    </a>
                                    <a href='#' style={{ textDecoration: 'None' }}>
                                        <i className="ri-notification-4-fill right-icons"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="analytic-card main-margin">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="card-1 ">
                                    <div>
                                        <p className="analytics_mini_text main_mini_text">Today's Money</p>
                                        <h6 className="analytics_tagline">
                                            $53,000 <span style={{ fontSize: "0.8rem", color: 'green' }}>+55%</span>
                                        </h6>
                                    </div>
                                    <div className="icon-box ">
                                        <i className="ri-wallet-line " style={{ fontSize: "24px" }}></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="card-2 card-1 ">
                                    <div>
                                        <p className="analytics_mini_text  main_mini_text">Today's Users</p>
                                        <h6 className="analytics_tagline">
                                            2,300 <span style={{ fontSize: "0.8rem", color: 'green' }}>+5%</span>
                                        </h6>
                                    </div>
                                    <div className="icon-box ">
                                        <i className="ri-global-fill" style={{ fontSize: "24px" }}></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="card-3 card-1 ">
                                    <div>
                                        <p className="analytics_mini_text main_mini_text">New Clients</p>
                                        <h6 className="analytics_tagline">
                                            +3,052 <span style={{ fontSize: '0.8rem', color: 'red', fontWeight: 'medium' }}>-14%</span>
                                        </h6>
                                    </div>
                                    <div className="icon-box ">
                                        <i className="ri-file-text-line" style={{ fontSize: "24px" }}></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="card-4 card-1">
                                    <div>
                                        <p className="analytics_mini_text main_mini_text">Total Sales </p>
                                        <h6 className="analytics_tagline">
                                            $173,000 <span style={{ fontSize: "0.8rem", color: 'green' }}>+8%</span>
                                        </h6>
                                    </div>
                                    <div className="icon-box ">
                                        <i className="ri-shopping-cart-2-line" style={{ fontSize: "24px" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Big_Cards main-margin">
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <div className="text_box-1">
                                    <p className='main_mini_text'> Welcome back! </p>
                                    <h3 className='main-text'> Mark Johnson</h3>
                                    <p className='main-tagline'> Glad to see you again! Ask me anything.</p>

                                    <button className='card-btn' > Tap to record </button>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="text_box-2">
                                    <h3 className='rate'> Satisfaction Rate </h3>
                                    <p className='main_mini_text'> From all Projects </p>
                                    <div className='box-2-img'>
                                        {/* <img src={smiley} alt="" style={{ width: '40px' }} /> */}
                                    </div>

                                    {/* <Heat
                                                progress={72}
                                                showValue={false}
                                                revertBackground={true}
                                                sx={{
                                                    bgColor: '#ffffff',
                                                    barWidth: 7
                                                }}
                                            /> */}
                                    <div className='last_box'>
                                        <div className="likes-box">
                                            <span style={{ color: '#A0AEC0' }}>0%</span>
                                            <div className="likes-main">
                                                <h6 style={{ color: '#fff', fontSize: '22px', fontWeight: '700', margin: '0' }}>95%</h6>
                                                <p >Based on likes</p>
                                            </div>
                                            <span style={{ color: '#A0AEC0' }}>100%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card-box-3">
                                    <div className='title_icon'>
                                        <h3 className='rate'> Referral Tracking </h3>
                                        <i className="ri-more-2-fill"></i>
                                    </div>

                                    <div className="invited">
                                        <h6 style={{ fontSize: '14px', color: '#A0AEC0' }}>Invited </h6>
                                        <h6>145 People </h6>
                                    </div>
                                    <div className="invited bonus">
                                        <h6 style={{ fontSize: '14px', color: '#A0AEC0' }}>Bonus </h6>
                                        <h6> 1,456 </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Sales_Cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <div className="graph_card project_box">
                                    <div className="te_xt">
                                        <b className="salesOverview rate">Sales overview</b>
                                         <div className="project-info">
                                            <div className="project-num">
                                                {/* <i className="ri-check-line"></i> */}
                                                <b>(+5) more </b>
                                            </div>
                                            <div className="project-tagline main_mini_text">
                                                <span style={{ margin: '0 0 0 -5px' }}> in 2021 </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="graph">
                                        <div className="horizontal">
                                            <b className="oct">Oct</b>
                                            <b className="sep">Sep</b>
                                            <b className="aug">Aug</b>
                                            <b className="jul">Jul</b>
                                            <b className="jun">Jun</b>
                                            <b className="may">May</b>
                                            <b className="apr">Apr</b>
                                            <b className="mar">Mar</b>
                                            <b className="feb">Feb</b>
                                            <b className="jan">Jan</b>
                                        </div>
                                        <div className="vertical">
                                            <b className="b-1">0</b>
                                            <b className="b1">100</b>
                                            <b className="b2">200</b>
                                            <b className="b3">300</b>
                                            <b className="b4">400</b>
                                            <b className="b5">500</b>
                                            <div className="lines">
                                                <div className="bar_lines" />
                                                <div className="bar_lines linesItem" />
                                                <div className="bar_lines linesInner" />
                                                <div className="bar_lines line300" />
                                                <div className="bar_lines lines_2nd" />
                                                <div className="bar_lines lines_1st" />
                                            </div>
                                        </div>
                                        <img className="linesIcon" alt="" src={lines} style={{ width: '710px', height: '260px' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card-box-3 project_box">

                                    {/* <div className='title_icon'>
                                            <div>
                                                <img src={bar} alt="" style={{ width: '350px', height: '150px' }} />
                                            </div>
                                            <h3 className=''> Referral Tracking </h3>
                                            <i className="ri-more-2-fill"></i>
                                        </div> */}

                                    <div className="project-text">
                                        <h3 className='rate'> Active Users </h3>
                                        <div className="project-info">
                                            <div className="project-num">
                                                {/* <i className="ri-check-line"></i> */}
                                                <b>(+23)</b>
                                            </div>
                                            <div className="project-tagline main_mini_text">
                                                <span style={{ margin: '0 0 0 -5px' }}> than last week </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="invited">
                                            <h6 style={{ color: '#A0AEC0' }}>Invited </h6>
                                            <h6>145 People </h6>
                                        </div>
                                        <div className="invited bonus">
                                            <h6 style={{ color: '#A0AEC0' }}>Bonus </h6>
                                            <h6>145 People </h6>
                                        </div> */}

                                    <div className="user_cards">
                                        <div className="numbers">
                                            <div className="num_data">
                                                <p className='data_info'> 500 </p>
                                                <p className='data_info'> 400 </p>
                                                <p className='data_info'> 300 </p>
                                                <p className='data_info'> 200 </p>
                                                <p className='data_info'> 100 </p>
                                            </div>

                                            <div className="bar-container">
                                                <div className="bar" style={{ height: "80px", width: "3px" }}></div>
                                                <div className="bar" style={{ height: "60px", width: "4px" }}></div>
                                                <div className="bar" style={{ height: "100px", width: "3px" }}></div>
                                                <div className="bar" style={{ height: "70px", width: "3px" }}></div>
                                                <div className="bar" style={{ height: "90px", width: "4px" }}></div>
                                                <div className="bar" style={{ height: "50px", width: "3px" }}></div>
                                                <div className="bar" style={{ height: "110px", width: "3px" }}></div>
                                                <div className="bar" style={{ height: "90px", width: "4px" }}></div>
                                                <div className="bar" style={{ height: "70px", width: "3px" }}></div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="user-card">
                                                    <div className="main-info">
                                                        <div className="icon-wrapper">
                                                            <i className="ri-shopping-cart-2-line" ></i>
                                                        </div>
                                                        <span className="label main_mini_text">Sales</span>
                                                    </div>
                                                    <h4 className="user-count rate">32,984</h4>
                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar-fill progress-half-empty"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-4">
                                                <div className="user-card">
                                                    <div className="main-info">
                                                        <div className="icon-wrapper">
                                                            <i className="ri-wallet-line "></i>
                                                        </div>
                                                        <span className="label main_mini_text">Users</span>
                                                    </div>
                                                    <h4 className="user-count rate">2,42 m</h4>
                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar-fill progress_half"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-4">
                                                <div className="user-card">
                                                    <div className="main-info">
                                                        <div className="icon-wrapper">
                                                            <i className="ri-rocket-2-fill" style={{ display: 'inline-block', transform: 'rotate(45deg)' }}></i>
                                                        </div>
                                                        <span className="label main_mini_text">Clicks</span>
                                                    </div>
                                                    <h4 className="user-count rate">2,400 $</h4>
                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar-fill "></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-4">
                                                <div className="user-card">
                                                    <div className="main-info">
                                                        <div className="icon-wrapper">
                                                            <i className="ri-tools-fill"></i>
                                                        </div>
                                                        <span className="label main_mini_text">Items </span>
                                                    </div>
                                                    <h4 className="user-count rate">320</h4>
                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar-fill progress_fill"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="Content_Cards main-margin">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <div className="project_box">
                                    <div className="row">
                                        <div className="col-11">
                                            <div className="project-text">
                                                <h3 className='rate'> Projects </h3>
                                                <div className="project-info">
                                                    <div className="project-icon">
                                                        <i className="ri-check-line"></i>
                                                    </div>
                                                    <div className="project-tagline main_mini_text">
                                                        <span> 30 days report</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <div className="menu-icon">
                                                <i className="ri-more-2-line"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="list">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="list_title">
                                                    <p> Companies </p>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <div className="list_title">
                                                    <p> Members </p>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <div className="list_title">
                                                    <p> Budget  </p>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="list_title">
                                                    <p> Completion </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {progressData.map((item, index) => (
                                        <div className="list_2" key={index}>
                                            <div className="row">
                                                <div className="col-1">
                                                    <div className="membr_img">
                                                        <img src={item.image} alt="" style={{ width: '30px' }} />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="ui-title">
                                                        <p>{item.label}</p>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="members">
                                                        <div className="members-images">
                                                            {item.members.map((member, idx) => (
                                                                <div key={idx}>
                                                                    <img
                                                                        src={member}
                                                                        alt=""
                                                                        style={{ width: '25px', margin: idx % 2 === 1 ? '0 -10px' : '' }}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="bud_get ui-title">
                                                        <p> $14,000 </p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="pro_gress">
                                                        <ProgressBar now={item.value} label={`${item.value}%`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="orders-card project_box">
                                    <div className="col-12">
                                        <div className="project-text">
                                            <h3 className='rate'> Orders Review </h3>
                                            <div className="project-info">
                                                <div className="project-icon">
                                                    <i className="ri-check-line"></i>
                                                </div>
                                                <div className="project-tagline main_mini_text">
                                                    <span> (+30%) this month </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* LOOPING STARTS HERE */}
                                    {ordersData.map((item, index) => (
                                        <div className="design" key={index}>
                                            <div className="design-img">
                                                <img src={item.img} alt="icon" style={{ width: '20px' }} />
                                            </div>
                                            <div className="design-box">
                                                <div className="design_texbox">
                                                    <h6 className='design_title' style={{ margin: '0' }}>{item.title}</h6>
                                                    <p className='main_mini_text'>{item.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* LOOPING ENDS HERE */}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;
