export default function PopupWithForm(props) {
    const className = `popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`;

    return (
        <div className={className}>
            <button type="button" className="popup__close-icon" aria-label="Закрыть" onClick={props.onClose}></button>
            <form className="popup__container" name={`${props.name}`} noValidate onSubmit={props.onSubmit}>
                <h2 className="popup__title">{props.title}</h2>
                {[props.children]}
                <button type="submit" className="popup__save-button">{props.buttonText}</button>
            </form>
        </div>
    )
}