import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return(
        <div className="global-footer" id="contact">
            <div className='contact'>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>email: clementpaya21@gmail.com</p>
                <FontAwesomeIcon icon={faPhone} />
                <p>Telephone: 06.09.68.24.35</p>
            </div>
            <p>Développez par Clément Paya</p>
        </div>
    )
}

export default Footer;