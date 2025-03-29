import Socials from "./Socials";

const pages = [
  {
    section: "Pages",
    links: [
      { href: "#about", label: "About Us" },
      { href: "#team", label: "Our Team" },
      { href: "#sponsors", label: "Sponsors" },
      { href: "#tournaments", label: "Tournaments" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    section: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <a
              href="https://derbyesports.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mb-4 flex items-center gap-2">
                <img
                  src="/assets/images/derby-esports-icon.png"
                  alt="Derby Esports"
                  className="h-10 w-10"
                />
                <span className="gradient-text text-xl font-bold">
                  DERBY ESPORTS
                </span>
              </div>
            </a>
            <p className="mb-6 max-w-md text-white/70">
              Derby Esports is a professional competitive esports organisation
              and gaming community located in the United Kingdom.
            </p>
            <Socials />
          </div>

          {pages.map(({ section, links }) => (
            <div key={section}>
              <ul className="space-y-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 md:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Derby Esports. All rights
            reserved.
          </p>
          <a href="https://cs2.team" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-1">
              <p className="text-md text-white md:mt-0">Powered by</p>
              <img
                src="/assets/images/cs2team-title.png"
                alt="CS2.TEAM"
                className="h-8"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
