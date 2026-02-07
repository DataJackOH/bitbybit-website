import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for the bit by bit calisthenics training app.",
};

export default function TermsPage() {
  return (
    <section className="px-6 pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-charcoal">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-charcoal/40">
          Last updated: 7 February 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-charcoal/70">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the bit
            by bit mobile application (&quot;the App&quot;), operated by Tobey
            Lee Hahn Speck (ABN 13 904 149 472), based in Australia.
          </p>
          <p>
            By creating an account or using the App, you agree to these Terms. If
            you don&apos;t agree, please don&apos;t use the App.
          </p>

          {/* 1. The Service */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              1. The Service
            </h2>
            <p className="mt-3">
              bit by bit is a calisthenics training app that provides
              personalised bodyweight workout plans, exercise guidance, and
              progress tracking. The App adapts to your fitness level and goals
              based on the information you provide and your training history.
            </p>
            <p className="mt-3">
              The App is designed for general fitness purposes and is{" "}
              <strong>not a substitute for professional medical advice</strong>.
              Consult a healthcare professional before starting any exercise
              programme, especially if you have existing health conditions.
            </p>
          </div>

          {/* 2. Accounts */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              2. Accounts
            </h2>
            <p className="mt-3">
              To use bit by bit, you must create an account using email, Apple
              Sign-In, or Google Sign-In. You are responsible for:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Providing accurate account information</li>
              <li>Keeping your sign-in credentials secure</li>
              <li>All activity that occurs under your account</li>
            </ul>
            <p className="mt-3">
              You must be at least 16 years old to create an account.
            </p>
            <p className="mt-3">
              We reserve the right to suspend or terminate accounts that violate
              these Terms.
            </p>
          </div>

          {/* 3. Subscriptions & Billing */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              3. Subscriptions &amp; Billing
            </h2>

            <h3 className="mt-4 font-heading text-base font-bold text-charcoal/90">
              Free Features
            </h3>
            <p className="mt-2">
              You can use bit by bit&apos;s core features without a subscription,
              including workout logging, basic progress tracking, and the
              exercise library.
            </p>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              bit by bit Pro
            </h3>
            <p className="mt-2">
              A Pro subscription unlocks additional features as described on the
              subscription page within the App. Subscription details (pricing,
              features, trial terms) are displayed before purchase.
            </p>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              How Billing Works
            </h3>
            <ul className="mt-2 list-inside list-disc space-y-2">
              <li>
                All subscriptions are processed through{" "}
                <strong>Apple&apos;s App Store</strong> using in-app purchases
              </li>
              <li>Payment is charged to your Apple ID account</li>
              <li>
                Subscriptions automatically renew unless cancelled at least 24
                hours before the end of the current period
              </li>
              <li>
                You can manage or cancel your subscription in{" "}
                <strong>Apple Settings &gt; Subscriptions</strong>
              </li>
            </ul>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              Free Trial
            </h3>
            <ul className="mt-2 list-inside list-disc space-y-2">
              <li>
                If offered, a free trial converts to a paid subscription at the
                end of the trial period unless cancelled
              </li>
              <li>
                Trial eligibility is determined by Apple and is typically limited
                to one trial per Apple ID
              </li>
              <li>
                Cancellation during the trial period will not result in a charge
              </li>
            </ul>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              Refunds
            </h3>
            <p className="mt-2">
              Refund requests are handled by Apple, as they process all payments.
              To request a refund, visit{" "}
              <a
                href="https://reportaproblem.apple.com"
                className="font-medium text-sage underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                reportaproblem.apple.com
              </a>
              .
            </p>
            <p className="mt-2">
              We do not process payments directly and cannot issue refunds.
            </p>
          </div>

          {/* 4. User Content */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              4. User Content
            </h2>
            <p className="mt-3">
              &quot;User Content&quot; includes any data you create or provide
              through the App, such as your profile information, workout logs,
              and fitness assessment responses.
            </p>
            <p className="mt-3">
              You retain ownership of your User Content. By using the App, you
              grant us a limited licence to store, process, and display your
              content as necessary to provide the service (e.g. syncing across
              devices, generating workout plans).
            </p>
            <p className="mt-3">
              We do not claim ownership of your workout data, progress records,
              or any other content you create.
            </p>
          </div>

          {/* 5. Acceptable Use */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              5. Acceptable Use
            </h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Use the App for any unlawful purpose</li>
              <li>
                Attempt to gain unauthorised access to the App&apos;s systems or
                other users&apos; accounts
              </li>
              <li>
                Reverse-engineer, decompile, or disassemble the App
              </li>
              <li>
                Use automated systems (bots, scrapers) to access the App
              </li>
              <li>
                Interfere with or disrupt the App&apos;s infrastructure
              </li>
              <li>Impersonate another person or entity</li>
              <li>Upload malicious content or code</li>
            </ul>
          </div>

          {/* 6. Intellectual Property */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              6. Intellectual Property
            </h2>
            <p className="mt-3">
              The App, including its design, code, content, exercise
              descriptions, and branding, is owned by Tobey Lee Hahn Speck and
              protected by copyright and other intellectual property laws.
            </p>
            <p className="mt-3">
              You may not copy, modify, distribute, or create derivative works
              from any part of the App without prior written permission.
            </p>
            <p className="mt-3">
              Exercise names and common fitness terminology are not claimed as
              proprietary.
            </p>
          </div>

          {/* 7. Disclaimers */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              7. Disclaimers
            </h2>

            <h3 className="mt-4 font-heading text-base font-bold text-charcoal/90">
              Fitness Disclaimer
            </h3>
            <p className="mt-2">
              The App provides general fitness guidance based on common
              calisthenics progressions. It is <strong>not</strong> a replacement
              for a personal trainer, physiotherapist, or medical professional.
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>You exercise at your own risk</li>
              <li>Listen to your body and stop if you experience pain</li>
              <li>
                The App does not diagnose injuries or medical conditions
              </li>
              <li>
                Progression suggestions are algorithmic and may not account for
                individual physical limitations
              </li>
            </ul>
            <p className="mt-3">
              You acknowledge that exercise carries inherent risks of injury and
              you assume all known and unknown risks associated with any exercise
              activity performed using the App, even if caused in whole or part
              by the action, inaction, or negligence of the App or its content.
            </p>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              Service Availability
            </h3>
            <ul className="mt-2 list-inside list-disc space-y-2">
              <li>
                The App is provided &quot;as is&quot; and &quot;as
                available&quot;
              </li>
              <li>
                We do not guarantee uninterrupted or error-free operation
              </li>
              <li>
                Features may change, be updated, or be removed over time
              </li>
              <li>Offline functionality depends on locally cached data</li>
            </ul>
          </div>

          {/* 8. Limitation of Liability */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              8. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by law:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                We are <strong>not liable</strong> for any indirect, incidental,
                special, consequential, or punitive damages arising from your use
                of the App
              </li>
              <li>
                We are <strong>not liable</strong> for any injuries sustained
                while performing exercises suggested by the App
              </li>
              <li>
                Our total liability for any claims relating to the App is limited
                to the amount you paid us in the 12 months preceding the claim
              </li>
            </ul>
            <p className="mt-3">
              Nothing in these Terms excludes or limits liability that cannot be
              excluded under Australian Consumer Law, including guarantees that
              services will be provided with due care and skill.
            </p>
          </div>

          {/* 9. Termination */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              9. Termination
            </h2>

            <h3 className="mt-4 font-heading text-base font-bold text-charcoal/90">
              By You
            </h3>
            <p className="mt-2">
              You can stop using the App at any time. To fully close your
              account, use the account deletion option in{" "}
              <strong>Profile &gt; Settings</strong>. Remember to cancel your
              subscription through Apple before deleting your account.
            </p>

            <h3 className="mt-6 font-heading text-base font-bold text-charcoal/90">
              By Us
            </h3>
            <p className="mt-2">
              We may suspend or terminate your account if you:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-2">
              <li>Violate these Terms</li>
              <li>
                Use the App in a way that could harm other users or our systems
              </li>
              <li>Are required to do so by law</li>
            </ul>
            <p className="mt-3">
              If we terminate your account without cause, we&apos;ll provide
              reasonable notice where possible.
            </p>
          </div>

          {/* 10. Privacy */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              10. Privacy
            </h2>
            <p className="mt-3">
              Your use of the App is also governed by our{" "}
              <Link
                href="/privacy"
                className="font-medium text-sage underline"
              >
                Privacy Policy
              </Link>
              , which explains what data we collect and how we use it. By using
              the App, you acknowledge that you have read and understood the
              Privacy Policy.
            </p>
          </div>

          {/* 11. Changes */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              11. Changes to These Terms
            </h2>
            <p className="mt-3">
              We may update these Terms from time to time. If we make significant
              changes, we&apos;ll notify you through the App or by email.
              Continued use of the App after changes take effect constitutes
              acceptance of the updated Terms.
            </p>
          </div>

          {/* 12. Governing Law */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              12. Governing Law
            </h2>
            <p className="mt-3">
              These Terms are governed by the laws of{" "}
              <strong>Australia</strong>. Any disputes arising from these Terms
              or your use of the App will be resolved in the courts of Australia.
            </p>
            <p className="mt-3">
              If you are a consumer in the European Union, nothing in these Terms
              affects your rights under mandatory EU consumer protection laws.
            </p>
          </div>

          {/* 13. General */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              13. General
            </h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                If any provision of these Terms is found to be unenforceable, the
                remaining provisions continue in effect
              </li>
              <li>
                Our failure to enforce a right or provision does not constitute a
                waiver of that right
              </li>
              <li>
                These Terms constitute the entire agreement between you and us
                regarding the App
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-lg font-bold text-charcoal">
              Contact Us
            </h2>
            <p className="mt-3">
              If you have questions about these Terms:
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
