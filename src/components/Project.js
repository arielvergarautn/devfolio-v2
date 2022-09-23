//Route
import { useNavigate } from 'react-router-dom'
//Components
import ProjectDetails from './ProjectDetails';

const Project = ({ name, description, website, picture, screenshots, github, isSelected }) => {

    let navigate = useNavigate();
    
    const onClickHandler = (e) => {
        navigate(`/work/${name}`)
    }

    return (
        <>
            <div className='project' onClick={onClickHandler}>
                <h1>{name}</h1>
                <img src={picture} alt="foto" />
            </div>
            {
                isSelected &&
                <ProjectDetails
                    name={name}
                    description={description}
                    website={website}
                    picture={picture}
                    github={github}
                    screenshots={screenshots} />
            }
        </>
    )
}

export default Project
