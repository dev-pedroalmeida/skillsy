import { cn } from "@/lib/utils";

export const BentoGridContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  subtitle,
  description,
}: {
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-lg shadow-sm flex flex-col row-span-1",
        className
      )}
    >
      <div className="flex flex-1 w-full min-h-[6rem] rounded-xl bg-gray-50 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <header className="my-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </header>
      <p className="text-gray-800 text-pretty">{description}</p>
    </div>
  );
};
