import Link from "next/link";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: "primary" | "secondary" | "dark" | "white";
  onClick?: () => void;
  fullWidth?: boolean;
  external?: boolean;
}

const variants = {
  primary: "bg-[#A06811] text-white text-sm font-bold px-5 py-2 rounded-md",
  secondary: "bg-white text-[#A06811] text-sm font-bold px-5 py-2 rounded-md border border-[#A06811]",
  dark: "bg-[#010101] text-white text-sm font-bold px-5 py-2 rounded-md",
  white: "bg-white text-black text-sm font-bold px-5 py-2 rounded-md",
};

export default function Button({
  label,
  href,
  variant = "primary",
  onClick,
  fullWidth = false,
  external = false,
}: ButtonProps) {
  const className = [variants[variant], fullWidth ? "block w-full text-center" : "inline-block"].join(" ");

  if (href) {
    if (external) {
      return (
        <a href={href} onClick={onClick} className={className} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}