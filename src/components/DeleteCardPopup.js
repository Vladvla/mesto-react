import PopupWithForm from './PopupWithForm.js';

function DeleteCardPopup (props) {
  return(
    <PopupWithForm name="delete" title="Вы уверены?" isOpen={props.isOpen} onClose={props.onClose} nameButton="Да"> 
    </PopupWithForm>
  )
}

export default DeleteCardPopup;

// {/* Попап удаления карточки */}
// <div id="popupDeleteElement" className="popup"> {/* <!-- popup_opened --> */}
// <div className="popup__container">
//   <button type="button" className="popup__button-close button"></button>
//   <form name="formRemoveItem" className="popup__edit-form popup__edit-form_delete" novalidate>
//     <p className="popup__edit">Вы уверены?</p>
//     <button type="submit" className="popup__button popup__button_delete">Да</button> {/* popup__button_disabled */}
//   </form>
// </div>
// </div>