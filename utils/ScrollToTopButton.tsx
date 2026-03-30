'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 9999,
            }}
        >
            <button
                ref={buttonRef}
                className={`rounded-full text-white p-2 shadow-xl ${
                    isVisible
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
                style={{
                    background: 'rgb(185, 28, 28)',
                    transform: 'translate(0, 0)',
                    transition: '0.5s',
                }}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <ChevronUp className="w-6 h-6" />
            </button>
        </div>
    );
};

export default ScrollToTopButton;
