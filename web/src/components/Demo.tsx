const Demo: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Try the Demo</h2>
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <p className="text-gray-600 mt-2">Drag and drop case files here or click to upload</p>
            <p className="text-gray-500 text-sm mt-1">Supported formats: PDF, DOC, DOCX, TXT (Max size: 50MB)</p>
          </div>
          <div className="text-center">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50" disabled>
              Analyze Document (Coming Soon)
            </button>
            <p className="text-gray-500 text-sm mt-2">Demo functionality coming in future updates</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo