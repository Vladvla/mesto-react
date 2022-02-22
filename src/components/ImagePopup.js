import '../index.css';

function ImagePopup (props) {
  console.log(props)
  return(
    // {/* Увеличенная карточка  */}
    // {/* popup_opened */}
    <div id="popupItem" className={`popup popup_${props.name} ${props.card.isImageOpen ? 'popup_opened' : ''}`}>
      <div className="popup__item-container">
        <img className="popup__item-pic" src={props.card.src} alt={props.card.name} />
        <p className="popup__item-caption">{props.card.name}</p>
       <button type="button" className="popup__button-close button" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;