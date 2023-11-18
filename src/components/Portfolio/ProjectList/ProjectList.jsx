import { v4 as uuidv4 } from 'uuid';

import './ProjectList.css'

export default function ProjectList(props) {
    const { filteredProjects } = props;
    console.log(filteredProjects)
  return (
    <li className='project-list'>
        {
            filteredProjects.map(project => {
                return <ul className = 'project' key = {uuidv4()}>
                    <img className='project-img' src = {project.img} alt = 'project img'/>
                </ul>
            })
        }
    </li>
  )
}
