import React from 'react';
import pic from '../../assets/bg-shadow.png';

const Footer = () => {
    return (
        <div className="relative">
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 relative">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <p>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Service</a>
                </nav>

                {/* Footer Subscribe Section */}
                <nav className="footer-subscribe mt-auto">
                    <h6 className="footer-title">Subscribe</h6>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <div className="flex justify-center">
                        <div className="flex">
                            <input type="text" placeholder="Write here" className="bg-white rounded-xl text-black px-2 py-1" />
                            <button className="bg-yellow-300 py-1 px-3 rounded-xl font-bold">Subscribe</button>
                        </div>
                    </div>
                </nav>
            </footer>

            {/* Background image and call-to-action section */}
            <div className="absolute top-[-90px] md:left-1/2 left-2/5 md:transform -translate-x-1/5 transform-translate-1/2 space-y-4 border border-gray-200 max-w-4xl p-4 bg-white shadow-lg rounded-xl"
                style={{ backgroundImage: `url(${pic})` }}>
                <p className="text-center font-bold text-xl">Subscribe to our Newsletter</p>
                <p className="text-center">Get the latest updates and news right in your inbox!</p>
                <div className="flex justify-center">
                    <div className="flex">
                        <input type="text" placeholder="Write here" className="bg-white rounded-xl text-black px-2 py-1" />
                        <button className="bg-yellow-300 py-1 px-3 rounded-xl font-bold">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
