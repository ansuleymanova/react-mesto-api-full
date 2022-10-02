export default function InfoTooltip(props) {
    const className = `popup ${props.isOpen && 'popup_opened'}`;
    const imgClassName = `popup__icon popup__icon_type_${props.result ? "success" : "unsuccess"}`;

    return (
        <div className={className}>
            <button type="button" className="popup__close-icon" aria-label="Закрыть" onClick={props.onClose}></button>
            <div className="popup__container">
                <div className={imgClassName} />
                <h2 className="popup__title popup__title_type_tip">{props.text}</h2>
            </div>

        </div>
    )
}