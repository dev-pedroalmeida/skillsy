import { cn } from "@/lib/utils";

export const BentoGridContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(
      "grid grid-cols-3 mx-16 gap-10", 
      className
    )}>
      {children}
    </div>
  );
};
