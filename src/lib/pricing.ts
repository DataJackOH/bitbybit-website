export interface PricingTier {
  symbol: string;
  monthly: string;
  yearly: string;
  currency: string;
}

const USD_DEFAULT: PricingTier = {
  symbol: "$",
  monthly: "9.99",
  yearly: "99.99",
  currency: "USD",
};

const USD_HIGHER: PricingTier = {
  symbol: "$",
  monthly: "11.99",
  yearly: "119.99",
  currency: "USD",
};

const AUD: PricingTier = {
  symbol: "A$",
  monthly: "14.99",
  yearly: "149.99",
  currency: "AUD",
};

const EUR: PricingTier = {
  symbol: "€",
  monthly: "9.99",
  yearly: "99.99",
  currency: "EUR",
};

const PRICING_BY_COUNTRY: Record<string, PricingTier> = {
  // AUD tier
  AU: AUD,

  // EUR tier (Eurozone + EU countries using euro)
  AT: EUR,
  BE: EUR,
  BA: EUR,
  HR: EUR,
  CY: EUR,
  EE: EUR,
  FI: EUR,
  FR: EUR,
  DE: EUR,
  GR: EUR,
  IE: EUR,
  IT: EUR,
  LV: EUR,
  LT: EUR,
  LU: EUR,
  MT: EUR,
  ME: EUR,
  NL: EUR,
  PT: EUR,
  SK: EUR,
  SI: EUR,
  ES: EUR,

  // Higher USD tier
  AL: USD_HIGHER,
  AM: USD_HIGHER,
  AZ: USD_HIGHER,
  BB: USD_HIGHER,
  BY: USD_HIGHER,
  BJ: USD_HIGHER,
};

export function getPricingForCountry(countryCode: string): PricingTier {
  return PRICING_BY_COUNTRY[countryCode.toUpperCase()] ?? USD_DEFAULT;
}

export function formatMonthly(pricing: PricingTier): string {
  return `${pricing.symbol}${pricing.monthly}/mo`;
}

export function formatYearly(pricing: PricingTier): string {
  return `${pricing.symbol}${pricing.yearly}/yr`;
}
