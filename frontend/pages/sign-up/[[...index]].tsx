import { SignUp } from '@clerk/nextjs';
import Layout from '../../components/layout/Layout';

const SignUpPage = () => (
    <Layout>
        <div className="flex flex-row justify-center mt-32">
            <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
        </div>
    </Layout>
);

export default SignUpPage;
