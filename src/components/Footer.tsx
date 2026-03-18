import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="bit by bit app icon"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <p className="font-heading text-xl font-bold text-white">
                bit by bit
              </p>
            </div>
            <p className="mt-2 text-sm text-white/60">
              Personalization without the price tag
            </p>
            <a
              href="https://apps.apple.com/app/bit-by-bit/id6756225068"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg border border-white/20 p-1 transition-colors hover:border-white/40"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={135}
                height={45}
                className="h-[45px] w-auto"
              />
            </a>
          </div>

          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Pages
              </p>
              <Link
                href="/"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Features
              </Link>
              <Link
                href="/blog"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Blog
              </Link>
              <Link
                href="/support"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Support
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Legal
              </p>
              <Link
                href="/privacy"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} bit by bit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
