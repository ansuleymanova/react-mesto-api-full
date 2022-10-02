import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup(props) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleLinkChange(e) {
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({ name, link })
    }

    useEffect(() => {
        setName('');
        setLink('');
    }, [props.isOpen])

    return (
        <PopupWithForm name="card" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} buttonText="Сохранить">
            <label htmlFor="title"></label>
            <input type="text" name="title" onChange={handleNameChange} value={name} className="popup__field popup__field_type_title" id="title"
                   placeholder="Название" required minLength="2" maxLength="30" />
            <span className="title-error"></span>
            <label htmlFor="picture-link"></label>
            <input type="url" name="link" onChange={handleLinkChange} value={link} className="popup__field popup__field_type_picture-link" id="picture-link"
                   placeholder="Ссылка на картинку" required />
            <span className="picture-link-error"></span>
        </PopupWithForm>
    )
}