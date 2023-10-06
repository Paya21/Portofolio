import './WorkCard.css'


function WorkCard({image, descr, title, title2, lienRepo}) {

    return(
        <div className='card'>
            <img src={image} alt='projet' className='card-img'/>
            <div className="card-footer">
                <h2>{title}</h2>
                <p>{title2}</p>
                <p className='descr'>{descr}</p>
            </div>
        </div>
        

    )
}

export default WorkCard;