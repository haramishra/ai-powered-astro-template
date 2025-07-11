import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("size-10", className)}>
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="m256 177l-68-39V0h137v138zm-68-39L69 69L0 187l120 69l68-39zm204 118l120-69l-68-118l-119 69v79zm-136-79l-68 40v78l68 40l69-40v-78zm-136 79L0 325l68 118l120-69v-79zm205 39v79l119 69l68-118l-120-69zm-137 79v138h137V374l-69-39z"
        />
      </svg>
    </div>
  );
}
