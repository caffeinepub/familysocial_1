import { type ReactNode, createContext, useContext, useState } from "react";

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  rateFromUSD: number; // How many units of this currency = 1 USD
  locale: string;
}

// Realistic exchange rates relative to USD (approx Mar 2026)
export const CURRENCIES: Currency[] = [
  {
    code: "PKR",
    symbol: "₨",
    name: "Pakistani Rupee",
    rateFromUSD: 278,
    locale: "ur-PK",
  },
  {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee",
    rateFromUSD: 83.5,
    locale: "en-IN",
  },
  {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    rateFromUSD: 1,
    locale: "en-US",
  },
  {
    code: "EUR",
    symbol: "€",
    name: "Euro",
    rateFromUSD: 0.92,
    locale: "de-DE",
  },
  {
    code: "GBP",
    symbol: "£",
    name: "British Pound",
    rateFromUSD: 0.79,
    locale: "en-GB",
  },
  {
    code: "AED",
    symbol: "د.إ",
    name: "UAE Dirham",
    rateFromUSD: 3.67,
    locale: "ar-AE",
  },
  {
    code: "SAR",
    symbol: "﷼",
    name: "Saudi Riyal",
    rateFromUSD: 3.75,
    locale: "ar-SA",
  },
  {
    code: "CAD",
    symbol: "C$",
    name: "Canadian Dollar",
    rateFromUSD: 1.36,
    locale: "en-CA",
  },
  {
    code: "AUD",
    symbol: "A$",
    name: "Australian Dollar",
    rateFromUSD: 1.53,
    locale: "en-AU",
  },
  {
    code: "JPY",
    symbol: "¥",
    name: "Japanese Yen",
    rateFromUSD: 149.5,
    locale: "ja-JP",
  },
  {
    code: "CNY",
    symbol: "¥",
    name: "Chinese Yuan",
    rateFromUSD: 7.24,
    locale: "zh-CN",
  },
  {
    code: "BRL",
    symbol: "R$",
    name: "Brazilian Real",
    rateFromUSD: 4.97,
    locale: "pt-BR",
  },
  {
    code: "MXN",
    symbol: "MX$",
    name: "Mexican Peso",
    rateFromUSD: 17.2,
    locale: "es-MX",
  },
  {
    code: "IDR",
    symbol: "Rp",
    name: "Indonesian Rupiah",
    rateFromUSD: 15600,
    locale: "id-ID",
  },
  {
    code: "NGN",
    symbol: "₦",
    name: "Nigerian Naira",
    rateFromUSD: 1540,
    locale: "en-NG",
  },
  {
    code: "ZAR",
    symbol: "R",
    name: "South African Rand",
    rateFromUSD: 18.8,
    locale: "en-ZA",
  },
  {
    code: "KES",
    symbol: "KSh",
    name: "Kenyan Shilling",
    rateFromUSD: 129,
    locale: "en-KE",
  },
  {
    code: "EGP",
    symbol: "E£",
    name: "Egyptian Pound",
    rateFromUSD: 30.9,
    locale: "ar-EG",
  },
  {
    code: "BDT",
    symbol: "৳",
    name: "Bangladeshi Taka",
    rateFromUSD: 110,
    locale: "bn-BD",
  },
  {
    code: "MYR",
    symbol: "RM",
    name: "Malaysian Ringgit",
    rateFromUSD: 4.72,
    locale: "ms-MY",
  },
  {
    code: "THB",
    symbol: "฿",
    name: "Thai Baht",
    rateFromUSD: 35.1,
    locale: "th-TH",
  },
  {
    code: "PHP",
    symbol: "₱",
    name: "Philippine Peso",
    rateFromUSD: 56.2,
    locale: "en-PH",
  },
  {
    code: "VND",
    symbol: "₫",
    name: "Vietnamese Dong",
    rateFromUSD: 24500,
    locale: "vi-VN",
  },
  {
    code: "TRY",
    symbol: "₺",
    name: "Turkish Lira",
    rateFromUSD: 32.1,
    locale: "tr-TR",
  },
  {
    code: "RUB",
    symbol: "₽",
    name: "Russian Ruble",
    rateFromUSD: 91.5,
    locale: "ru-RU",
  },
  {
    code: "PLN",
    symbol: "zł",
    name: "Polish Zloty",
    rateFromUSD: 4.01,
    locale: "pl-PL",
  },
  {
    code: "SEK",
    symbol: "kr",
    name: "Swedish Krona",
    rateFromUSD: 10.5,
    locale: "sv-SE",
  },
  {
    code: "CHF",
    symbol: "Fr",
    name: "Swiss Franc",
    rateFromUSD: 0.9,
    locale: "de-CH",
  },
  {
    code: "SGD",
    symbol: "S$",
    name: "Singapore Dollar",
    rateFromUSD: 1.34,
    locale: "en-SG",
  },
  {
    code: "HKD",
    symbol: "HK$",
    name: "Hong Kong Dollar",
    rateFromUSD: 7.82,
    locale: "zh-HK",
  },
  {
    code: "KRW",
    symbol: "₩",
    name: "South Korean Won",
    rateFromUSD: 1330,
    locale: "ko-KR",
  },
];

