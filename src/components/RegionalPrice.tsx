"use client";

import { useEffect, useState } from "react";
import type { PricingTier } from "@/lib/pricing";
import { formatMonthly } from "@/lib/pricing";

let cachedPromise: Promise<string> | null = null;

function fetchPrice(): Promise<string> {
  if (!cachedPromise) {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 3000);

    cachedPromise = fetch("/api/geo", { signal: controller.signal })
      .then((res) => res.json())
      .then((data: { country: string; pricing: PricingTier }) =>
        formatMonthly(data.pricing)
      )
      .catch(() => "$5.99/mo");
  }
  return cachedPromise;
}

export default function RegionalPrice() {
  const [price, setPrice] = useState("$5.99/mo");

  useEffect(() => {
    fetchPrice().then(setPrice);
  }, []);

  return <>{price}</>;
}
