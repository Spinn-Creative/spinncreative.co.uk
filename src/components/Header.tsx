import Navbar from '@/components/Navbar';

export default function Header(): JSX.Element {
    // Explicit return type
    return (
        <header className="header">
            <div className="md:container">
                <Navbar />
            </div>
        </header>
    );
}
