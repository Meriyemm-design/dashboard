import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css'

import xd from '../Assets/images/xd.webp'
import members from '../Assets/images/members.webp'

const projects = [
  {
    name: 'Chakra Soft UI Version',
    icon: xd,
    budget: '$14,000',
    members: members,
    progress: 60
  },
  {
    name: 'Add New Landing Page',
    icon: xd,
    budget: '$6,000',
    members: members,
    progress: 100
  },
  {
    name: 'Redesign Dashboard',
    icon: xd,
    budget: '$9,500',
    members: members,
    progress: 50
  },
  {
    name: 'Integrate APIs',
    icon: xd,
    budget: '$4,000',
    members: members,
    progress: 5
  },
]

const Home = () => {
  return (
    <div className="Content_Cards main-margin">
      <div className="container">
        <div className="row">
          {/* LEFT SIDE */}
          <div className="col-8">
            <div className="project_box">
              <div className="row">
                <div className="col-11">
                  <div className="project-text">
                    <h3> Projects </h3>
                    <i className="ri-check-line"></i>
                    <span> 30 days report</span>
                  </div>
                </div>
                <div className="col-1">
                  <div className="menu-icon">
                    <i className="ri-more-2-line"></i>
                  </div>
                </div>
              </div>

              {/* HEADER */}
              <div className="list">
                <div className="row">
                  <div className="col-4">
                    <div className="list_title">
                      <p> Companies </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="list_title">
                      <p> Members </p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="list_title">
                      <p> Budget </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="list_title">
                      <p> Completion </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DYNAMIC LIST ROWS */}
              {projects.map((project, index) => (
                <div className="list_2" key={index}>
                  <div className="row align-items-center">
                    <div className="col-1">
                      <img src={project.icon} alt="icon" style={{ width: '30px' }} />
                    </div>
                    <div className="col-3">
                      <div className="ui-title">
                        <p>{project.name}</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="members">
                        <img src={project.members} alt="members" style={{ width: '100px' }} />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="bud_get">
                        <p>{project.budget}</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="pro_gress">
                        <ProgressBar now={project.progress} label={`${project.progress}%`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* You can keep your right-side referral card here */}
        </div>
      </div>
    </div>
  )
}

export default Home
