import React from "react";

const Slide = ({ project }) => {
  return (
    <article className="container project-slide">
      <div className="text-content">
        <h3>{project.title}</h3>
        <div
          className="description"
          dangerouslySetInnerHTML={{
            __html: project.description,
          }}
        />
      </div>
      <div className="image-and-name">
        <img src={project.image} alt={project.name} />
        <h2 className="section-strong-title">{project.name}</h2>
      </div>
    </article>
  );
};

export default Slide;
