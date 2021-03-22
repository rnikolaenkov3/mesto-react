import React from "react";
import {CurrentUserContext} from "../../context/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  console.log(`Card: ${props.card._id} - is own: ${isOwn}`);

  const handleClick = () => {
    props.onClick(props.card);
  }

  let btRemoveClassName = 'places__remove root__link';
  if (isOwn) { btRemoveClassName += ' places__remove_visible'}

  return (
    <li className="places__card">
      <button type="button" className={btRemoveClassName}></button>
      <img src={props.card.link} alt={props.card.name} className="places__img" onClick={handleClick}/>
      <div className="places__title-wrap">
        <h2 className="places__title">{props.card.name}</h2>
        <div className="places__like-wrap">
          <button type="button" className="places__like root__link"></button>
          <p className="places__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;