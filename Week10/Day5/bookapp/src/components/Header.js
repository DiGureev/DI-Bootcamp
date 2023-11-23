import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    return (
        <header>
            <h1><FontAwesomeIcon icon={faBook} /> Book Cards</h1>
        </header>
    )
}

export default Header