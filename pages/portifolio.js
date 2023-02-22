import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { getRepositories } from '../components/services/fetchAPI';

export default function Portifolio() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    getRepositories('xafixav').then((response) => setRepositories(response));
  }, []);

  const generateProjects = () => {    
    return repositories.map((project, index) => (
      <div key={index}>
        <h2>{project.name}</h2>
        {project?.description ? <h4>{project.description}</h4> : null}
        <a href={project.svn_url}>Ir para o Repositorio</a>
      </div>
    ));
  };  

  return (
    <div> 
      {Header()}
      {repositories.length !== 0 ? generateProjects() : null}
    </div>
  );
}