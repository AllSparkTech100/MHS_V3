import React from "react";

function PHC() {
    const images = [
        { src: "/pha/ph1.webp" },
        { src: "/pha/ph2.webp" },
        { src: "/pha/ph3.webp" },
        { src: "/pha/ph4.webp" },
        { src: "/pha/ph5.webp" },
        { src: "/pha/ph6.webp" },
        { src: "/pha/ph7.webp" },
        { src: "/pha/ph8.webp" },
        { src: "/pha/ph9.webp" },
        { src: "/pha/ph10.webp" }
    ];

    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 grid-flow-dense">
                {images.map((image, i) => (
                    <div key={image.src} className="relative h-68 overflow-hidden rounded-lg shadow-md">
                        <img
                            src={image.src}
                            alt={`PHC ${i + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover object-top-center"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PHC;