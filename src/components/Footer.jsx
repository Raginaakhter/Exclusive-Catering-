import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5'>
            <section className="py-10 bg-gray-900 sm:pt-16 lg:pt-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
                        <div>
                            <p className="text-base text-gray-500">IMRUL Corporation</p>
                            <ul className="mt-8 space-y-4">
                                <li>
                                    <a href="/about" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> About </a>
                                </li>
                                <li>
                                    <a href="/Services" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Services</a>
                                </li>
                                <li>
                                    <a href="/blog" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Works </a>
                                </li>
                                <li>
                                    <a href="/contact" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Career </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-base text-gray-500">Help</p>
                            <ul className="mt-8 space-y-4">
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Customer Support </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Delivery Details </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Terms & Conditions </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Privacy Policy </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-base text-gray-500">Resources</p>
                            <ul className="mt-8 space-y-4">
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Free eBooks </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Development Tutorial </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> How to - Blog </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> YouTube Playlist </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-base text-gray-500">Extra Links</p>
                            <ul className="mt-8 space-y-4">
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Customer Support </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Delivery Details </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Terms & Conditions </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Privacy Policy </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="mt-16 mb-10 border-gray-800" />

                    <div className="flex flex-wrap items-center justify-between">
                        {/* Removed logo here */}

                        <ul className="flex items-center space-x-3 md:order-3">
                            {/* Social icons remain unchanged */}
                            <li>
                                <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                            {/* ... other social icons ... */}
                        </ul>

                        <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
                            © Copyright 2021, All Rights Reserved by RA Rasidantial
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;