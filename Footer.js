// components/Footer.js
        const Footer = () => {
            return (
                <footer className="bg-gray-800 text-white py-6 fixed bottom-0 left-0 right-0">
                    <div className="container mx-auto flex justify-end items-center">
                        <div>
                            <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            );
        };
        

export default Footer;
