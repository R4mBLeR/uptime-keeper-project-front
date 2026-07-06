import styles from './RegisterPage.module.css'
import {useState} from "react";
import Header from "../../components/layouts/Header/Header.tsx";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordLabel, setPasswordLabel] = useState(" ");


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/auth/register`, { username, email, password });

            console.log('Успешно отправлено:', response.data);
        } catch (error) {
            console.error('Ошибка запроса:', error);
        }
    };

    const handleInputPassword = async (repeatPassword: string) => {
        setPassword(password)
        if(password != repeatPassword) {
            setPasswordLabel("Passwords don't match.");
        } else {
            setPasswordLabel('');
        }
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
                                onChange={(e) => handleInputPassword(e.target.value)}
                                required
                                className={styles.input}
                            />
                        </div>
                        <label className={styles.passwordLabel}>{passwordLabel}</label>
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