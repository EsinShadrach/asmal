import { cn } from "~/lib/utils";

interface TypographyProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}
export function TypographyH1({
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
