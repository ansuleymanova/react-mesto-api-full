import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup(props) {
    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} buttonText="Сохранить">
            <label htmlFor="picture-link"></label>
            <input type="url" name="avatar" ref={avatarRef} className="popup__field popup__field_type_avatar" id="avatar"
                   placeholder="Ссылка на картинку" required />
            <span className="avatar-error"></span>
        </PopupWithForm>
    )
}