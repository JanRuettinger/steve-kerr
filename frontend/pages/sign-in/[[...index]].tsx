import { SignIn } from '@clerk/nextjs';
import { NextPage } from 'next';
import Layout from '../../components/layout/Layout';

const SignInPage: NextPage = () => (
    <Layout>
        <div className="flex flex-row justify-center mt-32">
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>
    </Layout>
);

export default SignInPage;
