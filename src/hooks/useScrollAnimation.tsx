import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Component wrapper for scroll animations
interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";
  delay?: number;
  duration?: number;
}

export const ScrollAnimation = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 600,
}: ScrollAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const baseStyles: React.CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    transitionDelay: `${delay}ms`,
  };

  const hiddenStyles: Record<string, React.CSSProperties> = {
    "fade-up": { opacity: 0, transform: "translateY(40px)" },
    "fade-left": { opacity: 0, transform: "translateX(-40px)" },
    "fade-right": { opacity: 0, transform: "translateX(40px)" },
    "scale": { opacity: 0, transform: "scale(0.9)" },
    "fade": { opacity: 0, transform: "none" },
  };

  const visibleStyles: React.CSSProperties = {
    opacity: 1,
    transform: "translateY(0) translateX(0) scale(1)",
  };

  const animationStyles = isVisible
    ? { ...baseStyles, ...visibleStyles }
    : { ...baseStyles, ...hiddenStyles[animation] };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={animationStyles}
    >
      {children}
    </div>
  );
};

export default useScrollAnimation;
