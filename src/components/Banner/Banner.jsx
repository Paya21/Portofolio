import bannerImg from '../../asset/DSC03686_1.webp'
import './Banner.css'

function Banner() {

    return(
        <div className ="banner">
            <img src={bannerImg} alt = "bannière" />
            <p className="text-banner">Bonjour, <br/> je suis Clément Paya développeur web full-stack.<br/> 
            Spécialisé en React et NodeJs</p>
        </div>
    )
} 

export default Banner;