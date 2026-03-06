import { NextRequest, NextResponse } from "next/server";
import { getPricingForCountry } from "@/lib/pricing";

export function GET(request: NextRequest) {
  const country =
    request.headers.get("x-vercel-ip-country") ?? "US";
  const pricing = getPricingForCountry(country);

  return NextResponse.json(
    { country, pricing },
    { headers: { "Cache-Control": "private, max-age=3600" } }
  );
}
