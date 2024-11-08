// pages/logout.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LogoutPage = () => {
    const router = useRouter();

    useEffect(() => {
        // Perform logout logic here (e.g., clearing user session)
        console.log('User  logged out');
        // Redirect to login page after logout
        router.push('/login');
    }, [router]);

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
};

export default LogoutPage;