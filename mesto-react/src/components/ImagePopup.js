import '../index.css';

function ImagePopup (props) {
  return(
    // {/* Увеличенная карточка  */}
    // {/* popup_opened */}
    <div id="popupItem" className={`popup popup_${props.name} ${props.onCardClick ? 'popup_opened' : ''}`} onClose={props.onClose}>
      <div className="popup__item-container">
        <img className="popup__item-pic" src={props.src} alt="#" />
        <p className="popup__item-caption"></p>
       <button type="button" className="popup__button-close button"></button>
      </div>
    </div>
  )
}

export default ImagePopup;