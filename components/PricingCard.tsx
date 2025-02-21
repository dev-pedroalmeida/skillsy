import { Check } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export const PricingCard = ({
  className,
  isPremium = false,
  isPopular = false,
  perMonth = true,
  title,
  price,
  description,
  includesList,
}: {
  className?: string;
  isPremium?: boolean;
  isPopular?: boolean;
  perMonth?: boolean;
  title: string;
  price: string;
  description: string;
  includesList: string[];
}) => {
  return (
    <div
      className={cn(
        className,
        "flex flex-col p-6 rounded-2xl border-2 w-[380px] relative",
        isPremium
          ? "border-indigo-400 bg-gradient-to-bl from-indigo-400 to-red-500"
          : "border-gray-200"
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <h3
          className={cn(
            "text-sm md:text-base font-semibold tracking-wide",
            isPremium && "text-gray-50"
          )}
        >
          {title}
        </h3>
        {isPopular && (
          <div className="w-fit bg-gradient-to-l from-indigo-400 to-red-500 text-neutral-50 text-sm py-1 px-2 rounded-lg">
            Mais popular
          </div>
        )}
      </div>
      <p className={cn("font-bold text-2xl md:text-3xl mb-8", isPremium && "text-neutral-50")}>
        R${price}
        <span
          className={cn(
            "text-sm md:text-base font-normal",
            isPremium ? "text-gray-50" : "text-gray-500"
          )}
        >
          {perMonth ? " por mês" : " por ano"}
        </span>
      </p>
      <p className={cn("font-bold mb-1 text-sm md:text-base", isPremium && "text-neutral-50")}>
        {description}
      </p>
      <ul className="flex flex-col flex-1 gap-2 mb-8">
        {includesList.map((text, index) => {
          return (
            <li
              key={index}
              className={cn(
                "flex items-center gap-1 text-sm md:text-base",
                isPremium && "text-gray-50"
              )}
            >
              <div
                className={cn(
                  "rounded p-1",
                  isPremium ? "bg-gray-900" : "bg-gray-200"
                )}
              >
                <Check size={12} strokeWidth={6} />
              </div>
              {text}
            </li>
          );
        })}
      </ul>
      <Button className="w-full" variant={isPremium ? "default" : "secondary"}>
        Comece com o {title}
      </Button>
    </div>
  );
};
