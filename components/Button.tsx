import Link from "next/link";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  fullWidth?: boolean;
}

const variants = {
  primary: "bg-white text-black text-sm font-bold px-5 py-2 rounded-md",
  secondary: "bg-white text-black px-6 py-3 text-sm font-medium",
};

export default function Button({
  label,
  href,
  variant = "primary",
  onClick,
  fullWidth = false,
}: ButtonProps) {
  const className = [variants[variant], fullWidth ? "block w-full text-center" : "inline-block"].join(" ");

  if (href) {
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