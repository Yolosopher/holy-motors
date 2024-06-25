import React from "react";

const Slide = ({ work }) => {
  return (
    <article className="work-slide" id="works">
      <div className="work-slide-content">
        <div className="text-content">
          <h2 className="section-strong-title">{work.title}</h2>
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: work.description,
            }}
          />
        </div>
        <div className="image">
          <img src={work.image} alt={work.title} />
        </div>
      </div>
    </article>
  );
};

export default Slide;
