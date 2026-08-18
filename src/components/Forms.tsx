"use client";

import { useState } from "react";
import { CAMPUSES } from "@/content/campuses";

const inputCls =
  "w-full rounded-xl border border-navy-100 bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent";
const labelCls = "block text-sm font-semibold text-navy-900 mb-1.5";

export function EnquiryForm({ defaultCampus }: { defaultCampus?: string }) {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return (
      <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-8 text-center">
        <p className="font-display text-2xl font-semibold text-emerald-700 mb-2">Thank you!</p>
        <p className="text-ink-600">Your admission enquiry has been received. An admission counsellor will contact you within 2 working days.</p>
      </div>
    );
  }
  return (
    <form name="admission-enquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="rounded-3xl bg-white border border-navy-100 shadow-sm p-6 sm:p-8">
      <input type="hidden" name="form-name" value="admission-enquiry" />
      <p className="hidden" aria-hidden="true"><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>
      <h2 className="font-display text-xl font-semibold text-navy-900 mb-1">Admission Enquiry</h2>
      <p className="text-sm text-ink-400 mb-5">Our admission counsellors reply within 2 working days.</p>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls} htmlFor="enq-campus">Select School Campus *</label>
          <select id="enq-campus" name="campus" required className={inputCls} defaultValue={defaultCampus ?? ""}>
            <option value="" disabled>Choose a campus</option>
            {CAMPUSES.map((c) => (
              <option key={c.slug} value={c.shortName}>{c.shortName}, Pune</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="enq-grade">Grade / Class Seeking *</label>
          <select id="enq-grade" name="grade" required className={inputCls} defaultValue="">
            <option value="" disabled>Choose a grade</option>
            <option>Preschool (Age 2–3)</option>
            <option>Kindergarten (Age 4–5)</option>
            <option>Class 1 – 5</option>
            <option>Class 6 – 8</option>
            <option>Class 9 – 10</option>
            <option>Class 11 – 12</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="enq-parent">Parent Name *</label>
          <input id="enq-parent" name="parentName" type="text" required placeholder="Full name" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="enq-phone">Phone *</label>
          <input id="enq-phone" name="phone" type="tel" required placeholder="+91 ..." className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="enq-email">Email *</label>
          <input id="enq-email" name="email" type="email" required placeholder="you@example.com" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="enq-child">Child&apos;s Name</label>
          <input id="enq-child" name="childName" type="text" placeholder="Child's full name" className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="enq-msg">Message</label>
          <textarea id="enq-msg" name="message" rows={4} placeholder="Tell us about your child or any questions you have" className={inputCls} />
        </div>
      </div>
      <button type="submit" className="mt-6 rounded-full bg-gold-500 px-7 py-3 font-bold text-navy-900 shadow-sm hover:bg-gold-400 transition-colors">
        Submit Enquiry
      </button>
    </form>
  );
}

export function ContactForm({ formName, title }: { formName: string; title: string }) {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return (
      <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-8 text-center">
        <p className="font-display text-2xl font-semibold text-emerald-700 mb-2">Message sent!</p>
        <p className="text-ink-600">Thank you for reaching out. Our team will get back to you shortly.</p>
      </div>
    );
  }
  return (
    <form name={formName} method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="rounded-3xl bg-white border border-navy-100 shadow-sm p-6 sm:p-8">
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden" aria-hidden="true"><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>
      <h2 className="font-display text-xl font-semibold text-ink-900 mb-5">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls} htmlFor={`${formName}-name`}>Full Name *</label>
          <input id={`${formName}-name`} name="name" type="text" required placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${formName}-email`}>Email *</label>
          <input id={`${formName}-email`} name="email" type="email" required placeholder="you@example.com" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${formName}-phone`}>Phone</label>
          <input id={`${formName}-phone`} name="phone" type="tel" placeholder="+91 ..." className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${formName}-subject`}>Subject</label>
          <input id={`${formName}-subject`} name="subject" type="text" placeholder="How can we help?" className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor={`${formName}-msg`}>Message *</label>
          <textarea id={`${formName}-msg`} name="message" rows={4} required placeholder="Your message" className={inputCls} />
        </div>
      </div>
      <button type="submit" className="mt-6 rounded-full bg-gold-500 px-7 py-3 font-bold text-navy-900 shadow-sm hover:bg-gold-400 transition-colors">
        Send Message
      </button>
    </form>
  );
}

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return <p className="text-sm text-white/90">Thanks for subscribing! You&apos;ll hear from us soon.</p>;
  }
  return (
    <form name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex w-full max-w-md gap-2">
      <input type="hidden" name="form-name" value="newsletter" />
      <p className="hidden" aria-hidden="true"><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input id="newsletter-email" name="email" type="email" required placeholder="Your email" className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold-400" />
      <button type="submit" className="shrink-0 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-navy-900 hover:bg-gold-400 transition-colors">Subscribe</button>
    </form>
  );
}
