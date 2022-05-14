import React from 'react';
import Card from '../components/Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function Main({onCardClick, onEditAvatar, onEditProfile, onAddPlace, onCardLike, cards, onTrashButton}) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
    <section className="profile">
      <div className="profile__contaner">
        <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
          <img src={currentUser.avatar} className="profile__avatar" alt="фото" />
        </button>
        
        <div className="profile__info">
          <h1 className="profile__name" id="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button" aria-label="Редактирование" type="button" onClick={onEditProfile}></button>
          <p className="profile__job" id="profile__job">{currentUser.about}</p>
        </div>
        </div>
        <button id="profile__add-button" className="profile__add-button" type="button" onClick={onAddPlace}></button>
    </section>
    
    <section className="cards">
      {cards.map((card)=> (
        <Card
          key={card._id}
          card={card}
          onCardClick={onCardClick}
          onCardLike={onCardLike}
          onTrashButton={onTrashButton}/>
      ))}
    </section>

    </main>
  )
}
  
export default Main;


