export default function Login (props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.handleLogin();
    }

    return (
        <div className="auth">
            <h2 className="auth__title">Вход</h2>
            <form className="popup__container popup__container_inverted" onSubmit={handleSubmit}>
                <div className="auth__fields">
                    <label htmlFor="email"></label>
                    <input type="email" name="email" className="popup__field popup__field_inverted" id="email"
                           placeholder="Email" required value={props.email} onChange={props.onEmailChange}/>
                    <label htmlFor="password"></label>
                    <input type="password" name="password" className="popup__field popup__field_inverted" id="password"
                           placeholder="Пароль" required value={props.password} onChange={props.onPasswordChange}/>
                </div>
                <button type="submit" className="popup__save-button popup__save-button_inverted">Войти</button>
            </form>
        </div>
    )
}