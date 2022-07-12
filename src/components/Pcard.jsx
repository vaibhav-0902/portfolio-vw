import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Pcard = (props) => {
    const {name, description, skills, github, linkedIn} = props;

  return (
    <div className="card">
        <h2>{name}</h2>
        <p>{description}</p>

        <div className="skill-container">
            {skills.map((skill) => (
                <span className="skills">{skill}</span>
            ))}
        </div>

        <div className="icon">
            <span className="project-link">
                <a href={github}>
                    <GitHubIcon sx={{ color: "black"}} />
                </a>
            </span>
            <span className="projec-link">
                <a href={linkedIn}>
                    <LinkedInIcon sx={{ color: "black"}} />
                </a>
            </span>
        </div>
    </div>
  )
}

export default Pcard;