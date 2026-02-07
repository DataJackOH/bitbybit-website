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
          Last updated: 7 February 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-charcoal/70">
          <p>
            bit by bit (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a
            calisthenics training app operated by Tobey Lee Hahn Speck (ABN 13
            904 149 472), based in Australia. This privacy policy explains what
            data we collect, how we use it, and your rights.
          </p>
          <p>
            We believe in being straightforward about data practices. This
            policy reflects what our app actually does — no more, no less.
          </p>

          {/* Data We Collect */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Data We Collect
            </h2>

            <h3 className="mt-4 font-heading text-base font-bold text-charcoal/90">
              Account Information
            </h3>
            <p className="mt-2">
              When you create an account, we collect:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong>Email address</strong> — used for account identification
                and communication
              </li>
              <li>
                <strong>Display name</strong> — shown in-app on your profile
              </li>
              <li>
                <strong>Profile photo</strong> (optional) — uploaded if you
                choose to set one
              </li>
            </ul>
            <p className="mt-3">
              If you sign in with Apple or Google, we receive basic profile
              information (name and email) from those providers. We do not
              receive or store your Apple/Google password.
            </p>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              Fitness &amp; Training Data
            </h3>
            <p className="mt-2">
              To provide personalised workout plans, we collect:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong>Fitness assessment</strong> — your selected skill goals,
                experience level, and preferred training frequency
              </li>
              <li>
                <strong>Workout history</strong> — exercises performed, sets,
                reps, duration, and difficulty feedback you provide after each
                set
              </li>
              <li>
                <strong>Progress records</strong> — personal records, milestones,
                and progression levels
              </li>
              <li>
                <strong>Achievements</strong> — badges and streaks earned through
                training
              </li>
            </ul>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              App Preferences
            </h3>
            <ul className="mt-2 list-inside list-disc space-y-2">
              <li>Unit preference (metric or imperial)</li>
              <li>Favourite exercises</li>
              <li>App settings and display preferences</li>
            </ul>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              Analytics Data
            </h3>
            <p className="mt-2">
              We collect anonymised usage data to understand how people use the
              app and improve the experience. This includes:
            </p>
            <p className="mt-3">
              This may include screen views, feature usage, error reports, and
              subscription-related events. Analytics data is associated with a
              random device identifier, not your name or email. See the
              &quot;Analytics&quot; section below for more detail.
            </p>

            <p className="mt-4">
              We do <strong>not</strong> collect data for advertising purposes.
            </p>
          </div>

          {/* How We Use Your Data */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              How We Use Your Data
            </h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-charcoal/10">
                    <th className="pb-2 pr-4 font-semibold text-charcoal/90">
                      Purpose
                    </th>
                    <th className="pb-2 font-semibold text-charcoal/90">
                      Data Used
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/5">
                  <tr>
                    <td className="py-2 pr-4">
                      Provide personalised workout plans
                    </td>
                    <td className="py-2">
                      Fitness assessment, workout history, progress
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Track your training progress</td>
                    <td className="py-2">
                      Workout logs, personal records, milestones
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Sync data across devices</td>
                    <td className="py-2">All user data (via cloud backup)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Manage your subscription</td>
                    <td className="py-2">Firebase UID, purchase history</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Improve the app</td>
                    <td className="py-2">Anonymised analytics events</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Communicate with you</td>
                    <td className="py-2">
                      Email address (account-related matters only)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Fix bugs and errors</td>
                    <td className="py-2">Error analytics events</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              We do <strong>not</strong> use your data for advertising, sell your
              data to third parties, or build advertising profiles.
            </p>
          </div>

          {/* Third-Party Services */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Third-Party Services
            </h2>
            <p className="mt-3">
              We use the following third-party services to operate bit by bit:
            </p>

            <h3 className="mt-4 font-heading text-base font-bold text-charcoal/90">
              Firebase (Google)
            </h3>
            <ul className="mt-2 list-inside list-disc space-y-2">
              <li>
                <strong>Firebase Authentication</strong> — manages account
                creation, sign-in, and session tokens
              </li>
              <li>
                <strong>Cloud Firestore</strong> — stores and syncs your user
                data (profile, workouts, progress) across devices
              </li>
              <li>
                <strong>Firebase Storage</strong> — hosts profile photos you
                upload
              </li>
              <li>
                <strong>Firebase Analytics</strong> — collects anonymised usage
                events (see Analytics section)
              </li>
            </ul>
            <p className="mt-3">
              Firebase processes data under Google&apos;s terms. Data is stored
              on Google Cloud servers. See{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                className="font-medium text-sage underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firebase Privacy
              </a>
              .
            </p>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              RevenueCat
            </h3>
            <p className="mt-2">
              RevenueCat manages our subscription system. We share your Firebase
              user ID (a random identifier, not your email) and purchase and
              subscription status (processed through Apple&apos;s App Store).
              RevenueCat does not receive your name, email, or fitness data. See{" "}
              <a
                href="https://www.revenuecat.com/privacy/"
                className="font-medium text-sage underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                RevenueCat Privacy
              </a>
              .
            </p>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              Apple App Store
            </h3>
            <p className="mt-2">
              Subscriptions are processed through Apple&apos;s in-app purchase
              system. Apple handles all payment processing — we never see or
              store your payment card details. See{" "}
              <a
                href="https://www.apple.com/privacy/"
                className="font-medium text-sage underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Privacy
              </a>
              .
            </p>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              Expo Updates
            </h3>
            <p className="mt-2">
              We use Expo to deliver over-the-air code updates. Expo receives
              basic device metadata (device type, OS version) to deliver the
              correct update. No personal or fitness data is shared with Expo.
              See{" "}
              <a
                href="https://expo.dev/privacy"
                className="font-medium text-sage underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Expo Privacy
              </a>
              .
            </p>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              Apple / Google Sign-In
            </h3>
            <p className="mt-2">
              If you choose to sign in with Apple or Google, the respective
              provider handles authentication and shares your name and email with
              us. We do not receive your password. You can manage these
              connections in your Apple or Google account settings.
            </p>
          </div>

          {/* Analytics */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Analytics
            </h2>
            <p className="mt-3">
              We use Firebase Analytics to understand how people use bit by bit
              and to improve the app.
            </p>

            <p className="mt-3">
              Analytics events may include screen views, feature usage,
              error reports, and subscription-related events. Events are
              associated with a randomly generated device identifier, not your
              name or email. We use this data in aggregate to make product
              decisions. We do not build individual profiles from analytics data
              or use analytics for advertising.
            </p>
            <p className="mt-3">
              You cannot currently opt out of analytics within the app. If this
              is important to you, contact us and we&apos;ll consider adding this
              option.
            </p>
          </div>

          {/* Data Storage & Sync */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Data Storage &amp; Sync
            </h2>
            <p className="mt-3">
              Your data is stored on your device and, when you&apos;re signed
              in, synced to Cloud Firestore (Google) so it&apos;s backed up
              and available across devices. Profile photos are stored in
              Firebase Storage (Google Cloud).
            </p>
            <p className="mt-3">
              <strong>Data in transit:</strong> All data transferred between your
              device and our servers uses HTTPS encryption (TLS).
            </p>
            <p className="mt-3">
              <strong>Data at rest:</strong> Stored in Google Cloud&apos;s
              infrastructure with Google&apos;s standard encryption. Data is
              primarily stored in Google&apos;s US data centres.
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Data Retention
            </h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong>Active accounts:</strong> Your data is retained as long
                as your account exists
              </li>
              <li>
                <strong>Deleted accounts:</strong> When you delete your account,
                we delete your profile, workout data, and progress from our
                servers. Analytics data that has already been aggregated cannot be
                individually removed, but it is not personally identifiable
              </li>
              <li>
                <strong>Subscription data:</strong> RevenueCat retains
                transaction records as required for financial compliance, even
                after account deletion
              </li>
            </ul>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Your Rights
            </h2>

            <h3 className="mt-4 font-heading text-base font-bold text-charcoal/90">
              All Users
            </h3>
            <p className="mt-2">You have the right to:</p>
            <ul className="mt-2 list-inside list-disc space-y-2">
              <li>
                <strong>Access</strong> your data — view your profile, workout
                history, and progress in-app
              </li>
              <li>
                <strong>Delete</strong> your account and data — available in
                Profile &gt; Settings within the app
              </li>
              <li>
                <strong>Export</strong> your data — contact us and we&apos;ll
                provide your data in a portable format
              </li>
            </ul>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              Australian Privacy Act
            </h3>
            <p className="mt-2">
              As an Australian business, we comply with the Australian Privacy
              Principles (APPs) under the Privacy Act 1988. You may lodge a
              complaint about our handling of your personal information by
              contacting us. If unsatisfied with our response, you can complain
              to the Office of the Australian Information Commissioner (OAIC) at{" "}
              <a
                href="https://www.oaic.gov.au"
                className="font-medium text-sage underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                oaic.gov.au
              </a>
              .
            </p>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              European Users (GDPR)
            </h3>
            <p className="mt-2">
              If you&apos;re in the European Economic Area, you have additional
              rights under the GDPR:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-2">
              <li>
                <strong>Rectification</strong> — correct inaccurate personal data
              </li>
              <li>
                <strong>Restriction</strong> — request we limit processing of
                your data
              </li>
              <li>
                <strong>Portability</strong> — receive your data in a
                machine-readable format
              </li>
              <li>
                <strong>Objection</strong> — object to processing based on
                legitimate interests
              </li>
              <li>
                <strong>Withdraw consent</strong> — where processing is based on
                consent
              </li>
            </ul>
            <p className="mt-3">Our legal basis for processing:</p>
            <ul className="mt-2 list-inside list-disc space-y-2">
              <li>
                <strong>Contract performance</strong> — providing the training
                service you signed up for
              </li>
              <li>
                <strong>Legitimate interests</strong> — analytics to improve the
                app, security
              </li>
              <li>
                <strong>Consent</strong> — optional features like profile photos
              </li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@bitbybit.fit"
                className="font-medium text-sage underline"
              >
                privacy@bitbybit.fit
              </a>
              . We&apos;ll respond within 30 days.
            </p>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              California Users (CCPA)
            </h3>
            <p className="mt-2">
              If you&apos;re a California resident, you have the right to:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-2">
              <li>
                <strong>Know</strong> what personal information we collect and
                how it&apos;s used
              </li>
              <li>
                <strong>Delete</strong> your personal information
              </li>
              <li>
                <strong>Non-discrimination</strong> — we won&apos;t treat you
                differently for exercising your rights
              </li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> sell personal information. We do{" "}
              <strong>not</strong> share personal information for cross-context
              behavioural advertising.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              bit by bit is not directed at children under 16. We do not
              knowingly collect personal information from children under 16. If
              you believe a child under 16 has provided us with personal
              information, please contact us and we will delete it.
            </p>
          </div>

          {/* Account Deletion */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Account Deletion
            </h2>
            <p className="mt-3">
              You can delete your account at any time from{" "}
              <strong>Profile &gt; Settings</strong> within the app. When you
              delete your account:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                Your profile, workout data, and progress are permanently deleted
                from our servers
              </li>
              <li>Your authentication account is removed</li>
              <li>
                Third-party services (e.g. RevenueCat) may retain anonymised
                transaction records as required for financial compliance
              </li>
              <li>
                Previously aggregated analytics data cannot be individually
                removed but is not personally identifiable
              </li>
            </ul>
            <p className="mt-3">
              Active subscriptions are not automatically cancelled when you
              delete your account. Manage your subscription through{" "}
              <strong>Apple Settings &gt; Subscriptions</strong> before deleting
              your account to avoid continued billing.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this privacy policy from time to time. If we make
              significant changes, we&apos;ll notify you through the app or by
              email. The &quot;Last updated&quot; date at the top shows when the
              policy was last revised.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Contact Us
            </h2>
            <p className="mt-3">
              If you have questions about this privacy policy or your data:
            </p>
            <p className="mt-3">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:privacy@bitbybit.fit"
                className="font-medium text-sage underline"
              >
                privacy@bitbybit.fit
              </a>
            </p>
            <p className="mt-3">
              Tobey Lee Hahn Speck
              <br />
              ABN 13 904 149 472
              <br />
              Australia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
