import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the bit by bit calisthenics training app.",
};

export default function PrivacyPage() {
  return (
    <section className="px-6 pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-charcoal">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-charcoal/40">
          Last updated: February 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-charcoal/70">
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Overview
            </h2>
            <p className="mt-3">
              bit by bit (&quot;the App&quot;) is a calisthenics training
              application. We are committed to protecting your privacy and being
              transparent about how we handle your data. This policy explains
              what data we collect, how we use it, and your rights.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Data Storage
            </h2>
            <p className="mt-3">
              bit by bit is an offline-first application. Your workout data,
              progress, settings, and preferences are stored locally on your
              device. We do not upload your workout data to external servers.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Account &amp; Authentication
            </h2>
            <p className="mt-3">
              We use Firebase Authentication to manage user accounts. When you
              create an account, we store the minimum information required for
              authentication:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong>Email sign-up:</strong> your email address and an
                encrypted password
              </li>
              <li>
                <strong>Apple Sign-In:</strong> the identifier provided by Apple
                (name and email, if you choose to share them)
              </li>
              <li>
                <strong>Google Sign-In:</strong> your Google account name and
                email address
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Third-Party Services
            </h2>
            <p className="mt-3">
              The App uses Firebase Authentication (provided by Google) solely
              for account management. We do not use any third-party analytics,
              advertising, or tracking services. We do not share, sell, or
              provide your personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Data We Do Not Collect
            </h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>We do not track your location</li>
              <li>We do not use analytics or tracking SDKs</li>
              <li>We do not collect device identifiers for advertising</li>
              <li>We do not sell or share personal data with third parties</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Data Deletion
            </h2>
            <p className="mt-3">
              You can delete your account and all associated data at any time
              through the App&apos;s account settings. When you delete your
              account, all authentication data stored with Firebase is
              permanently removed. Since workout data is stored locally on your
              device, uninstalling the App removes all local data.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              The App is not directed at children under 13. We do not knowingly
              collect personal information from children under 13.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this privacy policy from time to time. We will
              notify users of any material changes through the App or via email.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Contact
            </h2>
            <p className="mt-3">
              If you have questions about this privacy policy or your data,
              please contact us at{" "}
              <a
                href="mailto:privacy@bitbybit.fit"
                className="font-medium text-sage underline"
              >
                privacy@bitbybit.fit
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
