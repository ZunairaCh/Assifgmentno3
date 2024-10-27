// components/MainSection.js
const MainSection = () => {
    return (
        <main className="flex flex-col items-center justify-center py-32 bg-gray-700">
            {/* Hero Section */}
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold text-black mb-4">Welcome to My Business</h1>
                <p className="text-lg bg-white 0 mb-6">
                    We provide the best solutions for your business needs.
                </p>
                <a href="#services" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200">
                    Get Started
                </a>
            </section>

            {/* Features Section */}
            <section id="services" className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-2">Feature 1</h2>
                    <p className="text-gray-600">
                        Description of feature 1 that highlights its benefits.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-2">Feature 2</h2>
                    <p className="text-gray-600">
                        Description of feature 2 that highlights its benefits.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-2">Feature 2</h2>
                    <p className="text-gray-600">
                        Description of feature 3 that highlights its benefits.
                    </p>
                </div>
               
            </section>
        </main>
    );
};

export default MainSection;


