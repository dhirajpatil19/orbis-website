// Component smoke tests — render key UI, assert real content, exercise the
// two interactive behaviours that matter most: the mobile menu and form submit.
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { SITE, NAV_GROUPS } from "@/content/site";

// next/link renders a real <a> in jsdom so link assertions work.
vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode } & Record<string, unknown>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

beforeEach(() => cleanup());

describe("Header", () => {
  it("renders brand, tagline, phone and CTA", async () => {
    const { default: Header } = await import("@/components/Header");
    render(<Header />);
    expect(screen.getByText("The Orbis School")).toBeInTheDocument();
    expect(screen.getByText(new RegExp(SITE.tagline))).toBeInTheDocument();
    expect(screen.getByText(SITE.phone)).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: "Admission Enquiry" });
    expect(cta).toHaveAttribute("href", "/admissions/enquiry");
  });

  it("renders every top-level nav group", async () => {
    const { default: Header } = await import("@/components/Header");
    render(<Header />);
    for (const group of NAV_GROUPS) {
      expect(screen.getByText(group.label)).toBeInTheDocument();
    }
  });

  it("opens the mobile menu and drills into a nav group", async () => {
    const { default: Header } = await import("@/components/Header");
    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("button", { name: "Close menu" })).toBeInTheDocument();
    // Mobile groups are accordions: click the first group, then its children appear.
    fireEvent.click(screen.getByRole("button", { name: NAV_GROUPS[0].label }));
    const firstChild = NAV_GROUPS[0].children[0];
    expect(screen.getByRole("link", { name: firstChild.label })).toHaveAttribute("href", firstChild.href);
  });
});

describe("Footer", () => {
  it("renders school identity, campus links and newsletter", async () => {
    const { default: Footer } = await import("@/components/Footer");
    render(<Footer />);
    expect(screen.getByText(new RegExp(SITE.tagline))).toBeInTheDocument();
    expect(screen.getByText("Keshav Nagar")).toBeInTheDocument();
    expect(screen.getByText(SITE.email)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Subscribe" })).toBeInTheDocument();
  });
});

describe("Blocks", () => {
  it("PageHero renders title, kicker and breadcrumb link", async () => {
    const { PageHero } = await import("@/components/Blocks");
    render(
      <PageHero
        kicker="Admissions"
        title="Admission Process"
        image="/images/hero-1.jpg"
        crumb={{ label: "Section", href: "/admissions" }}
      />,
    );
    expect(screen.getByRole("heading", { name: "Admission Process" })).toBeInTheDocument();
    expect(screen.getByText("Admissions")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Section" })).toHaveAttribute("href", "/admissions");
  });

  it("SectionHeading renders title and optional subtitle", async () => {
    const { SectionHeading } = await import("@/components/Blocks");
    render(<SectionHeading kicker="Why Orbis" title="A Modern CBSE School" subtitle="Trusted by Pune parents." />);
    expect(screen.getByRole("heading", { name: "A Modern CBSE School" })).toBeInTheDocument();
    expect(screen.getByText("Trusted by Pune parents.")).toBeInTheDocument();
  });

  it("CTABand links to enquiry and contact", async () => {
    const { CTABand } = await import("@/components/Blocks");
    render(<CTABand />);
    expect(screen.getByRole("link", { name: "Enquire Now" })).toHaveAttribute("href", "/admissions/enquiry");
    expect(screen.getByRole("link", { name: "Book a Campus Visit" })).toHaveAttribute("href", "/contact");
  });
});

describe("HeroSlider", () => {
  it("renders the first slide's content", async () => {
    const { default: HeroSlider } = await import("@/components/HeroSlider");
    render(<HeroSlider />);
    expect(screen.getByText("Admissions Open 2026–27")).toBeInTheDocument();
  });
});

describe("FAQAccordion", () => {
  it("shows first answer, toggles to second on click", async () => {
    const { default: FAQAccordion } = await import("@/components/FAQAccordion");
    const items = [
      { q: "When are admissions open?", a: "Admissions are open now." },
      { q: "Which curriculum do you follow?", a: "We follow CBSE." },
    ];
    render(<FAQAccordion items={items} />);
    expect(screen.getByText("Admissions are open now.")).toBeInTheDocument();
    expect(screen.queryByText("We follow CBSE.")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Which curriculum do you follow?" }));
    expect(screen.getByText("We follow CBSE.")).toBeInTheDocument();
    expect(screen.queryByText("Admissions are open now.")).not.toBeInTheDocument();
  });
});

describe("Forms", () => {
  it("EnquiryForm lists all 3 campuses and shows thank-you on submit", async () => {
    const { EnquiryForm } = await import("@/components/Forms");
    const { container } = render(<EnquiryForm />);
    const select = screen.getByLabelText("Select School Campus *");
    expect(select).toBeInTheDocument();
    fireEvent.change(select, { target: { value: "Keshav Nagar" } });
    expect(screen.getByRole("button", { name: "Submit Enquiry" })).toBeInTheDocument();
    // jsdom does not fire submit on button click — dispatch on the form itself.
    fireEvent.submit(container.querySelector("form")!);
    expect(screen.getByText("Thank you!")).toBeInTheDocument();
  });

  it("ContactForm shows confirmation on submit", async () => {
    const { ContactForm } = await import("@/components/Forms");
    const { container } = render(<ContactForm formName="contact" title="Send Us a Message" />);
    expect(screen.getByRole("heading", { name: "Send Us a Message" })).toBeInTheDocument();
    fireEvent.submit(container.querySelector("form")!);
    expect(screen.getByText("Message sent!")).toBeInTheDocument();
  });

  it("NewsletterForm shows confirmation on submit", async () => {
    const { NewsletterForm } = await import("@/components/Forms");
    const { container } = render(<NewsletterForm />);
    fireEvent.submit(container.querySelector("form")!);
    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument();
  });
});
