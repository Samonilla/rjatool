const ProjectGoals: React.FC = () => {
    return (
        <section id="goals" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Project Goals</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row mb-8 items-start">
                        <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 md:mb-0 md:mr-6 flex-shrink-0">1</div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Justice for the Incarcerated</h3>
                            <p className="text-gray-700">
                                With California's incarcerated population at approximately 90,000, our goal is to help bring more RJA cases to court, providing justice for those who may have experienced racial discrimination in their legal proceedings.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mb-8 items-start">
                        <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 md:mb-0 md:mr-6 flex-shrink-0">2</div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Develop Legal Precedent</h3>
                            <p className="text-gray-700">
                                Increasing the volume of RJA cases will help develop precedent regarding the barrier for successful Habeas Petition and Prima Facie filing, strengthening the legal framework for future cases.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mb-8 items-start">
                        <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 md:mb-0 md:mr-6 flex-shrink-0">3</div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Overcome Structural Barriers</h3>
                            <p className="text-gray-700">
                                By automating document analysis, our tool addresses the structural barrier of reviewing over 1,000 pages of legal documents per case, making the RJA more accessible and practical for mass implementation.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start">
                        <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 md:mb-0 md:mr-6 flex-shrink-0">4</div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Expand Access to Justice</h3>
                            <p className="text-gray-700">
                                We aim to make the tool accessible to attorneys, loved ones of those incarcerated, and incarcerated individuals themselves, democratizing access to RJA evaluations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectGoals