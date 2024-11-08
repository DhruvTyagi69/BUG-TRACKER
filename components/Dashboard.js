// components/Dashboard.js
import Link from 'next/link';
import styles from '../styles/Dashboard.module.css';
import TaskManager from './TaskManager';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.sidebar}>
                <h2>Dashboard</h2>
                <Link href="/dashboard">Home</Link>
                <Link href="/settings">Settings</Link>
                <Link href="/logout">Logout</Link>
            </div>
            <div className={styles['main-content']}>
                <div className={styles.header}>
                    <h1>Welcome to the Dashboard</h1>
                </div>
                <TaskManager />
            </div>
        </div>
    );
};

export default Dashboard;