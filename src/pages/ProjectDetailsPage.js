import projectsData from "./../projects-data.json";
import { Link } from "react-router-dom";            // <== IMPORT

function ProjectDetailsPage(props) {
  // Method .find() returns the first found matching element,
  // or `null` if no matching element was found.
  const foundProject = projectsData.find((projectObj) => {        //  <== ADD
    return projectObj._id === props.match.params.projectId;
  });

  return (
    <div>
      <h1>Project Details</h1>
      {!foundProject && <h3>Project not found!</h3>} {/* <== ADD  */}

      {/*  ADD 👇 */}
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
