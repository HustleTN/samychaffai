import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  className = "",
  target,
  rel,
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`
        group
        relative
        flex
        items-center
        justify-center
        gap-3
        bg-[#C20000]
        px-6
        text-white
        transition-colors
        duration-300
        hover:bg-[#d60000]
        ${className}
      `}
    >
      {/* Top left */}
      <span className="pointer-events-none absolute left-0 top-0 h-[10px] w-[10px] border-l-2 border-t-2 border-white" />

      {/* Top right */}
      <span className="pointer-events-none absolute right-0 top-0 h-[10px] w-[10px] border-r-2 border-t-2 border-white" />

      {/* Bottom left */}
      <span className="pointer-events-none absolute bottom-0 left-0 h-[10px] w-[10px] border-b-2 border-l-2 border-white" />

      {/* Bottom right */}
      <span className="pointer-events-none absolute bottom-0 right-0 h-[10px] w-[10px] border-b-2 border-r-2 border-white" />

      <span>{children}</span>

      <ArrowUpRight
        size={21}
        strokeWidth={2}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
