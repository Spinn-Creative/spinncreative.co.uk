import Hero from '@/components/Hero';
import OurServices from '@/components/OurServices';
import Jumbotron from '@/components/Jumbotron';

export default function Home(): JSX.Element {
    return (
        <>
            <Hero />
            <OurServices />
            <Jumbotron />
        </>
    );
}
