import React, { useEffect, useState } from "react";
import worksData from "./worksData.js";
import Slider from "./Slider";
import Loader from "../loader/Loader";

const fetchFakeWorks = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(worksData);
    }, 1);
  });
};

const Works = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        setLoading(true);
        const data = await fetchFakeWorks();
        setWorks(data);
        // const { data } = await axios.get("/works");
      } catch (error) {
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWorks();
  }, []);

  return loading ? (
    <Loader isFullScreen={true} />
  ) : err ? (
    <h1>{err}</h1>
  ) : (
    <Slider works={works} />
  );
};

export default Works;
