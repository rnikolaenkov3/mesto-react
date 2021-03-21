import React from "react";
import Api from "../../utils/api";
import Card from "../card/Card";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import {CardContext} from "../../context/CardContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const cards = React.useContext(CardContext);

  // console.log(cards);

  // console.log(currentUser);

  const handleCardClick = (card) => {
    props.onCardClick(card);
  }

  return (
    <main>
      {/* profile */}
      <section className="profile root__section">
        <a href="#" className="profile__avatar-upload" target="_self" onClick={props.onEditAvatar}>
          <img src={currentUser.avatar} alt="аватар" className="profile__avatar"/>
        </a>
        <div className="profile__info">
          <div className="profile__info-wrap">
            <h1 className="profile__name">
              {currentUser.name}
            </h1>
            <button
              type="button"
              className="profile__btn-change root__link"
              aria-label="редактирование профиля"
              onClick={props.onEditProfile}
            >
            </button>
          </div>
          <p className="profile__role">
            {currentUser.about}
          </p>
        </div>
        <button type="button" className="profile__btn-add-img root__link" aria-label="добавление места"
                onClick={props.onAddPlace}></button>
      </section>
      {/* end profile */}

      {/* cards */}
      <section className="cards root__section root__cards">
        <ul className="places">
          {
            cards.map((card) => <Card card={card} key={card._id} onClick={handleCardClick}/>)
          }
        </ul>
      </section>
      {/* end cards */}
    </main>
  )
}

export default Main;