import React from 'react'

const Skills = () => {
  return (
    <>
    <h1>Skills</h1>
      <div className="container skills" id='skills'>
        <div className="items">
          <div className="item"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={`/assets/skills/html.png`} />
          </div>
          <div className="item"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={`/assets/skills/css.png`} />
          </div>
          <div className="item"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={`/assets/skills/javascript.png`} />
          </div>
          <div className="item"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={`/assets/skills/mongodb.png`} />
          </div>
          <div className="item"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={`/assets/skills/node.png`} />
          </div>
          <div className="item"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={`/assets/skills/react.png`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;