const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Racial Justice Act Tool</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Leveraging technology to identify potential racial bias in legal proceedings and 
          expand access to justice under California's Racial Justice Act
        </p>
        <div>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-gray-100 transition mr-4 mb-2">
            Learn More
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition mb-2">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero