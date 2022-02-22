import '../index.css';
import PopupWithForm from './PopupWithForm.js';

function AddCardPopup (props) {
  return(
    <PopupWithForm name="add" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} nameButton="Создать"> 
      <input required type="text" name="name" id="nameImage" placeholder="Название" className="popup__edit-profile" minLength="2" maxLength="30" />
      <span className="popup__avatar-input-error popup__input-error"></span>
      <input required type="url" name="link" id="urlImage" placeholder="Ссылка на изображение" className="popup__edit-profile" />
      <span className="popup__avatar-input-error popup__input-error"></span>
    </PopupWithForm>
  )
}

export default AddCardPopup;


// Попап добавления карточки
// <div id="popupAdditem" className="popup">
// <div className="popup__container">
//   <button type="button" className="popup__button-close button"></button>
//   <h2 className="popup__edit">Новое место</h2>
//   <form id="popup__addForm" name="formAddItem" className="popup__edit-form" novalidate>
//     <input required type="text" id="cardName-input" name="nameItem" placeholder="Название" className="popup__edit-profile" minlength="2" maxlength="30" />
//     <span className="popup__cardName-input-error popup__input-error"></span>
//     <input required type="url" id="img-input" name="pic" placeholder="Ссылка на картинку" className="popup__edit-profile" />
//     <span className="popup__img-input-error popup__input-error"></span>
//     <button type="submit" className="popup__button">Создать</button> {/* <!-- popup__button_disabled --> */}
//   </form>
// </div>
// </div>