import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup (props) {
  return(
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} nameButton="Сохранить"> 
      <input required type="url" name="avatar" placeholder="Ссылка на изображение" className="popup__edit-profile" />
      <span className="popup__avatar-input-error popup__input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;