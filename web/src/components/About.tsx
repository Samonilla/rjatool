const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About the RJA Tool</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            The Racial Justice Act (RJA) tool allows users to upload legal documents for a criminal case and identifies potential RJA claims that may be present. By training on prior RJA cases and broader legal frameworks, the tool searches for and identifies instances of racial bias within court transcripts and related paperwork.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Additionally, it compares conviction and sentencing in a given case with similar cases in the same county, producing evidence of potential RJA violations under claims 3 and 4 of the act.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            This tool aims to assist public defenders by relieving the burden of searching through lengthy transcripts to find potential RJA claims. It streamlines the prima facie process by making preparatory work more efficient. The tool can also help family members and loved ones of incarcerated Californians identify necessary evidence for a habeas petition.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About