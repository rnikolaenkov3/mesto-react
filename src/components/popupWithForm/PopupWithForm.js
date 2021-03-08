function PopupWitForm(props) {
    let className = `popup popup_${props.name}`;
    if (props.isOpen) {
        className += ' popup_opened'
    }

    return (

        <div className= {className}>
            <div className="popup__container popup__container_theme_form">
                <button type="button" className="popup__btn-close root__link" aria-label="закрыть попап" onClick={props.onClose}></button>
                <div className="popup__content">
                    <h2 className="popup__title">{ props.title }</h2>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default PopupWitForm;