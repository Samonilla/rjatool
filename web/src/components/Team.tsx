interface TeamMember {
    name: string;
    position: string;
    linkedin?: string;
    img?: string;
}

const Team: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            name: "Aarya Mukherjee",
            position: "Program Manager",
            linkedin: "https://www.linkedin.com/in/aarya-mukherjee-293089251/",
            img: "",
        },
        {
            name: "Maya Howard",
            position: "Project Manager",
            linkedin: "https://www.linkedin.com/in/maya-dale-howard-651a6129b/",
            img: "",
        },
        {
            name: "Alex Forman",
            position: "Operations Developer",
            linkedin: "https://www.linkedin.com/in/alex-k-forman/",
            img: "https://lh3.googleusercontent.com/a-/ALV-UjUdw9zak-oXltCXJh_amJ1qFsx9ACUuxP41u6LmRRRA_cumaVU",
        },
        {
            name: "Stephen Okita",
            position: "Systems Developer",
            linkedin: "https://www.linkedin.com/in/stephen-okita/",
            img: "https://lh3.googleusercontent.com/a/ACg8ocJ6Hq6XX_vvnrYsUbw28dTNLPNVAYbaToSTflwLF_hz3O1eh37J=s83-c-mo",
        },
    ];

    return (
        <section id="team" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Our Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md text-center"
                        >
                            {member.img ? (
                                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-500">
                                    <svg
                                        className="h-12 w-12"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        ></path>
                                    </svg>
                                </div>
                            )}
                            <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                            <p className="text-gray-500 mb-3">{member.position}</p>
                            {member.linkedin && (
                                <div className="flex justify-center">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-indigo-600"
                                        aria-label={`LinkedIn profile of ${member.name}`}
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
