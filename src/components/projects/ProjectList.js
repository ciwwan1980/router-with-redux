// import React from 'react'
// import ProjectSummary from './ProjectSummary'

// const ProjectList = () => {
//   return (
//     <div className="card z-depth-0 project-summary">
//       <ProjectSummary />
//       <ProjectSummary />
//       <ProjectSummary />
//       <ProjectSummary />
//     </div>
//   )
// }

// export default ProjectList



import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = (props) => {
  return (
    <div className="project-list section">
      { props.projects && props.projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}  
    </div>
  )
}

export default ProjectList
