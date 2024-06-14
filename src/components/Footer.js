import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto py-12 px-4">
                <div className="flex flex-wrap justify-between">

                    {/* Left side: Company logo & description */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <span className="text-5xl">🚀</span>
                        <h3 className="text-xl font-bold mb-4 mt-2">TerraVortex</h3>
                        <p className="text-gray-400">
                            Pioneering the future of Quality control. TerraVortex is your trusted partner in ensuring your products do not go to waste.
                        </p>
                    </div>

                    {/* Center: Useful Links */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                        <ul className="space-y-2">
                            <li><a onClick={() => navigate("/about")} className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a onClick={() => navigate("/offer")} className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                            <li><a onClick={() => navigate("/contact")} className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right side: Contact Information */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                        <ul className="space-y-2">
                            <li><span className="text-gray-400">Champaign, Illinois, USA</span></li>
                            <li><a className="text-gray-400 hover:text-white transition-colors">+1 (563)-223 7343</a></li>
                            <li><a className="text-gray-400 hover:text-white transition-colors">segbinai@gmail.com</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom section: copyrights */}
                <div className="mt-12 border-t pt-6 text-gray-400">
                    <p className="text-center">&copy; {new Date().getFullYear()} TerraVortex. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;