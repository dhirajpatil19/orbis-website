import "@testing-library/jest-dom/vitest";

// jsdom lacks window.matchMedia (used by MagneticButton for
// prefers-reduced-motion). Stub it: matches=false (no preference).
if (typeof window !== "undefined" && typeof window.matchMedia !== "function") {
  window.matchMedia = ((query: string): MediaQueryList =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList);
}

// jsdom's <dialog> is not interactive: showModal/close throw
// "Not implemented". Polyfill them to toggle the `open` attribute so the
// EnrolDialog flow can be exercised in tests.
if (typeof HTMLDialogElement !== "undefined") {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
}
