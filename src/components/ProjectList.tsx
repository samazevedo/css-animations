import { projectsData } from '../projectsdata'

export const ProjectList = () => {
    return (
        <div className='project-list'>
            <ul>
                {projectsData.map((project) => {
                    const { title, id, link } = project
                    return (
                        <li key={id}>
                            <a href={link}>{title}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
