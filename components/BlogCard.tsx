import { cn } from "@/lib/utils";

export const BlogCard = ({
  className,
  title,
  description,
}: {
  className?: string;
  title: string;
  description: string;
}) => {
  return (
    <div className={cn(className, "border-2 border-gray-200")}>
      <div className={"h-16 w-full"}>
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
          </div>
        </div>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
