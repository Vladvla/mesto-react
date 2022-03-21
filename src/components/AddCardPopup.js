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