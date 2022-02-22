import '../index.css';
import Card from './Card.js';
import { useEffect, useState } from 'react';
import { api } from './utils/Api';

function Main (props) {

  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
    .then((userInfo) => {
      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
      setUserAvatar(userInfo.avatar);
    })
    .catch(((err) => {
      console.log(err);
    }));
  },[])

  useEffect(() => {
    api.getInitialCards()
    .then((cards) => {
      setCards(cards);
    })
    .catch(((err) => {
      console.log(err);
    }));
  },[])

  return(
    <><main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Здесь расположен Ваш аватар." />
        </div>
        <div className="profile__info">
          <div className="profile__info-container">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-button button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__role">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button button" aria-label="Добавить новую карточку" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
      {cards.map((item) => {
        return (<Card key={item._id} src={item.link} name={item.name} likes={item.likes.length} onCardClick={props.onSelectedCard} />)
      })}
      </section>
    </main>
      </>
  )
}


export default Main;