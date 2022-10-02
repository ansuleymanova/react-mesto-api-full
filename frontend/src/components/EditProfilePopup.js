import PopupWithForm from './PopupWithForm';
import {useContext, useState, useEffect} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function EditProfilePopup(props) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name: name,
            about: description
        });
    }

    useEffect(() => {
            setName(currentUser.name);
            setDescription(currentUser.about);
            }, [props.isOpen])

    return (
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose}
                       buttonText="Сохранить" onSubmit={handleSubmit} >
            <label htmlFor="name"></label>
            <input type="text" name="name" className="popup__field popup__field_type_name" id="name" required
                   minLength="2" maxLength="40" placeholder="Ваше имя" onChange={handleNameChange} value={name || ""} />
            <span className="name-error"></span>
            <label htmlFor="bio"></label>
            <input type="text" name="bio" className="popup__field popup__field_type_bio" id="bio" required minLength="2"
                   maxLength="200" placeholder="Расскажите о себе" onChange={handleDescriptionChange} value={description || ""} />
            <span className="bio-error"></span>
        </PopupWithForm>
    )
}