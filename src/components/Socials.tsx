import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaSteam,
  FaTwitch,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const socials = [
  {
    icon: FaDiscord,
    href: "https://discord.com/invite/XfZHVfPr9C",
    label: "Discord",
  },
  {
    icon: FaSteam,
    href: "https://steamcommunity.com/groups/DerbyEsports",
    label: "Steam",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/DerbyEsports",
    label: "X",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/DerbyEsports",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com/DerbyEsports",
    label: "YouTube",
  },
  {
    icon: FaTwitch,
    href: "https://twitch.tv/DerbyEsports",
    label: "Twitch",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/company/DerbyEsports",
    label: "LinkedIn",
  },
];

type SocialsProps = {
  only?: string[];
  size?: number;
  className?: string;
};

const Socials: React.FC<SocialsProps> = ({
  only,
  size = 20,
  className = "",
}) => {
  const filtered = only
    ? socials.filter((social) => only.includes(social.label))
    : socials;

  return (
    <div className={`flex gap-4 ${className}`}>
      {filtered.map(({ icon: Icon, href, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 transition-colors hover:text-white"
          aria-label={label}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
