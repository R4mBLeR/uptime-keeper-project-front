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
            <form onSubmit={handleSubmit} className={styles.loginArea}>
                <h2>Login in account</h2>
                <div className={styles.loginForm}>
                    <div className={styles.inputForm}>
                        <label>Username or email</label>
                        <input
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.inputForm}>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.loginButtonContainer}>
                        <button type="submit" className={styles.loginButton}>
                            Login
                        </button>
                    </div>
                    <div className={styles.createAccountLink}>
                        Don't have a account? <a href='/register'>Create a new account</a>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
};

export default LoginPage;