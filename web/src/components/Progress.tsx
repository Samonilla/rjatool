const Progress: React.FC = () => {
    return (
        <section id="progress" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Current Progress</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Project Status</h3>
                        <p className="text-gray-700 mb-6">
                            The RJA tool has been in development for nearly a year now. The technology has been developed to identify racial bias in documents, however more data is needed for comparison capabilities regarding convictions and sentencing.
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                            <div className="bg-indigo-600 h-4 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                        <p className="text-sm text-gray-500">Development Progress: 80% Complete</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-4 text-black">Next Steps</h3>
                        <ul className="space-y-4">
                            <li className="flex">
                                <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span className="text-gray-700">Working with public defenders to begin implementation</span>
                            </li>
                            <li className="flex">
                                <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span className="text-gray-700">Focused data collection through outreach to the attorney general's office, court reporters, trial courts, and lawyers</span>
                            </li>
                            <li className="flex">
                                <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span className="text-gray-700">Building a substantial database of materials to train the tool and enable comparison functionality</span>
                            </li>
                            <li className="flex">
                                <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span className="text-gray-700">Finalizing back-end coding work for the pilot county implementation</span>
                            </li>
                            <li className="flex">
                                <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span className="text-gray-700">Expanding the tool to other California counties after successful pilot</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Progress