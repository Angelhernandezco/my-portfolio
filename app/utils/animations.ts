import gsap from "gsap";

export const animateFallingText = (element: HTMLElement, delay: number = 0) => {
  if (!element) return;

  const spans = element.querySelectorAll("span");
  gsap.to(spans, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.05,
    delay,
    ease: "power2.out",
  });
};

export const animateMobileMenu = (
  element: HTMLElement,
  isOpen: boolean,
  itemSelector: string,
) => {
  if (!element) return;

  if (isOpen) {
    gsap.to(element, {
      height: "auto",
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
    const items = element.querySelectorAll(itemSelector);
    gsap.fromTo(
      items,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.3, stagger: 0.08, delay: 0.1 },
    );
  } else {
    gsap.to(element, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  }
};
