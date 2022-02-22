import '../index.css';

function Card (props) {
 
  function handleClick() {
    props.onCardClick(props);
  } 
  
  return(
    //  Темплейт карточки 
        <article className="element">
          <button type="button" className="element__remove button" aria-label="Удалить карточку" onClick={props.onDeleteCard}></button>
          <img className="element__pic" src={props.src} onClick={handleClick} alt="#"/>
         <div className="element__container">
            <h2 className="element__title" onClick={handleClick}>{props.name}</h2>
            <div className="element__like-container">
              <button type="button" className="element__like" aria-label="Понравилось"></button> {/* <!--element__like_active-->  */}
              <p className="element__like-counting">{props.likes}</p>
            </div>
          </div>
       </article>
  )
}

export default Card;