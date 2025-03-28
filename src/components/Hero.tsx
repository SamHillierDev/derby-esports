const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/derby-esports-background.png"
          alt="Esports Arena"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div className="z-10 container mx-auto px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          <span className="gradient-text">DERBY ESPORTS</span>
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-white/80 md:text-2xl">
          Derby Esports is a professional competitive esports organisation and
          gaming community located in the United Kingdom.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href="#team" className="btn-primary">
            Meet Our Team
          </a>
          <a href="#join" className="btn-secondary">
            Join Derby Esports
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
