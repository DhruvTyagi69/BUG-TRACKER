// components/Login.js
import { useState } from 'react';
import styles from '../styles/Login.module.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic (e.g., redirect to dashboard)
        console.log('Logging in:', { username, password });
        // Redirect to dashboard on login
        window.location.href = '/dashboard'; 
    };

    return (
        <div className={styles.login}>
            <div className={styles['login-container']}>
                <h1 className={styles['login-title']}>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        className={styles['login-input']}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={styles['login-input']}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className={styles['login-button']}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;