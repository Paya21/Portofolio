import './Card.css'

function Card({titre, texte, texte1}) {

    const array = texte.split(' ');
    console.log(array);

    const lis = [];
      
    for(let i=0; i < array.length; i++){
        lis.push(<li>{array[i]}</li>);
    }
    
    return(
        <div className='global-card'>
            <h2 className='title-card'>{titre}</h2>
            <ul className='list-card'>
                {lis}
           </ul>
           <p className='descr-card'>{texte1}</p>
        </div>
    )
}

export default Card;