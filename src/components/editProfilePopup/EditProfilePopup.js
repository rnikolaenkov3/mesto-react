import React from 'react';
import PopupWithForm from "../popupWithForm/PopupWithForm";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import Main from "../main/Main";
import api from "../../utils/api";


function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  // console.log('Test: ', props);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  const onEditProfileSubmit = (e) => {
    props.onSubmit(e, name, description);
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText='Сохранить'
      onSubmit={onEditProfileSubmit}
    >
      <input
        type="text"
        className="popup__input popup__input_func_name"
        aria-label="имя"
        value={name}
        onChange={handleChangeName}
        name="name"
        id="profile-name"
        required minLength="2"
        maxLength="40"
        placeholder="Имя"
        // onChange={handleChangeName}
      />
      <span className="popup__error profile-name-error">Вы пропустили это поле</span>
      <input
        type="text"
        className="popup__input popup__input_func_role"
        aria-label="роль"
        value={description}
        name="description"
        // defaultValue={description}
        id="profile-role"
        required minLength="2"
        maxLength="200"
        placeholder="Роль"
        onChange={handleChangeDescription}
      />
      <span className="popup__error profile-role-error">Вы пропустили это поле</span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;