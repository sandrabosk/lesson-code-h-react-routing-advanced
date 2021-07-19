import projectsData from "./../projects-data.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function ProjectDetailsPage(props) {
  console.log(props)
  const [foundProject, setFoundProject] = useState(null);

  // This effect depends on `props.match.params.projectId`.
  // It will run on initial render, and every time
  // `props.match.params.projectId` updates.
  useEffect(() => {
    const project = projectsData.find((projectObj) => {
      return projectObj._id === props.match.params.projectId;
    })

    if (project) setFoundProject(project);
    
  }, [props.match.params.projectId]);


  return (
    <div>
      <h1>Project Details</h1>
      {!foundProject && <h3>Project not found!</h3>}

      {foundProject && (
        <>
          <h2>{foundProject.name}</h2>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p>{foundProject.description}</p>
          <Link to="/projects">Back</Link>
        </>
      )}
    </div>
  );
}

export default ProjectDetailsPage;
