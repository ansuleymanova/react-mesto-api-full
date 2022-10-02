import logo from "../images/logo.svg";
import { Link, Route, Switch } from 'react-router-dom';

export default function Header(props) {

    return(
        <header className="header">
            <img alt="Mesto Россия" src={logo} className="header__logo" />
            <Switch>
                <Route exact path="/">
                    <div className="header__info">
                        <p className="header__email">{localStorage.getItem('email')}</p>
                        <Link to="/sign-in" className="header__link" onClick={props.handleLogout}>Выйти</Link>
                    </div>
                </Route>
                <Route path="/sign-in">
                    <Link to="/sign-up" className="header__link">Регистрация</Link>
                </Route>
                <Route path="/sign-up">
                    <Link to="/sign-in" className="header__link">Войти</Link>
                </Route>
            </Switch>
        </header>
    )
}