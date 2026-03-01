import Link from "next/link";
import Image from "next/image";

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
            <a
              href="https://apps.apple.com/app/bit-by-bit/id6756225068"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="h-[40px] w-auto"
              />
            </a>
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
              <Link
                href="/terms"
                className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
              >
                Terms of Service
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
