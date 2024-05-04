import { useRef, useEffect } from "react";

export const useIntersectionObserver = (callback, options) => {
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(callback, options);
        return () => observer?.current?.disconnect();
    }, [callback, options]);

    return observer?.current;
};