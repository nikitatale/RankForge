import { useEffect, useRef, useState } from "react";

interface ScrollAnimationOptions {
    threshold?: number;       
    rootMargin?: string;     
    once?: boolean;          
}


export function useScrollAnimation<T extends Element = HTMLDivElement>(
    options: ScrollAnimationOptions = {}
) {

    const { threshold = 0.2, rootMargin = "0px 0px -100px 0px", once = true } = options;
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(el);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return [ref, isVisible] as const;
}