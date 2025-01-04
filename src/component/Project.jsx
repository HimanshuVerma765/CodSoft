import React from 'react';

const projects = [
  {
    title: "Calculator",
    image: '/assets/skills/calc.png',
    link: "https://calc765.netlify.app/"
  },
  {
    title: "Image Search",
    image: '/assets/skills/imageSearch.png',
    link: "https://imagehunt765.netlify.app/"
  },
  {
    title: "Spotify Clone",
    image: '/assets/skills/spclone.png',
    link: "https://spotify765.netlify.app/"
  }
];

const ProjectCard = ({ image, link, title }) => (
  <div
    className="card bg-dark text-light project-card"
    data-aos="flip-right"
    data-aos-duration="1000"
  >
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="img d-flex align-items-center justify-content-center p-3">
        <img src={image} className="card-img-top" alt={title} />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
      </div>
    </a>
  </div>
);

const Project = () => {
  return (
    <div className="container projects my-3" id="projects">
      <h1>Projects</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {projects.map((project, index) => (
          <div key={index} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;