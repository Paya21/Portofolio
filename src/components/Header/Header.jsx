import './Header.css';
import Banner from '../Banner/Banner';
import burger from '../../asset/threelines.webp';
import { useState } from 'react';

function Header() {

    const [open, setOpen] = useState(false)

    function toggle(){
        if(open === true){
            document.querySelector('.navigation').classList.remove('mobile-menu')
        } else {
            document.querySelector('.navigation').classList.add('mobile-menu')
        }
        setOpen(!open)
    }

    return (
        <div className="global">
            <div className="top-header">
                <h1 className="titre">Clément Paya</h1>
                <nav className="navigation">
                    <ul className="navbar">
                        <li><a href="#about">A propos</a></li>
                        <li><a href="#competence">Compétences</a></li>
                        <li><a href="#work">Travaux</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <img onClick={toggle} className='burger-icon' src={burger} alt='burger-icon'/>
            </div>
            
                <Banner />
            
        </div>
    )
}

export default Header;