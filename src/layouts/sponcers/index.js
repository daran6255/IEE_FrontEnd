import React, { useRef, useEffect } from 'react';
import sponcer_1 from '../../assets/images/sponcers/WVI.png';
import sponcer_2 from '../../assets/images/sponcers/WVI.png';
import sponcer_3 from '../../assets/images/sponcers/WVI.png';

const SponsorsMarquee = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        let animationId;

        const startAnimation = () => {
            const speed = 20; // Adjust the speed of the animation (lower values for faster)
            const containerWidth = marquee.offsetWidth;
            const contentWidth = marquee.scrollWidth;

            const animate = () => {
                marquee.scrollLeft += 1; // Adjust the scroll speed (increase for faster)
                if (marquee.scrollLeft >= contentWidth - containerWidth) {
                    marquee.scrollLeft = 0;
                }
            };

            animationId = setInterval(animate, speed);
        };

        const stopAnimation = () => {
            clearInterval(animationId);
        };

        startAnimation();

        // Clean up function to stop animation on component unmount
        return () => {
            stopAnimation();
        };
    }, []);

    return (
        <div className="sponsors-marquee" ref={marqueeRef}>
            <div className="marquee-content">
                {/* Repeat sponsor logos/images as needed */}
                <img src={sponcer_1} alt="Sponsor 1" className="sponsor-logo" />
                <img src={sponcer_2} alt="Sponsor 2" className="sponsor-logo" />
                <img src={sponcer_3} alt="Sponsor 3" className="sponsor-logo" />
                <img src={sponcer_3} alt="Sponsor 3" className="sponsor-logo" />
                <img src={sponcer_3} alt="Sponsor 3" className="sponsor-logo" />
                <img src={sponcer_3} alt="Sponsor 3" className="sponsor-logo" />
                <img src={sponcer_3} alt="Sponsor 3" className="sponsor-logo" />
                {/* Add more sponsor images */}
            </div>
        </div>
    );
};

export default SponsorsMarquee;
