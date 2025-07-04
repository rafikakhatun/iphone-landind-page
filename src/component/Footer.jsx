import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer 
                className="px-12 py-15 flex flex-col md:flex-row justify-between items-center bg-blue-50 mt-15"
                data-aos="fade-up" // entire footer fades in on scroll
            >
                {/* Brand Info */}
                <div data-aos="fade-right"> {/* brand name slides in from right */}
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                        iPhoneWorld
                    </h1>
                    <p className="italic text-gray-600">
                        Your trusted destination for Apple devices.
                    </p>
                </div>

                {/* Navigation Links */}
                <ul 
                    className="mt-10 space-y-2 text-gray-600"
                    data-aos="fade-up" // nav links fade up
                >
                    <li className="text-lg hover:underline cursor-pointer"><a href="#">Home</a></li>
                    <li className="text-lg hover:underline cursor-pointer"><a href="#">Shop</a></li>
                    <li className="text-lg hover:underline cursor-pointer"><a href="#">About</a></li>
                    <li className="text-lg hover:underline cursor-pointer"><a href="#">Contact</a></li>
                </ul>

                {/* Contact Info */}
                <div 
                    className="mt-10 space-y-2 text-gray-600 text-lg"
                    data-aos="fade-left" // contact info slides in from left
                >
                    <p>Address: 123 Mobile Street, Tech City, India</p>
                    <p>Phone: +91-9876543210</p>
                    <p>Email: support@mobileshop.com</p>
                </div>

                {/* Social Icons */}
                <div 
                    className="flex gap-4 mt-15 text-3xl"
                    data-aos="zoom-in" // social icons zoom in
                >
                    <a href="#"><FaFacebook className="text-blue-700" /></a>
                    <a href="#"><FaInstagram className="text-pink-500" /></a>
                    <a href="#"><FaTwitter className="text-blue-500" /></a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
