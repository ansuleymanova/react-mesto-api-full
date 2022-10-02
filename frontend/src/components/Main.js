import {useContext, useEffect, useState} from 'react';
import Card from './Card.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setUserName(currentUser.name);
        setUserDescription(currentUser.about);
        setUserAvatar(currentUser.avatar);
    }, [currentUser]);

    return (
        <main className="main">
            <section className="profile-area">
                <div className="profile-area__profile">
                    <div className="profile-area__overlay" onClick={props.onEditAvatar}></div>
                    <img className="profile-area__avatar" alt="Аватар пользователя" src={userAvatar}/>
                    <div className="profile-area__profile-info">
                        <div className="profile-area__heading-edit">
                            <h1 className="profile-area__heading">{userName}</h1>
                            <button type="button" className="profile-area__edit-button"
                                    aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile-area__subheading">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="profile-area__add-button" aria-label="Добавить пост" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {props.cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}></Card>
                ))
                }
            </section>

        </main>
    )
}