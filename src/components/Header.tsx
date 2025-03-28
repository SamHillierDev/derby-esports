import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/derby-esports-icon.png"
            alt="Derby Esports Logo"
            className="h-10 w-10"
          />
          <span className="gradient-text text-xl font-bold">DERBY ESPORTS</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-white/80 transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="#team"
            className="text-white/80 transition-colors hover:text-white"
          >
            Team
          </a>
          <a
            href="#sponsors"
            className="text-white/80 transition-colors hover:text-white"
          >
            Sponsors
          </a>
          <a
            href="#tournaments"
            className="text-white/80 transition-colors hover:text-white"
          >
            Tournaments
          </a>
          <a
            href="#contact"
            className="text-white/80 transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>

        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-b border-white/10 bg-black/95 md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <a
              href="#about"
              className="py-2 text-white/80 transition-colors hover:text-white"
            >
              About
            </a>
            <a
              href="#team"
              className="py-2 text-white/80 transition-colors hover:text-white"
            >
              Team
            </a>
            <a
              href="#sponsors"
              className="py-2 text-white/80 transition-colors hover:text-white"
            >
              Sponsors
            </a>
            <a
              href="#tournaments"
              className="py-2 text-white/80 transition-colors hover:text-white"
            >
              Tournaments
            </a>
            <a
              href="#contact"
              className="py-2 text-white/80 transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
