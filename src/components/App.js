import React, { useState } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import AddCardPopup from "./AddCardPopup.js";
import ImagePopup from "./ImagePopup";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  // переменные попапов.
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  function handleAddCardClick() {
    setIsAddCardPopupOpen(!isAddCardPopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      {
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddCardClick}
          onSelectedCard={handleCardClick}
        />
      }
      <Footer />
      {
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
      }
      {
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
      }
      {<AddCardPopup isOpen={isAddCardPopupOpen} onClose={closeAllPopups} />}
      {<ImagePopup card={selectedCard} onClose={closeAllPopups} />}
    </div>
  );
}

export default App;
