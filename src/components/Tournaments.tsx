const Tournaments = () => {
  const tournaments = [
    {
      name: "CS2 Pro League Season 5",
      date: "June 15-30, 2024",
      location: "Berlin, Germany",
      status: "Upcoming",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      name: "Global Esports Masters",
      date: "May 5-12, 2024",
      location: "Stockholm, Sweden",
      status: "Qualified",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      name: "Winter Championship 2024",
      date: "January 20-28, 2024",
      location: "Los Angeles, USA",
      status: "2nd Place",
      image: "/placeholder.svg?height=300&width=500",
    },
  ];

  return (
    <section id="tournaments" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            <span className="gradient-text">Tournaments</span> & Events
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-[#ff0055] to-[#00ccff]"></div>
          <p className="text-lg text-white/80">
            Follow our journey through competitive tournaments around the world
            as we battle for glory and championship titles.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tournaments.map((tournament, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#00ccff]/50"
            >
              <div className="relative">
                <img
                  src={tournament.image || "/placeholder.svg"}
                  alt={tournament.name}
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      tournament.status === "Upcoming"
                        ? "bg-[#ffcc00]/20 text-[#ffcc00]"
                        : tournament.status === "Qualified"
                          ? "bg-[#00ccff]/20 text-[#00ccff]"
                          : "bg-[#ff0055]/20 text-[#ff0055]"
                    }`}
                  >
                    {tournament.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{tournament.name}</h3>
                <div className="mb-1 flex items-center text-white/70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">{tournament.date}</span>
                </div>
                <div className="flex items-center text-white/70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">{tournament.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn-secondary">
            View All Tournaments
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
