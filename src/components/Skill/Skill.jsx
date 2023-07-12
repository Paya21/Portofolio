import './Skill.css'
import Card from '../Card/Card';
import pdf from "../../asset/clement PAya-3.pdf"

function Skill() {
    return (
        <div className='global-skill' id="competence">
            <div className='card-skill'>
            <Card titre={"Frontend"} texte={"HTML JS CSS React"} texte1={"Maitrise de figma pour l'intégration des visuels, maîtrise du dynamisme grâce à Javascript, connaissance en performance et accessibilité, ainsi que du responsive"} />
            <Card titre={"Backend"} texte={"NodeJS Express MongoDb SQL"} texte1={"Développement d'API selon la méthode REST, maitrise de node package manager, de multer avec éco-réception des fichiers, notions de cryptage et autres notions de sécurité(Token etc...)"}/>
            <Card titre={"Soft-Skills"} texte={"Curieux Réactif Sociable Organisé"} texte1={"Membre actif dans le communauté du parkour, participation aux événements sportif liés a ce sport et présidence d'une association de parkour, à l'aise socialement dans la compréhension du besoin d'autrui dans un groupe, réactif et organisé lors de la résolution de problématiques."}/>
            </div>
            <a className="cv" href={pdf} target="_blank" rel="noreferrer">Télécharger mon CV</a>
            
        </div>
    )
}

export default Skill;