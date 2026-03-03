import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { CURRENCIES, useCurrency } from "../contexts/CurrencyContext";

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-2 text-xs font-label font-semibold gap-1 text-muted-foreground hover:text-foreground"
          aria-label="Select currency"
        >
          <span>{currency.symbol}</span>
          <span className="hidden sm:inline">{currency.code}</span>
          <ChevronDown size={11} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 max-h-80 overflow-y-auto"
      >
        {CURRENCIES.map((c) => (
          <DropdownMenuItem
            key={c.code}
            onClick={() => setCurrency(c)}
            className={`flex items-center gap-2 text-xs font-label cursor-pointer ${
              c.code === currency.code
                ? "bg-primary/10 text-primary font-semibold"
                : ""
            }`}
          >
            <span className="w-5 text-center font-semibold text-muted-foreground">
              {c.symbol}
            </span>
            <span className="font-semibold">{c.code}</span>
            <span className="text-muted-foreground truncate">{c.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
