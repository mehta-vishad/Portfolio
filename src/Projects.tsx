import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';

interface Project {
  title: string;
  overview: string;
  image: string;
  link: string;
  techStack: string[];
  technologiesUsed?: {
    frontend?: string;
    backend?: string;
    database?: string;
    apis?: string[];
    hosting?: string[];
  };
  keyFeatures: string[];
  challengesAndSolutions: string[];
  conclusion: string;
}

interface ProjectsProps {
  projects: Project[];
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ projects, darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    console.log('Opening modal for project:', project);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={`projects-container ${darkMode ? 'dark' : 'light'}`}>
      <h2 className="projects-title">Previous Work</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-tile project-tile-${index}`}
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => openModal(project)}
          >
            <div className="overlay">
              <div className="project-title">{project.title}</div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default Projects;
