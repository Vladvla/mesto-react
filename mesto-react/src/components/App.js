import React, { useState } from 'react';
import '../index.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
// import PopupWithForm from './PopupWithForm.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddCardPopup from './AddCardPopup.js';
import ImagePopup from './ImagePopup';

function App() {
// переменные попапов.
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    function handleEditAvatarClick() {
      setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
   }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    function handleEditProfileClick() {
      setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
   }

   const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
    function handleAddCardClick() {
      setIsAddCardPopupOpen(!isAddCardPopupOpen);
   }

   const [selectedCard, setSelectedCard] = useState(false);
    function handleCardClick() {
      setSelectedCard(!selectedCard)
    }

   function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    selectedCard(false);
   }
  
  return (
  <>
    <div className="page">
      {<Header></Header>}
      {<Main 
      onEditAvatar={handleEditAvatarClick} 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddCardClick}
      onSelectedCard={handleCardClick}
      />}
      {<Footer></Footer>}
      {<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />}
      {<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />}
      {<AddCardPopup isOpen={isAddCardPopupOpen} onClose={closeAllPopups} />}
      {<ImagePopup onCardClick={selectedCard} onClose={closeAllPopups} />}
    </div>
  </>
  );
}


export default App;
