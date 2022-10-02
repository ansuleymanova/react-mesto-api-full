export default function AuthPopup(props) {
    const className = `popup ${props.isOpen && 'popup_opened'}`;
    const imgClassName = `popup__auth-icon_type_${props.result}`;

    return (
        <div className={className}>
            <button type="button" className="popup__close-icon" aria-label="Закрыть" onClick={props.onClose}></button>
            <div className={imgClassName} />
            <h2 className="popup__title">{props.title}</h2>
        </div>
    )
}