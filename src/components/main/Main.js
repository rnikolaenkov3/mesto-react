import React from "react";
import Api from "../../utils/api";
import Card from "../Card/Card";

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  const handleCardClick = (card) => {
    props.onCardClick(card);
  }

  React.useEffect(() => {
    Api.getProfile()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);

      })
      .catch((res) => {
        console.log(res);
      });
    Api.getCardList()
      .then((data) => {
        setCards(data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <main>
      {/* profile */}
      <section className="profile root__section">
        <a href="#" className="profile__avatar-upload" target="_self" onClick={props.onEditAvatar}>
          <img src={userAvatar} alt="аватар" className="profile__avatar"/>
        </a>
        <div className="profile__info">
          <div className="profile__info-wrap">
            <h1 className="profile__name">
              {userName}
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
            {userDescription}
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