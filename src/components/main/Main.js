import React from "react";
import api from "../../utils/api";
import Card from "../card/Card";
import {CurrentUserContext} from "../../context/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    setCards(props.cards)
  },[props.cards]);

  const handleCardClick = (card) => {
    props.onCardClick(card);
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (isLiked) {
      api.deleteLike(card._id).then((newCard) => {
          setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
        });
    } else {
      api.addLike(card._id).then((newCard) => {
        setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
      });
    }
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
            cards.map((card) => <Card card={card} key={card._id} onClick={handleCardClick} onCardLike={handleCardLike}/>)
          }
        </ul>
      </section>
      {/* end cards */}
    </main>
  )
}

export default Main;