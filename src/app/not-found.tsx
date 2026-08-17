import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32 text-center">
      <div className="mx-auto max-w-xl px-4">
        <p className="font-display text-7xl font-semibold text-brand-100">404</p>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 mt-2 mb-4">Page not found</h1>
        <p className="text-ink-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to the Orbis family.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-full bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-600 transition-colors">
            Back to Home
          </Link>
          <Link href="/admissions/enquiry" className="rounded-full bg-accent-500 px-6 py-3 font-bold text-brand-900 hover:bg-accent-400 transition-colors">
            Admission Enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
