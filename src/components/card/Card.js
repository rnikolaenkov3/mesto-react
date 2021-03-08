import React from "react";

function Card(props) {
  const handleClick = () => {
    props.onClick(props.card);
  }

  return (
    <li className="places__card">
      <button type="button" className="places__remove root__link"></button>
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