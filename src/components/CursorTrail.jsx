import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let lastGenerationTime = 0;

        // SVG strings for leaves
        const leafSVGs = [
            `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%232e8b57"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22l1-2.3A13.8,13.8 0 0,0 20,4.87C21.72,3.31 22,1 22,1C22,1 19.38,1 17,8Z"/></svg>`,
        ];

        const handleMouseMove = (e) => {
            const currentTime = performance.now();

            // Allow up to ~90 Hz spawn rate (11ms cooldown) to ensure absolute smoothness
            if (currentTime - lastGenerationTime < 11) return;

            // Give organic irregularity to the stream
            if (Math.random() > 0.6) return;

            lastGenerationTime = currentTime;

            // Use native DOM elements instead of React State to bypass render queue overhead
            const leafWrapper = document.createElement('div');
            const size = Math.random() * 12 + 10;
            const rotation = Math.random() * 360;

            leafWrapper.style.position = 'absolute';
            // Use pageX/pageY for accurate scrolling positioning, offset by half size to spawn perfectly centered to cursor
            leafWrapper.style.left = `${e.pageX - size / 2}px`;
            leafWrapper.style.top = `${e.pageY - size / 2}px`;
            leafWrapper.style.transform = `rotate(${rotation}deg)`;
            leafWrapper.style.pointerEvents = 'none';
            leafWrapper.style.willChange = 'transform, opacity'; // Force hardware GPU acceleration

            const img = document.createElement('img');
            img.src = leafSVGs[0];
            img.className = 'cursor-leaf-trail';
            img.style.width = `${size}px`;
            img.style.height = `${size}px`;
            img.style.display = 'block';

            leafWrapper.appendChild(img);

            if (containerRef.current) {
                containerRef.current.appendChild(leafWrapper);
            }

            // Cleanup via non-blocking timeout matching the CSS animation payload
            setTimeout(() => {
                if (leafWrapper.parentNode) {
                    leafWrapper.parentNode.removeChild(leafWrapper);
                }
            }, 500);
        };

        // Register passive event listener so browser scroll thread is NEVER blocked by mouse tracking
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 999999
            }}
        />
    );
};

export default CursorTrail;
