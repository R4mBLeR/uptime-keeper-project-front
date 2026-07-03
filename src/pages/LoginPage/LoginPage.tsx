import styles from './LoginPage.module.css'
import {useState} from "react";
import Header from "../../components/layouts/Header/Header.tsx";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    return (
        <>
            <Header/>
            <div className={styles.loginPage}>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <h2>Вход в аккаунт</h2>
                <div className={styles.inputForm}>
                    <label>Email:</label>
                    <input
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        required
                        className={styles.input}
                    />
                </div>

                <div className={styles.inputForm}>
                    <label>Пароль:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="EnterPassword"
                        required
                        className={styles.input}
                    />
                </div>

                <button type="submit" className={styles.button}>
                    Login
                </button>
            </form>
        </div>
        </>
    );
};

export default LoginPage;