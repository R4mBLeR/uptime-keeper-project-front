import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <nav className={styles.header}>
                <div className={styles.navMenu}>
                    <div>
                        Dashboard
                    </div>
                    <div>
                        Services
                    </div>
                    <div>
                        Incidents
                    </div>
                </div>
                <div className={styles.userMenu}>
                    <button className={styles.loginButton}>
                        <a href="/login">Login</a>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;