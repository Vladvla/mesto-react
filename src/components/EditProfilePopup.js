import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup (props) {
  return(
    // Попап редактирования профиля
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} nameButton="Сохранить"> 
      <input required type="text" id="userName" name="name" placeholder="Имя" className="popup__edit-profile" minLength="2" maxLength="40" />
      <span className="popup__name-input-error popup__input-error"></span>
      <input required type="text" id="userAbout" name="role" placeholder="Род деятельности" className="popup__edit-profile" minLength="2" maxLength="200" />
      <span className="popup__role-input-error popup__input-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;