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
                    <div className={styles.loginButton}>
                        <a href="/login">Login</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;