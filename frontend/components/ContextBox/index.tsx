import { useRouter } from 'next/router';
import Analytics from './FitnessTracker';
import Dependencies from './BloodTests';
import FitnessTracker from './FitnessTracker';
import Demo from './MedicalImageRecords';
import BloodTests from './BloodTests';
import VaccinationRecords from './VaccinationRecords';
import MedicalImageRecords from './MedicalImageRecords';

type Props = {
    activeTab: number;
};

export default function ContentBox({ activeTab }: Props) {
    const Content = () => {
        switch (activeTab) {
            case 0:
                return <FitnessTracker />;
            case 1:
                return <BloodTests />;
            case 2:
                return <VaccinationRecords />;
            case 3:
                return <MedicalImageRecords />;
            default:
                return <div>Error</div>;
        }
    };

    return <Content />;
}
