import React from 'react';

const ProjectList = ({ projects }) => (
  <div className="project-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', margin: '60px' }}>
    {projects.map((project, index) => (
      <div key={index} className="project-item">
        <img src={project.img} alt={project.category} />
        <p>{project.category}</p>
      </div>
    ))}
  </div>
);

export default ProjectList;
