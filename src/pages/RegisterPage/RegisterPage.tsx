import styles from './RegisterPage.module.css'
import {useState} from "react";
import Header from "../../components/layouts/Header/Header.tsx";

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    return (
        <>
            <Header/>
            <div className={styles.registerPage}>
                <form onSubmit={handleSubmit} className={styles.registerArea}>
                    <h2>Registration</h2>
                    <div className={styles.registerForm}>
                        <div className={styles.inputForm}>
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputForm}>
                            <label>Username</label>
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

                        <div className={styles.inputForm}>
                            <label>Repeat password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.registerButtonContainer}>
                            <button type="submit" className={styles.registerButton}>
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RegisterPage;