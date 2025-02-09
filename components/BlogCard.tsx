import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { ArrowUpRight } from "lucide-react";

export const BlogCard = ({
  className,
  title,
  description,
  index = '01'
}: {
  className?: string;
  title: string;
  description: string;
  index?: string;
}) => {
  return (
    <div
      className={cn(
        className,
        "rounded-xl overflow-hidden p-6 bg-gradient-to-tl from-indigo-50/50 to-neutral-50"
      )}
    >
      <div className="text-xl text-indigo-500/70 underline mb-4">{index}</div>
      <h3 className="w-fit text-xl font-semibold tracking-tight mb-2">
        {title}
      </h3>

      <p className="text-xs text-justify text-ellipsis line-clamp-2">{description}</p>

      <Button className="mt-6" variant={'link'} RightIcon={<ArrowUpRight size={18} />}>
        Ler mais
      </Button>
    </div>
  );
};
