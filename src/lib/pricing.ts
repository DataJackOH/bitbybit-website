// Pricing data sourced from data/monthly-prices.csv and data/yearly-prices.csv

export interface PricingTier {
  symbol: string;
  monthly: string;
  yearly: string;
  currency: string;
}

function tier(symbol: string, monthly: string, yearly: string, currency: string): PricingTier {
  return { symbol, monthly, yearly, currency };
}

// ── USD tiers ──────────────────────────────────────────────
const USD_DEFAULT = tier("$", "5.99", "39.99", "USD");
const USD_HIGHER  = tier("$", "6.99", "49.99", "USD");

// ── EUR tiers ──────────────────────────────────────────────
const EUR         = tier("€", "6.99", "44.99", "EUR");
const EUR_LOWER   = tier("€", "5.99", "39.99", "EUR"); // Montenegro

// ── Local-currency tiers ───────────────────────────────────
const AED = tier("AED ", "22.99", "149.99", "AED");
const AUD = tier("A$", "9.99", "59.99", "AUD");
const BRL = tier("R$", "39.90", "249.90", "BRL");
const CAD = tier("CA$", "7.99", "49.99", "CAD");
const CHF = tier("CHF ", "5.00", "35.00", "CHF");
const CLP = tier("CL$", "6,990", "49,990", "CLP");
const CNY = tier("¥", "38", "298", "CNY");
const COP = tier("COL$", "29,900", "199,900", "COP");
const CZK = tier("", "149 Kč", "999 Kč", "CZK");
const DKK = tier("", "49 kr", "349 kr", "DKK");
const EGP = tier("E£", "299.99", "1,999.99", "EGP");
const GBP = tier("£", "5.99", "39.99", "GBP");
const HKD = tier("HK$", "48", "288", "HKD");
const HUF = tier("", "2,490 Ft", "17,990 Ft", "HUF");
const IDR = tier("Rp", "99,000", "699,000", "IDR");
const ILS = tier("₪", "19.90", "149.90", "ILS");
const INR = tier("₹", "599", "3,999", "INR");
const JPY = tier("¥", "1,000", "6,000", "JPY");
const KRW = tier("₩", "8,800", "55,000", "KRW");
const KZT = tier("₸", "3,490", "22,990", "KZT");
const MXN = tier("MX$", "129", "899", "MXN");
const MYR = tier("RM", "29.90", "199.90", "MYR");
const NGN = tier("₦", "9,900", "69,900", "NGN");
const NOK = tier("", "79 kr", "499 kr", "NOK");
const NZD = tier("NZ$", "9.99", "69.99", "NZD");
const PEN = tier("S/", "24.90", "179.90", "PEN");
const PHP = tier("₱", "399", "2,490", "PHP");
const PKR = tier("Rs", "1,700", "9,900", "PKR");
const PLN = tier("", "29.99 zł", "199.99 zł", "PLN");
const QAR = tier("QR ", "19.99", "149.99", "QAR");
const RON = tier("", "29.99 lei", "199.99 lei", "RON");
const RUB = tier("₽", "499", "3,490", "RUB");
const SAR = tier("SR ", "24.99", "179.99", "SAR");
const SEK = tier("", "79 kr", "499 kr", "SEK");
const SGD = tier("S$", "8.98", "59.98", "SGD");
const THB = tier("฿", "199", "1,490", "THB");
const TRY = tier("₺", "299.99", "1,999.99", "TRY");
const TWD = tier("NT$", "190", "1,290", "TWD");
const TZS = tier("TSh ", "17,900", "99,900", "TZS");
const VND = tier("₫", "199,000", "1,199,000", "VND");
const ZAR = tier("R", "119.99", "799.99", "ZAR");

// ── Country → pricing mapping ──────────────────────────────
const PRICING_BY_COUNTRY: Record<string, PricingTier> = {
  // Local-currency countries
  AE: AED,
  AU: AUD,
  BR: BRL,
  CA: CAD,
  CH: CHF,
  CL: CLP,
  CN: CNY,
  CO: COP,
  CZ: CZK,
  DK: DKK,
  EG: EGP,
  GB: GBP,
  HK: HKD,
  HU: HUF,
  ID: IDR,
  IL: ILS,
  IN: INR,
  JP: JPY,
  KR: KRW,
  KZ: KZT,
  MX: MXN,
  MY: MYR,
  NG: NGN,
  NO: NOK,
  NZ: NZD,
  PE: PEN,
  PH: PHP,
  PK: PKR,
  PL: PLN,
  QA: QAR,
  RO: RON,
  RU: RUB,
  SA: SAR,
  SE: SEK,
  SG: SGD,
  TH: THB,
  TR: TRY,
  TW: TWD,
  TZ: TZS,
  VN: VND,
  ZA: ZAR,

  // EUR countries
  AT: EUR,
  BA: EUR,
  BE: EUR,
  BG: EUR,
  CY: EUR,
  DE: EUR,
  EE: EUR,
  ES: EUR,
  FI: EUR,
  FR: EUR,
  GR: EUR,
  HR: EUR,
  IE: EUR,
  IT: EUR,
  LT: EUR,
  LU: EUR,
  LV: EUR,
  MT: EUR,
  NL: EUR,
  PT: EUR,
  RS: EUR,
  SI: EUR,
  SK: EUR,
  XK: EUR, // Kosovo
  ME: EUR_LOWER, // Montenegro

  // Higher USD countries
  AL: USD_HIGHER,
  AM: USD_HIGHER,
  AZ: USD_HIGHER,
  BB: USD_HIGHER,
  BH: USD_HIGHER,
  BJ: USD_HIGHER,
  BS: USD_HIGHER,
  BY: USD_HIGHER,
  CI: USD_HIGHER,
  CM: USD_HIGHER,
  GE: USD_HIGHER,
  GH: USD_HIGHER,
  IS: USD_HIGHER,
  KE: USD_HIGHER,
  KG: USD_HIGHER,
  KH: USD_HIGHER,
  LA: USD_HIGHER,
  MD: USD_HIGHER,
  MU: USD_HIGHER,
  NP: USD_HIGHER,
  SN: USD_HIGHER,
  SR: USD_HIGHER,
  TJ: USD_HIGHER,
  UA: USD_HIGHER,
  UG: USD_HIGHER,
  UZ: USD_HIGHER,
  ZM: USD_HIGHER,
  ZW: USD_HIGHER,
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
