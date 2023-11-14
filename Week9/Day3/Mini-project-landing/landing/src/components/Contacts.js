import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faEnvelope, faMobile} from '@fortawesome/free-solid-svg-icons'

const Contacts = () => {
    return (
        <div className='ContactContainer'>
            <h2>Contact Us</h2>
            <div className='contacts'>
                <div className='iconsText'>
                    <p>Contact us and we will get back to you within 24 hours.</p>
                    <div className='mini-i'><FontAwesomeIcon icon={faLocationDot}/><p>Company Name</p></div>
                    <div className='mini-i'><FontAwesomeIcon icon={faEnvelope} /><p>+256 778 800 900</p></div>
                    <div className='mini-i'><FontAwesomeIcon icon={faMobile} /><p>company.gmail.com</p></div>
                </div>
                <div className='form'>
                    <form>
                        <p>Contact</p>
                        <input type='email' placeholder='email address'></input>
                        <textarea rows="6"/>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts