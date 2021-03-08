import React from 'react';
import '../../App.css';
import Header from '../header/Header';
import Main from "../main/Main";
import Footer from "../footer/Footer";

import ImagePopup from "../imagePopup/ImagePopup";
import PopupWitForm from "../popupWithForm/PopupWithForm";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    const [isOpen, setIsOpen] = React.useState(false);

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
        setIsOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
        setIsOpen(true);
    }

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
        setIsOpen(true);
    }

    const handleCloseAllPopup = () => {
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsImagePopupOpen(false);
        setSelectedCard({});
        setIsOpen(false);
    }

    const handleCardClick = (card) => {
        setIsImagePopupOpen(true);
        setSelectedCard(card);
        console.log(isImagePopupOpen);
    }

    // console.log(isImagePopupOpen);

    return (
      <body className="root">
      {/* header */}
      <Header />
      {/* end header */}
      <Main
          onEditAvatar = {handleEditAvatarClick}
          onAddPlace = {handleAddPlaceClick}
          onEditProfile = {handleEditProfileClick}
          onClick = {handleCardClick}
      />

      {/* footer */}
      <Footer />
      {/* footer end */}

      { (isEditProfilePopupOpen)&&
          <PopupWitForm
              name='edit-profile'
              title='Редактировать профиль'
              isOpen={isOpen}
              onClose = {handleCloseAllPopup}
          >
              <form action="#" className="popup__form" name="edit-profile" noValidate>
                  <input type="text" className="popup__input popup__input_func_name" aria-label="имя" value=""
                         name="name"
                         id="profile-name" required minLength="2" maxLength="40" placeholder="Имя"/>
                  <span className="popup__error profile-name-error">Вы пропустили это поле</span>
                  <input type="text" className="popup__input popup__input_func_role" aria-label="роль" value=""
                         name="about" id="profile-role" required minLength="2" maxLength="200" placeholder="Роль"/>
                  <span className="popup__error profile-role-error">Вы пропустили это поле</span>
                  <button type="submit" className="popup__btn-save root__link">Сохранить</button>
              </form>
          </PopupWitForm>
      }

      {(isAddPlacePopupOpen)&&
          <PopupWitForm
              name='add-card'
              title='Новое место'
              isOpen={isOpen}
              onClose = {handleCloseAllPopup}
          >
              <form action="#" className="popup__form popup__form_form-add-card" name="add-card" noValidate>
                  <input type="text" className="popup__input popup__input_name" aria-label="имя" value="" name="name"
                         placeholder="Название" id="new-card-name" required minLength="2" maxLength="30"/>
                  <span className="popup__error new-card-name-error">Вы пропустили это поле</span>
                  <input type="url" className="popup__input popup__input_link" aria-label="ссылка" value="" name="link"
                         placeholder="Ссылка на картинку" id="new-card-link" required/>
                  <span className="popup__error new-card-link-error">Вы пропустили это поле</span>
                  <button type="submit" className="popup__btn-save root__link">Сохранить</button>
              </form>
          </PopupWitForm>
      }

      {/*{(isEditAvatarPopupOpen)&&*/}
          <PopupWitForm
              name='upload-avatar'
              title='Обновить аватар'
              isOpen={isOpen}
              onClose = {handleCloseAllPopup}
          >
              <form action="#" className="popup__form popup__form_form-add-card" name="upload-avatar" noValidate>
                  <input type="url" className="popup__input popup__input_link" aria-label="ссылка" value="" name="link"
                         placeholder="Ссылка на картинку" id="avatar-upload-link" required/>
                  <span className="popup__error avatar-upload-link-error">Вы пропустили это поле</span>
                  <button type="submit" className="popup__btn-save root__link">Сохранить</button>
              </form>
          </PopupWitForm>
      {/*}*/}


      {/*{(isDeletePlacePopupOpen)&&*/}
          <PopupWitForm
              name='delete-card'
              title='Вы уверены?'
              isOpen={isOpen}
              onClose = {handleCloseAllPopup}
          >
              <form action="#" className="popup__form popup__form_form-del-card" name="delete-card" noValidate>
                  <input type="hidden" className="popup__input popup__input_card-id" value="" name="card-id"/>
                  <button type="submit" className="popup__btn-save root__link">Да</button>
              </form>
          </PopupWitForm>
      {/*}*/}

      {(isImagePopupOpen)&&
          <ImagePopup
              name = 'theme_photo'
              card = {selectedCard}
              isOpen={isOpen}
              onClose = {handleCloseAllPopup}
          />
      }
      {/* end modal */}

      {/* template for card */}
      {/*<template id="card">*/}
      {/*  <li className="places__card">*/}
      {/*    <button type="button" className="places__remove root__link"></button>*/}
      {/*    <img src="../../images/no-image.jpg" alt="Нет картинки" className="places__img" />*/}
      {/*      <div className="places__title-wrap">*/}
      {/*        <h2 className="places__title"></h2>*/}
      {/*        <div className="places__like-wrap">*/}
      {/*          <button type="button" className="places__like root__link"></button>*/}
      {/*          <p className="places__like-count">0</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*  </li>*/}
      {/*</template>*/}
      </body>
    );
}

export default App;
