const token = localStorage.getItem('jwt');

class Api {
    constructor(options) {
        this.url = options.url;
        this._headers = options.headers;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getInitialCards() {
        return fetch(`${this.url}/cards`, {
            headers: this._headers,
        })
            .then((res) => this._getResponseData(res));
    }

    postCard({ name, link }) {
        return fetch(`${this.url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        }).then((res) => this._getResponseData(res));
    }

    deleteCard(cardId) {
        return fetch(`${this.url}/cards/${cardId}`, {
                method: 'DELETE',
                headers: this._headers,
            }
        ).then((res) => this._getResponseData(res));
    }

    toggleCardLike(cardId, isLiked) {
        if (!isLiked) {
            return fetch(`${this.url}/cards/${cardId}/likes`, {
                    method: 'PUT',
                    headers: this._headers,
                }
            ).then((res) => this._getResponseData(res))
        } else {
            return fetch(`${this.url}/cards/${cardId}/likes`, {
                    method: 'DELETE',
                    headers: this._headers,
                }
            ).then((res) => this._getResponseData(res))
        }
    }

    getUserInfo() {
        return fetch(`${this.url}/users/me`, {
            headers: this._headers,
        }).then((res) => this._getResponseData(res))
    }

    patchUserInfo({ name, about }) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        }).then((res) => this._getResponseData(res))
    }

    patchAvatar({ avatar }) {
        return fetch(`${this.url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
            })
        }).then((res) => this._getResponseData(res))
    }
}

export const api = new Api({
    url:'https://api.asuleymanova.nomoredomains.icu',
    headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    }
})