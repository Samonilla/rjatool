const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {currentYear} RJA Tool Project. All rights reserved.</p>
                {/* <div className="mt-4 flex justify-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer