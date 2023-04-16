import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from './Footer';
import NavBar from './NavBar';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col h-screen container mx-auto">
            <Head>
                <title>Dataleap</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
