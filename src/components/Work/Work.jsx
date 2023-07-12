import './Work.css';
import WorkCard from '../WorkCard/WorkCard';
import logoBooki from '../../asset/Booki.png';
import logoSophie from '../../asset/Logo.png';
import logoNina from '../../asset/Nina_Carducci.PNG';
import kaza from '../../asset/LOGO (2).png';
import Grimoire from '../../asset/Mon Vieux Grimoire.png'



function Work() {


    return(
        <div id="work">
            <h1 className="title">Travaux</h1>
            <div className="global-work">
                
                <WorkCard image={logoBooki} 
                descr={"Intégration du site de réservation d'hôtels, HTML CSS et responsive. lors de ce projet j'ai pu découvrir et me familiariser avec les bases du web, l'HTML et le CSS ainsi que le responsive design qui demande d'adapter sa façon de concevoir, ce fut très instructif. Cliquez sur le lien pour découvrir mon travail lors de ce projet."} 
                lien={"https://paya21.github.io/Booki/"}
                lienRepo={"https://github.com/Paya21/Booki"}/>
                
                
                <WorkCard image={logoSophie} 
                descr={"Implémentation du javascript pour le site portofolio de l'architecte sophie Bluel. Grâce à ce sujet d'étude pratique, j'ai pu implémenter la partie dynamique d'un site web, notamment avec une communication API et à la manipulation du DOM. Les objectifs à réaliser étaient assez complexe surtout avec la modal que j'ai du coder en dur, ce qui est pour moi la meilleur façon d'apprendre. Cliqueez sur le lien pour une vidéo de présentation du site."}
                lien={"https://paya21.github.io/PresentationP3/"} 
                lienRepo={"https://github.com/Paya21/Portfolio-architecte-sophie-bluel"}/>
                
                
                <WorkCard image={logoNina}
                descr={"Debuggage et optimisation du site photographe Nina carducci. Un projet qui sort de l'ordinaire, je ne savais pas que l'optmisation était une des facettes du métier de développeur, je suis ravi dd'avoir pu découvrir les outils qui permettent d'analyser le foncionnement d'un site et d'avoir su trouver (non sans efforts) les solutions poour l'optimisation. J'ai appris beacoup de chose sur l'importance de l'accesibilité (balises sémantiques, labels), des performances (chargement des scripts), et du référencement (rich snippets). Cliquez sur le lien pour voir le site optimisé."}
                lien={"https://paya21.github.io/nina-carducci.github.io/"}
                lienRepo={"https://github.com/Paya21/nina-carducci.github.io"} />
                
               
                <WorkCard image={kaza}
                descr={"Implémentation du frontend d'un site de location immobilière avec Réact. Lors de ce projet j'a pu découvrir la framework Réact, une framwork poour le frontend en javascript. La logique de composant est très pratique, et avec un peu de persévérance on finit par comprendre les concepts qui régissent cette framework. Ce site est d'ailleurs codé avec React ! Cliquez sur le lien pour une video de présentation."}
                lien={"https://paya21.github.io/PresentationP6/"} 
                lienRepo={"https://github.com/Paya21/kaza1"}/>
               
               
                <WorkCard image={Grimoire}
                descr={"Réalisation de l'API/backend du site de notation de livres. Voici l'ultime projet, celui avec lequel on doit créer une API, la logique backend est assez complexe à assimiler, mais on finit par y arriver. Le frontend étant déjà implémenté j'ai du m'adapter car ce dernier gère les chose dans un certain ordre et ne peut pas cohabiter avec une API qui ne respecte pas cet ordre, ce fut un défi très instructif. Cliquez sur le lien pour une vidéoo de présentation."} 
                lien={"https://github.com/Paya21/P7-Dev-Web-livres"}
                lienRepo={"https://github.com/Paya21/P7-Dev-Web-livres"}/>
               
                
            </div>
        </div>
    )
    
}

export default Work;