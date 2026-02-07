import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-heading text-xl font-bold text-charcoal">
              bit by bit
            </p>
            <p className="mt-2 text-sm text-charcoal/60">
              Personalization without the price tag
            </p>
          </div>

          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
                Pages
              </p>
              <Link
                href="/"
                className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
              >
                Features
              </Link>
              <Link
                href="/support"
                className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
              >
                Support
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
                Legal
              </p>
              <Link
                href="/privacy"
                className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal/5 pt-6">
          <p className="text-center text-xs text-charcoal/40">
            &copy; {new Date().getFullYear()} bit by bit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
