import { Check } from "lucide-react";
import { Button } from "./Button";

export const PricingCard = ({
  className,
  variant = "basic",
  popular = false,
  perMonth = true,
  title,
  price,
  description,
  includesList,
}: {
  className?: string;
  variant?: "premium" | "basic";
  popular?: boolean;
  perMonth?: boolean;
  title: string;
  price: string;
  description: string;
  includesList: string[];
}) => {
  return (
    <div className="p-6 rounded-2xl border-2 border-gray-200 w-[380px]">
      <h3 className="text-lg font-semibold tracking-wide mb-6">{title}</h3>
      <p className="font-bold text-3xl mb-12">
        R${price}
        <span className="text-base font-normal text-gray-500">
          {perMonth ? " por mês" : " por ano"}
        </span>
      </p>
      <p className="font-bold mb-1">{description}</p>
      <ul className="flex flex-col gap-2 mb-8">
        {includesList.map((text, index) => {
          return (
            <li key={index} className="flex items-center gap-1">
              <div className="bg-gray-200 rounded p-1">
                <Check size={12} />
              </div>
              {text}
            </li>
          );
        })}
      </ul>
      <Button className="w-full" variant={"secondary"}>
        Comece com o {title}
      </Button>
    </div>
  );
};
