import { useState, useRef, useEffect } from 'react';

interface CarouselProps {
    children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const slideWidth = 154; // Adjust based on your slide width
    const totalSlides = children.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalSlides - 1)); // Adjust max index
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
            // Calculate total width based on slide width and total slides
            carouselRef.current.style.width = `${slideWidth * totalSlides}px`;
            carouselRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    }, [currentIndex, slideWidth, totalSlides]);

    return (
        <div className="relative overflow-hidden w-full">
            <div className="flex transition-transform duration-500 ease-in-out" ref={carouselRef}>
                {children.map((child, index) => (
                    <div key={index} className={`flex mr-10 w-[${slideWidth}px]`} style={{ width: `${slideWidth}px` }}>
                        {child}
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-1 rounded-full border border-gray-600  opacity-70 hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                disabled={currentIndex >= totalSlides - 1} // Adjust max index check
                className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-gray-600 p-1 rounded-full opacity-70 hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <svg xmlns="http://www.w3.org/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default Carousel;