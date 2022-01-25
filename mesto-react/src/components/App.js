import React from 'react';
import '../index.css';
import noAvatar from '../images/noAvatar.jpg';
import Header from './Header.js';
import logo from '../images/logo.svg';

function App() {
  return (
  <body className="page">
    <header className="header">
        <img className="header__logo" src={logo} alt="Логотип сайта."/>
    </header>
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={noAvatar} alt="Здесь расположен Ваш аватар."/>
       </div>
       <div className="profile__info">
         <div className="profile__info-container">
           <h1 className="profile__name">fhfhfhfhfh</h1>
           <button type="button" className="profile__edit-button button" aria-label="Редактировать профиль"></button>
          </div>
          <p className="profile__role">fhfhfhfhf</p>
        </div>
        <button type="button" className="profile__add-button button" aria-label="Добавить новую карточку"></button>
      </section>
      <section className="elements">
        
     </section>
    </main>
   <footer className="footer">
      <p className="footer__author">© 2021 Щукин Владислав</p>
   </footer>
   {/* <!-- Попап редактирования профиля --> */}
    <div id="popupEditProfile" className="popup">
      <div className="popup__container">
       <button type="button" className="popup__button-close button"></button>
        <h2 className="popup__edit">Редактировать профиль</h2>
       <form id="popup__editForm" name="formEditProfile" className="popup__edit-form" novalidate>
         <input required type="text" id="name-input" name="name" placeholder="Имя" className="popup__edit-profile" minlength="2" maxlength="40"/>
          <span className="popup__name-input-error popup__input-error"></span>
          <input required type="text" id="role-input" name="role" placeholder="Род деятельности" className="popup__edit-profile" minlength="2" maxlength="200"/>
          <span className="popup__role-input-error popup__input-error"></span>
         <button type="submit" className="popup__button">Сохранить</button> {/* <!-- popup__button_disabled --> */}
        </form>
      </div>
    </div>
    {/* <!-- Попап добавления карточки --> */}
    <div id="popupAdditem" className="popup">
     <div className="popup__container">
        <button type="button" className="popup__button-close button"></button>
        <h2 className="popup__edit">Новое место</h2>
        <form id="popup__addForm" name="formAddItem" className="popup__edit-form" novalidate>
          <input required type="text" id="cardName-input" name="nameItem" placeholder="Название" className="popup__edit-profile" minlength="2" maxlength="30"/>
          <span className="popup__cardName-input-error popup__input-error"></span>
          <input required type="url" id="img-input" name="pic" placeholder="Ссылка на картинку" className="popup__edit-profile"/>
          <span className="popup__img-input-error popup__input-error"></span>
          <button type="submit" className="popup__button">Создать</button> {/* <!-- popup__button_disabled --> */}
        </form>
      </div>
   </div>
    {/* Увеличенная карточка */}
    {/* popup_opened */}
   <div id="popupItem" className="popup">
      <div className="popup__item-container">
        <img className="popup__item-pic" src="#" alt="#"/>
        <p className="popup__item-caption"></p>
        <button type="button" className="popup__button-close button"></button>
     </div>
   </div>
    {/* Попап удаления карточки */}
   <div id="popupDeleteElement" className="popup"> {/* <!-- popup_opened --> */}
     <div className="popup__container"> 
        <button type="button" className="popup__button-close button"></button>
        <form name="formRemoveItem" className="popup__edit-form popup__edit-form_delete" novalidate>
          <p className="popup__edit">Вы уверены?</p>
          <button type="submit" className="popup__button popup__button_delete">Да</button> {/* popup__button_disabled */}
        </form>
      </div>
    </div>
    {/* <!-- Смена аватара --> */}
    <div id="popupAvatarChange" className="popup">   {/* <!-- popup_opened --> */}
      <div className="popup__container"> 
        <button type="button" className="popup__button-close button"></button>
        <p className="popup__edit">Обновить Аватар</p>
        <form id="popup__changeAvatar" name="formChangeAvatar" className="popup__edit-form" novalidate>
          <input required type="url" id="avatar-input" name="avatar" placeholder="Ссылка на изображение" className="popup__edit-profile"/>
          <span className="popup__avatar-input-error popup__input-error"></span>
          <button type="submit" className="popup__button">Сохранить</button> {/* <!-- popup__button_disabled --> */}
        </form>
      </div>
    </div>
    {/* <!-- Темплейт карточки --> */}
    <template id="element-template" className="elements-list">
      <article className="element">
        <button type="button" className="element__remove button" aria-label="Удалить карточку"></button>
        <img className="element__pic" src="#" alt="#"/>
        <div className="element__container">
          <p className="element__title"></p>
          <div className="element__like-container">
            <button type="button" className="element__like" aria-label="Понравилось"></button> {/* <!--element__like_active-->  */}
            <p className="element__like-counting">0</p>
          </div>
        </div>
     </article>
   </template>
  </body>
  );
}

export default App;
