import './App.scss'

import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="App">
            <div className="main-wrapper">
                <div className="aside">
                    <div className="aside__logo">
                        Logo
                    </div>

                    <div className="aside__button">
                        asideButton
                    </div>
                    <div className="aside__button">
                        Settings
                    </div>
                    <div className="aside__button">
                        asideButton
                    </div>
                    <div className="aside__button">
                        Settings
                    </div>


                    <div className="aside__panel">
                        asidePanel
                    </div>

                </div>

                <header className="header">
                    <div className="d-flex align-items-center">
                        <div className="header__title">Users</div>
                        <div className="header__menu-wrapper">
                            <ul className="header__menu">
                                <li className="header__menu-item">
                                    <a className="header__menu-link default-hover" href="#">
                                        Dashboard
                                    </a>
                                </li>
                                <li className="header__menu-item">
                                    <a className="header__menu-link default-hover" href="#">
                                        Tables
                                    </a>
                                </li>
                                <li className="header__menu-item">
                                    <a className="header__menu-link default-hover" href="#">
                                        Forms
                                    </a>
                                </li>
                                <li className="header__menu-item">
                                    <a className="header__menu-link default-hover" href="#">
                                        Maps
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="header__toolbar toolbar">
                        <div className="toolbar__item default-hover search-activator">

                        </div>


                        <div className="toolbar__item default-hover">

                        </div>

                        <div className="toolbar__profile default-hover ms-3">
                            <div>
                                <div className="toolbar__profile-name">
                                    Taras
                                </div>
                                <div className="toolbar__profile-info">
                                    Web Developer
                                </div>
                            </div>
                            <div className="toolbar__button-ico ms-3">
                                T
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        </div>
    );
}

export default App;
