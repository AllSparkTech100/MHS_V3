import React from "react";

function Abuja() {

    const images = [
        { src: "/Abjt/aj1.webp" },
        { src: "/Abjt/aj2.webp" },
        { src: "/Abjt/aj3.webp" },
        { src: "/Abjt/aj4.webp" },
        { src: "/Abjt/aj5.webp" },
        { src: "/Abjt/aj6.webp" },
        { src: "/Abjt/aj7.webp" },
        { src: "/Abjt/aj8.webp" },
        { src: "/Abjt/aj9.webp" },
        { src: "/Abjt/aj10.webp" },
        { src: "/Abjt/aj11.webp" },
        { src: "/Abjt/aj12.webp" },
        { src: "/Abjt/aj13.webp" },
        { src: "/Abjt/aj14.webp" },
        { src: "/Abjt/aj15.webp" },
        { src: "/Abjt/aj16.webp" },
    ];

    // Use uniform responsive Tailwind classnames per item (no span constants)

    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 grid-flow-dense">
                {images.map((image, i) => (
                    <div key={image.src} className="relative overflow-hidden rounded-lg shadow-md">
                        <img
                            src={image.src}
                            alt={`Abuja ${i + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Abuja;