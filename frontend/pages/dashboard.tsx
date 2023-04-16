import { useAuth } from '@clerk/nextjs';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import TopNavBar from '../components/TopNavBar';
import ContentBox from '../components/ContextBox';

const tabs = [
    {
        name: 'Fitness and Health Trackers',
        href: '#fitness_and_health',
        implemented: true,
    },
    { name: 'Blood tests', href: '#blood_tests', implemented: true },
    {
        name: 'Vaccination Records',
        href: '#vaccination_records',
        implemented: true,
    },
    {
        name: 'Medical Image Records',
        href: '#medical_image_records',
        implemented: false,
    },
    // { name: 'Dependencies', href: '#', implemented: false },
    // { name: 'Analytics', href: '#', implemented: false },
];

const DashboardPage: NextPage = () => {
    const { isLoaded, isSignedIn, getToken } = useAuth();
    const router = useRouter();
    const [topNavBarTabs, setTopNavBarTabs] = useState(tabs);
    const [activeTab, setActiveTab] = useState<number>(0);

    useEffect(() => {
        if (!isLoaded || !isSignedIn) {
            // You can handle the loading or signed state separately
            router.push({
                pathname: '/sign-in',
            });
        }
    }, [isLoaded, isSignedIn, router]);

    return (
        <Layout>
            <div className="w-2/3 mx-auto">
                <h1 className="text-center text-3xl font-bold my-12">
                    Almighty Dashboard
                </h1>

                <TopNavBar
                    navBarTabs={topNavBarTabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <div className="flex flex-row mt-12">
                    <ContentBox activeTab={activeTab} />
                </div>
                {/* <div className="flex flex-row justify-between">
                    <div className="border-b-2 hover:border-picton-blue-600 border-gray-600">
                        Fitness and Health Tracker
                    </div>
                    <div>Blood tests</div>
                    <div>Vaccination Records</div>
                    <div>Medical Image Records coming soon</div>
                </div> */}
            </div>
        </Layout>
    );
};

export default DashboardPage;
