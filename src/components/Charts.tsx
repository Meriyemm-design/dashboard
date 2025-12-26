import React from "react"
// import "./projects-styles.css"

export default function ProjectsTable() {
  const projects = [
    {
      id: 1,
      name: "Chakra Soft UI Version",
      icon: "🎨",
      image: "/placeholder.svg?height=60&width=60",
      budget: "$14,000",
      completion: 60,
    },
    {
      id: 2,
      name: "Add Progress Track",
      icon: "📊",
      image: "/placeholder.svg?height=60&width=60",
      budget: "$3,000",
      completion: 10,
    },
    {
      id: 3,
      name: "Fix Platform Errors",
      icon: "🔧",
      image: "/placeholder.svg?height=60&width=60",
      budget: "Not set",
      completion: 100,
    },
    {
      id: 4,
      name: "Launch our Mobile App",
      icon: "📱",
      image: "/placeholder.svg?height=60&width=60",
      budget: "$32,000",
      completion: 100,
    },
    {
      id: 5,
      name: "Add the New Pricing Page",
      icon: "💰",
      image: "/placeholder.svg?height=60&width=60",
      budget: "$400",
      completion: 25,
    },
    {
      id: 6,
      name: "Redesign New Online Shop",
      icon: "🛒",
      image: "/placeholder.svg?height=60&width=60",
      budget: "$7,600",
      completion: 40,
    },
  ]

  return (
    <div className="container">
      <div className="col-8">
        <div className="projects-card">
          {/* Header */}
          <div className="row header-row">
            <div className="col-12">
              <h2 className="projects-title">Projects</h2>
              <p className="projects-subtitle">30 done this month</p>
            </div>
          </div>

          {/* Table Header */}
          <div className="row table-header">
            <div className="col-5">
              <span className="header-text">PROJECTS</span>
            </div>
            <div className="col-2">
              <span className="header-text">IMAGE</span>
            </div>
            <div className="col-2">
              <span className="header-text">BUDGET</span>
            </div>
            <div className="col-3">
              <span className="header-text">COMPLETION</span>
            </div>
          </div>

          {/* Project Rows */}
          {projects.map((project) => (
            <div key={project.id} className="row project-row">
              <div className="col-5">
                <div className="project-info">
                  <span className="project-icon">{project.icon}</span>
                  <span className="project-name">{project.name}</span>
                </div>
              </div>
              <div className="col-2">
                <div className="image-container">
                  <img src={project.image || "/placeholder.svg"} alt={project.name} className="project-img" />
                </div>
              </div>
              <div className="col-2">
                <span className="budget-text">{project.budget}</span>
              </div>
              <div className="col-3">
                <div className="completion-container">
                  <span className="completion-text">{project.completion}%</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${project.completion}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



/* Card Styles
.projects-card {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%);
  border-radius: 16px;
  padding: 24px;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
} */

/* Header */
/* .header-row {
  margin-bottom: 24px;
} */

/* .projects-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 4px 0;
  color: white;
}

.projects-subtitle {
  font-size: 14px;
  color: #94a3b8;
  margin: 0;
  font-weight: 400;
} */

/* Table Header */
/* .table-header {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
}

.header-text {
  font-size: 12px;
  color: #94a3b8;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
} */

/* Project Rows */
/* .project-row {
  padding: 16px 0;
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
  min-height: 60px;
}

.project-row:last-child {
  border-bottom: none;
} */

/* Project Info */
/* .project-info {
  display: block;
  line-height: 1.4;
}

.project-icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  background: rgba(59, 130, 246, 0.2);
  border-radius: 8px;
  text-align: center;
  line-height: 32px;
  font-size: 16px;
  margin-right: 12px;
  vertical-align: middle;
}

.project-name {
  font-size: 16px;
  font-weight: 600;
  color: white;
  vertical-align: middle;
} */

/* Members */
/* .members-container {
  display: block;
  padding-top: 8px;
}

.member-avatar {
  display: inline-block;
  position: relative;
  vertical-align: top;
}

.avatar-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #1e40af;
  background: #3b82f6;
} */

/* Budget */
/* .budget-text {
  font-size: 16px;
  font-weight: 600;
  color: white;
  line-height: 60px;
} */

/* Completion */
/* .completion-container {
  padding-top: 8px;
}

.completion-text {
  font-size: 16px;
  font-weight: 600;
  color: white;
  display: block;
  margin-bottom: 8px;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background-color: rgba(148, 163, 184, 0.2);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #059669);
  border-radius: 3px;
  transition: width 0.3s ease;
} */

/* Responsive */
/* @media (max-width: 768px) {
  .col-2,
  .col-3,
  .col-4 {
    width: 100%;
    margin-bottom: 12px;
  }

  .project-row {
    padding: 12px 0;
  }

  .header-text {
    display: block;
    margin-bottom: 8px;
  }

  .budget-text,
  .completion-text {
    line-height: 1.4;
  }
} */
