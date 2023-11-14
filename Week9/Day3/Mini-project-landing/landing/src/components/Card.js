import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faGlobe, faLandmark} from '@fortawesome/free-solid-svg-icons'

const icons = [faBuilding, faGlobe, faLandmark]

console.log(icons[0])

const Card = (props) => {
    console.log(props)
    const {header, text, color, indx} = props
    return (
        <div style={{
                display: 'flex',
                backgroundColor: `${color}`,
                flexWrap: 'wrap',
            }}>
            <div className='icon'><FontAwesomeIcon icon={icons[indx]} /></div>
            <div className='textBlock'>
            <h2>{header}</h2>
            <p>{text}</p>
            </div>
        </div>
    )
}

export default Card