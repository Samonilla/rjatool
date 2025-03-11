const HowItWorks: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Judicial Bias Detection</h3>
                        <p className="text-gray-600">
                            Identifies instances where a judge, attorney, police officer, or expert witness showed bias based on race, ethnicity, or national origin.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Racially Coded Language</h3>
                        <p className="text-gray-600">
                            Detects racially coded statements made against the defendant during trial, including contextual nuances specific to local communities.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Charge Comparison</h3>
                        <p className="text-gray-600">
                            Compares severity of charges against similar cases in the same county to identify potential disparities in prosecution.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Sentencing Analysis</h3>
                        <p className="text-gray-600">
                            Analyzes whether the court imposed a more severe sentence compared to similarly situated cases in the same county.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks