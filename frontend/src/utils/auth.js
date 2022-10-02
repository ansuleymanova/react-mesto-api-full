class Auth {
    constructor(url) {
        this.baseUrl = url;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    register(password, email) {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({password: password, email: email})
        })
            .then((res) => this._getResponseData(res))
            .then((res) => {
                return res;
            })
            .catch((err) => console.log(err));
    }

    authorize (email, password) {
        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({password, email})
        })
            .then((res) => this._getResponseData(res))
            .then((data) => {
                if (data) {
                    localStorage.setItem('jwt', data.token);
                    return data;
                }
            })
    }
}

export const auth = new Auth(
    'https://api.asuleymanova.nomoredomains.icu'
    );