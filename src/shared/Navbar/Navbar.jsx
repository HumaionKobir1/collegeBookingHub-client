import { useState } from "react";
import logo from '../../images/bookinglogo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-blue-500">
            <div className="md:px-20 px-2 py-6">
                <nav className="flex items-center justify-between relative">

                {/* Logo and Name */}
                <Link to='/' className="flex items-center">
                    <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
                    <span className="text-white font-bold text-xl">CollageBookingHub</span>
                </Link>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button className="text-white" onClick={toggleMobileMenu}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <div className={`md:hidden absolute top-14 right-0 bg-blue-500 mt-2 rounded-md shadow-lg transition-width duration-300 ${isMobileMenuOpen ? "w-full" : "w-0"}`}>
                    <ul className="flex flex-col space-y-2 p-4">
                    <Link to='/'><li><a href="#home" className="text-white block hover:text-blue-200">Home</a></li></Link>
                    <Link to='/collage'><li><a href="#colleges" className="text-white block hover:text-blue-200">Colleges</a></li></Link>
                    <Link to='/admission'><li><a href="#admission" className="text-white block hover:text-blue-200">Admission</a></li></Link>
                    <Link to='/myCollage'><li><a href="#mycollege" className="text-white block hover:text-blue-200">My College</a></li></Link>
                    </ul>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex space-x-8">
                    <Link to='/'><li><a href="#home" className="text-white font-semibold hover:text-blue-200 transition duration-300">Home</a></li></Link>
                    <Link to='/collage'><li><a href="#colleges" className="text-white font-semibold hover:text-blue-200 transition duration-300">Colleges</a></li></Link>
                    <Link to='/admission'><li><a href="#admission" className="text-white font-semibold hover:text-blue-200 transition duration-300">Admission</a></li></Link>
                    <Link to='/myCollage'><li><a href="#mycollege" className="text-white font-semibold hover:text-blue-200 transition duration-300">My College</a></li></Link>
                </ul>
                <button className="hidden md:block bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-200 transition duration-300">Sign Up</button>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;