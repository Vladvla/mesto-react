import '../index.css';

function PopupWithForm (props) {

  return(
    //  Темплейт карточки 
      <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <button type="button" className="popup__button-close button" onClick={props.onClose}></button>
          <h2 className="popup__edit">{props.title}</h2>
          <form name={props.name} className={`popup__form popup__form_${props.name}`} noValidate>
            {props.children}
            <button type="submit" className="popup__button">{props.nameButton}</button> {/* <!-- popup__button_disabled --> */}
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm;