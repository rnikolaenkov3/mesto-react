import React from 'react';
import '../../App.css';
import Header from '../header/Header';
import Main from "../main/Main";
import Footer from "../footer/Footer";
import EditProfilePopup from "../editProfilePopup/EditProfilePopup";

import ImagePopup from "../imagePopup/ImagePopup";
import PopupWithForm from "../popupWithForm/PopupWithForm";
import Api from "../../utils/api";

import {CurrentUserContext} from '../../context/CurrentUserContext';
import api from "../../utils/api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Api.getProfile()
      .then((data) => {
        setCurrentUser(data);
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

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = (isVisible) => {
    console.log('App: ', isVisible);
    setIsEditProfilePopupOpen(isVisible);
    console.log('Popup: ', isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleUpdateUser = (name, description) => {
    // console.log(name, description);
    api.editProfile(name, description).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    }).catch((res) => {
      console.log(res);
    });
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  const handleCardClick = (card) => {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="root">
          {/* header */}
          <Header/>
          {/* end header */}
          <Main
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onEditProfile={handleEditProfileClick}
            onCardClick={handleCardClick}
            cards = {cards}
          />

          {/* footer */}
          <Footer/>
          {/* footer end */}

          <EditProfilePopup
            isOpen = {isEditProfilePopupOpen}
            onClose = {closeAllPopups}
            onUpdateUser = {handleUpdateUser}
          />

          <PopupWithForm
            name='add-card'
            title='Новое место'
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            buttonText='Сохранить'
          >
            <input type="text" className="popup__input popup__input_name" aria-label="имя" value="" name="name"
                   placeholder="Название" id="new-card-name" required minLength="2" maxLength="30"/>
            <span className="popup__error new-card-name-error">Вы пропустили это поле</span>
            <input type="url" className="popup__input popup__input_link" aria-label="ссылка" value="" name="link"
                   placeholder="Ссылка на картинку" id="new-card-link" required/>
            <span className="popup__error new-card-link-error">Вы пропустили это поле</span>
          </PopupWithForm>

          <PopupWithForm
            name='upload-avatar'
            title='Обновить аватар'
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            buttonText='Сохранить'
          >
            <input type="url" className="popup__input popup__input_link" aria-label="ссылка" value="" name="link"
                   placeholder="Ссылка на картинку" id="avatar-upload-link" required/>
            <span className="popup__error avatar-upload-link-error">Вы пропустили это поле</span>
          </PopupWithForm>

          <PopupWithForm
            name='delete-card'
            title='Вы уверены?'
            isOpen={isDeletePlacePopupOpen}
            onClose={closeAllPopups}
            buttonText='Сохранить'
          >
            <input type="hidden" className="popup__input popup__input_card-id" value="" name="card-id"/>
          </PopupWithForm>

          <ImagePopup
            name='theme_photo'
            card={selectedCard}
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
          />
          {/* end modal */}
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
