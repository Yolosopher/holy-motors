import React, { useEffect, useState } from "react";
import "./story.style.scss";
import Loader from "../loader/Loader";
import storyData from "./storyData";

const fetchFakeStory = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(storyData);
    }, 1);
  });
};
const Story = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);
  const [story, setStory] = useState({});

  useEffect(() => {
    const fetchStory = async () => {
      try {
        setLoading(true);
        const data = await fetchFakeStory();

        setStory(data);
        // const { data } = await axios.get("/story");
      } catch (error) {
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStory();
  }, []);

  return loading ? (
    <Loader isFullScreen={true} />
  ) : err ? (
    <h1>{err}</h1>
  ) : (
    <article
      className="story-article"
      id="story"
      style={{
        backgroundImage: `url(${story.bgImage})`,
      }}
    >
      <div className="top-space"></div>
      <div className="story-container">
        <div className="story-content ">
          <div className="story-content-headings">
            <h1>{story.title}</h1>
            <p className="sub-info">{story.subInfo}</p>
            <p className="short-description">{story.shortDescription}</p>
          </div>
          <div
            className="story-content-description"
            dangerouslySetInnerHTML={{
              __html: story.longDescription,
            }}
          />
        </div>
        <div className="story-partners">
          {story.partnerImages.map((partner, index) => (
            <img key={index} src={partner} alt="partner" />
          ))}
        </div>
      </div>
      <div className="bottom-space"></div>
    </article>
  );
};

export default Story;
