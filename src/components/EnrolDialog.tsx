"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { EnquiryForm } from "./Forms";

// Campus enrolment form in a native <dialog> (WCAG-friendly: focus trapped,
// Escape closes, backdrop click closes).
export default function EnrolDialog({
  campus,
  trigger,
  title,
}: {
  campus?: string;
  trigger: ReactNode;
  title?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onBackdrop = (e: MouseEvent) => {
      if (e.target === d) d.close();
    };
    d.addEventListener("click", onBackdrop);
    return () => d.removeEventListener("click", onBackdrop);
  }, []);

  return (
    <>
      <span onClick={() => ref.current?.showModal()}>{trigger}</span>
      <dialog
        ref={ref}
        aria-label={title ?? "Admission enquiry"}
        className="m-auto w-[min(94vw,34rem)] rounded-[1.5rem] border-0 bg-transparent p-0 shadow-soft-lg open:animate-[hero-fade-up_.25s_ease]"
      >
        <div className="relative overflow-hidden rounded-[1.5rem] bg-white">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Close enrolment form"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-ink-400 shadow-sm hover:text-navy-900 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="max-h-[88vh] overflow-y-auto p-6 sm:p-8">
            <EnquiryForm defaultCampus={campus} />
          </div>
        </div>
      </dialog>
    </>
  );
}
