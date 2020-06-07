// import React from 'react'

// const ProjectSummary = () => {
//   return (
//     <div className="card z-depth-0 project-summary">
//       <div className="card-content grey-text text-darken-3">
//         <span className="card-title ">Project title</span>
//         <p>press, See the content</p>
//         <p className="grey-text">3rd September, 2am</p>
//       </div>
//     </div>
//   )
// }

// export default ProjectSummary


import React from 'react'

const ProjectSummary = (props) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{props.project.title}</span>
        <span className="card-title ">{props.project.content}</span>
        <p>fuck the redux</p>
        <p className="grey-text">6rd June, 2am</p>
      </div>
    </div>
  )
}

export default ProjectSummary

