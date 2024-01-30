import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <header className="bg-white text-black fixed top-0 left-0 right-0 z-20">
            <div className="container mx-auto p-4">
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
