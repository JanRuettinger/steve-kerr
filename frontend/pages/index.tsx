import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@clerk/nextjs';

const Home: NextPage = () => {
    const { isLoaded, isSignedIn, getToken } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isLoaded || isSignedIn) {
            // You can handle the loading or signed state separately
            router.push({
                pathname: '/dashboard',
            });
        }
    }, [isLoaded, isSignedIn, router]);

    return (
        <Layout>
            <div className="w-2/3 mx-auto">
                <h1 className="text-center">Landing Page</h1>
                <div className="text-center mt-12">
                    <Link href="/dashboard">
                        <button className="bg-picton-blue-600 hover:bg-picton-blue-400 p-2 rounded-md text-white"></button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
