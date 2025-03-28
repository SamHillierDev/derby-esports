const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black to-[#0a0a0a] py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            About <span className="gradient-text">Derby Esports</span>
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-[#ff0055] to-[#00ccff]"></div>
          <p className="mb-8 text-lg text-white/80">
            Founded in 2020, Derby Esports has quickly risen to become one of
            the most formidable teams in competitive gaming. Our mission is to
            build a community of passionate gamers who strive for excellence in
            every match.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#00ccff]/50">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff0055]/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ff0055"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-center text-xl font-bold">
              Elite Performance
            </h3>
            <p className="text-center text-white/70">
              Our players are selected for their exceptional skill, strategic
              thinking, and ability to perform under pressure.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#00ccff]/50">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#00ccff]/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#00ccff"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-center text-xl font-bold">Team Synergy</h3>
            <p className="text-center text-white/70">
              We believe in the power of teamwork. Our players train together to
              develop unmatched coordination and communication.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#00ccff]/50">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ffcc00]/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ffcc00"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-center text-xl font-bold">
              Championship Mindset
            </h3>
            <p className="text-center text-white/70">
              We compete to win. Our track record of tournament victories speaks
              to our dedication and competitive spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
