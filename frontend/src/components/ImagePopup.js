export default function ImagePopup(props) {
    const className = `popup popup_type_closeup ${props.card.name && 'popup_opened'}`;

    return (
        <div className={className}>
            <div className="popup__box">
                <button type="button" className="popup__close-icon popup__close-icon_closeup" aria-label="Закрыть" onClick={props.onClose}></button>
                <img
                    className="popup__image" src={`${props.card.link}`} alt={`${props.card.name}`}
                />
                <p className="popup__caption">{props.card.name}</p>
            </div>
        </div>
    )
}