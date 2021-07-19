import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import { Switch, Route } from "react-router-dom";

import ProjectDetailsPage from "./pages/ProjectDetailsPage"; // <== IMPORT

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/projects/:projectId" component={ProjectDetailsPage} />

        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
