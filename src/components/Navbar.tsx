import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-[#FFF7E2] shadow-md h-20 px-24 fixed top-0 left-0 right-0 z-50">
            <div className="px-4 h-full w-full flex justify-between items-center">
                {/* Left Side: Logo */}
                <div className="text-3xl font-bold text-[#3A643B] tracking-widest uppercase">
                    amrutam
                </div>

                {/* Middle: Navigation Links */}
                <ul className="hidden md:flex space-x-6 text-gray-600">
                    <Link to="/">
                        <li className="text-xl font-semibold hover:text-gray-900 cursor-pointer">Home</li>
                    </Link>
                    <Link to="/find-doctors" >
                        <li className="text-xl font-bold hover:text-gray-900 cursor-pointer">Find Doctors</li>
                    </Link>
                    <li className="text-xl font-semibold hover:text-gray-900 cursor-pointer">About Us</li>
                </ul>

                {/* Right Side: Buttons */}
                <div className="flex space-x-4">
                    <button className="px-8 py-3 text-2xl font-semibold text-[#3A643B]  rounded-md border border-[#3A643B]">Login</button>
                    <button className="px-8 py-3 text-2xl font-semibold bg-[#3A643B] text-white border border-[#3A643B] rounded-md hover:bg-blue-100">Sign-up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