// PKR to USD rate (all internal prices stored in PKR)
const PKR_TO_USD = 1 / 278;

function detectCurrency(): Currency {
  try {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    const lang = navigator.language || locale;

    if (lang.includes("ur") || lang.includes("PK")) return CURRENCIES[0]; // PKR
    if (lang.includes("IN") || lang.includes("hi")) return CURRENCIES[1]; // INR
    if (lang.includes("AE") || lang.includes("ar-AE")) return CURRENCIES[5]; // AED
    if (lang.includes("SA") || lang.includes("ar-SA")) return CURRENCIES[6]; // SAR
    if (lang.includes("GB")) return CURRENCIES[4]; // GBP
    if (lang.includes("CA")) return CURRENCIES[7]; // CAD
    if (lang.includes("AU")) return CURRENCIES[8]; // AUD
    if (lang.includes("JP")) return CURRENCIES[9]; // JPY
    if (lang.includes("CN")) return CURRENCIES[10]; // CNY
    if (
      lang.includes("DE") ||
      lang.includes("FR") ||
      lang.includes("IT") ||
      lang.includes("ES")
    )
      return CURRENCIES[3]; // EUR
    if (lang.includes("BR") || lang.includes("pt")) return CURRENCIES[11]; // BRL

    return CURRENCIES[2]; // Default to USD
  } catch {
    return CURRENCIES[2]; // USD fallback
  }
}

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (pkrAmount: number) => string;
  formatCurrency: (amount: number) => string;
  convertFromPKR: (pkrAmount: number) => number;
  convertFromINR: (inrAmount: number) => number;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem("fs_currency");
    if (saved) {
      const found = CURRENCIES.find((c) => c.code === saved);
      if (found) return found;
    }
    return detectCurrency();
  });

  const handleSetCurrency = (c: Currency) => {
    setCurrency(c);
    localStorage.setItem("fs_currency", c.code);
  };

  // Use closure variable for currency
  const c = currency;

  const INR_TO_USD = 1 / 83.5;

  const convertFromINR = (inrAmount: number): number => {
    const usdAmount = inrAmount * INR_TO_USD;
    return usdAmount * c.rateFromUSD;
  };

  const formatCurrency = (inrAmount: number): string => {
    const usdAmount = inrAmount * INR_TO_USD;
    const converted = usdAmount * c.rateFromUSD;
    const noDecimals =
      converted >= 1000 || ["IDR", "VND", "NGN", "KRW"].includes(c.code);
    try {
      return new Intl.NumberFormat(c.locale, {
        style: "currency",
        currency: c.code,
        minimumFractionDigits: 0,
        maximumFractionDigits: noDecimals ? 0 : 2,
      }).format(converted);
    } catch {
      return `${c.symbol}${converted.toLocaleString(undefined, { maximumFractionDigits: noDecimals ? 0 : 2 })}`;
    }
  };

  const convertFromPKR = (pkrAmount: number): number => {
    const usdAmount = pkrAmount * PKR_TO_USD;
    return usdAmount * c.rateFromUSD;
  };

  const formatPrice = (pkrAmount: number): string => {
    const usdAmount = pkrAmount * PKR_TO_USD;
    const converted = usdAmount * c.rateFromUSD;

    // For currencies with very large values, don't show decimals
    const noDecimals =
      converted >= 1000 ||
      c.code === "IDR" ||
      c.code === "VND" ||
      c.code === "NGN" ||
      c.code === "KRW";

    try {
      return new Intl.NumberFormat(c.locale, {
        style: "currency",
        currency: c.code,
        minimumFractionDigits: noDecimals ? 0 : 0,
        maximumFractionDigits: noDecimals ? 0 : 2,
      }).format(converted);
    } catch {
      return `${c.symbol}${converted.toLocaleString(undefined, { maximumFractionDigits: noDecimals ? 0 : 2 })}`;
    }
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency: c,
        setCurrency: handleSetCurrency,
        formatPrice,
        formatCurrency,
        convertFromINR,
        convertFromPKR,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
