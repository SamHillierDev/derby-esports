const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="bg-gradient-to-b from-[#0a0a0a] to-black py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Our <span className="gradient-text">Sponsors</span>
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-[#ff0055] to-[#00ccff]"></div>
          <p className="text-lg text-white/80">
            We're proud to partner with industry-leading brands who support our
            mission and help us achieve greatness.
          </p>
        </div>

        <div className="mb-16 rounded-xl border border-white/10 bg-white/5 p-8">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center">
                <img
                  src="/assets/images/cs2team-logo.png"
                  alt="CS2.TEAM"
                  className="h-16"
                />
                <span className="ml-4 rounded-full bg-[#00ccff]/20 px-3 py-1 text-sm text-[#00ccff]">
                  PREMIER SPONSOR
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-bold">CS2.TEAM</h3>
              <p className="mb-6 text-white/80">
                Esports team-finding platform and social network for
                Counter-Strike 2, enabling aspiring players to find teams or
                create their own.
              </p>
              <a
                href="https://cs2.team"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#FF8100] px-4 py-2 font-bold text-white shadow-inner shadow-orange-300 transition duration-300 hover:bg-orange-600 hover:shadow-orange-400"
              >
                Visit CS2.TEAM
              </a>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/assets/images/cs2team-logo.png"
                alt="CS2.TEAM"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
