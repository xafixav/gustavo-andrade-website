import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { getRepositories, getRepository } from '../components/services/fetchAPI';
import styles from '../styles/portifolio.module.css';


export default function Portifolio() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    getRepositories('xafixav').then((response) => setRepositories(response));
  }, []);

  const consoleReadme = async (repoName) => {
    const readme = await getRepository(repoName);
    console.log(readme);
  };

  const generateProjects = () => {    
    return repositories.map((project, index) => (
      <div key={index} className={`${styles.Projects} col-sm-4`}>
        <h2>{project.name}</h2>
        {project?.description ? <h4>{project.description}</h4> : null}
        <a href={project.svn_url}>Ir para o Repositorio</a>
        <button onClick={() => consoleReadme(project.name)}>Console.log(Project Readme)</button>
      </div>
    ));
  };  

  // https://raw.githubusercontent.com/xafixav/trybe-futebol-clube/main/README.md

  return (
    <div className='container'>
      {Header()}
      <div className='row'>
        {repositories.length !== 0 ? generateProjects() : null}
      </div>
    </div>
  );
}