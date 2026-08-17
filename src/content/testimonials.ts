// Parent testimonials — editable via the CMS dashboard (content/testimonials.json).
import testimonialsJson from "../../content/testimonials.json";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const TESTIMONIALS = (testimonialsJson as { testimonials: Testimonial[] }).testimonials;
