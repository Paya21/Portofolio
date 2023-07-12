import './WorkCard.css'


function WorkCard({image, descr, lien, lienRepo}) {

    return(
        <article className="work-card">
            
            <a href={lien} className="lien-card-word" target="_blank" rel='noreferrer'>
            <img src={image} alt="Logo work"></img>
            <p>{descr}</p>
            </a>

            <a className="lien-repo" href={lienRepo} target="_blank" rel='noreferrer'>Lien vers le repo</a>
       
        
        </article>

    )
}

export default WorkCard;