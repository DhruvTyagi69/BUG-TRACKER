// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push('/login'); // Redirect to login page
    }, [router]);

    return null; // No content to display
}