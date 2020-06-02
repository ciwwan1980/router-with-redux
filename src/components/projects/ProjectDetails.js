import React from 'react'

const ProjectDetails = (props) => {
 console.log(props, "props from router")
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title -</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat sed quae tenetur, animi tempore aspernatur a natus beatae rem incidunt officiis ullam qui exercitationem. Quae perspiciatis tempora ullam magni.</div>
          <div>2august, 1am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
