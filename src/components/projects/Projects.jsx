import React, { useEffect, useState } from "react";
import projectsJSON from "./projectsData.js";
import Slider from "./Slider";
import Loader from "../loader/Loader";

const fetchFakeProjects = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(projectsJSON);
    }, 1);
  });
};

const Projects = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchFakeProjects();
        setProjects(data);
        // const { data } = await axios.get("/projects");
      } catch (error) {
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return loading ? (
    <Loader isFullScreen={true} />
  ) : err ? (
    <h1>{err}</h1>
  ) : (
    <Slider projects={projects} />
  );
};

export default Projects;
