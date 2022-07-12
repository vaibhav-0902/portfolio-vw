import React from 'react';
import Pcard from '../components/Pcard';

const projectData = [
    {
        name: "Digital Clock",
        description: "Digital Clock made with HTML, CSS, and JavaScript that shows current date and time.",
        skills: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/vaibhav-0902/DateTime-JavaScript",
        linkedIn: "https://www.linkedin.com/in/vaibhav-waghela-017292213"
    },
    {
        name: "Analog Clock-Dual Theme",
        description: "Analog Clock made with HTML, CSS, and JavaScript that shows current time. Which has Dark and Light mode.",
        skills: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/vaibhav-0902/Dual-AnalogClock",
        linkedIn: "https://www.linkedin.com/in/vaibhav-waghela-017292213"
    },
    {
        name: "Simple Calculator",
        description: "Simple Calculator made with HTML, CSS, and JavaScript that allows you to do some basic mathematical calculations.",
        skills: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/vaibhav-0902/JS-Calculator",
        linkedIn: "https://www.linkedin.com/in/vaibhav-waghela-017292213"
    }
]


const Project = () => {
  return (
    <div className="project-container">
      {projectData.map((item, index) => {
        return (
          <Pcard 
            key={index}
            name={item.name}
            description={item.description}
            skills={item.skills}
            github={item.github}
            linkedIn={item.linkedIn}
          />
        );
      })}
    </div>
  )
}


export default Project;