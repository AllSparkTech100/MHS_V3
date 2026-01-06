import React from "react";

function Akwa() {
    const images = [
        { src: "/akw/ak1.webp" },
        { src: "/akw/ak2.webp" },
        { src: "/akw/ak3.webp" },
        { src: "/akw/ak4.webp" },
        { src: "/akw/ak5.webp" },
        { src: "/akw/ak6.webp" },
        { src: "/akw/ak7.webp" },
        { src: "/akw/ak8.webp" },
        { src: "/akw/ak9.webp" },
        { src: "/akw/ak10.webp" },
        { src: "/akw/ak11.webp" },
        { src: "/akw/ak12.webp" },
        { src: "/akw/ak13.webp" }
    ];

    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-dense ">
                {images.map((image, i) => (
                    <div key={image.src} className="relative overflow-hidden rounded-lg shadow-md">
                        <img
                            src={image.src}
                            alt={`Akwa ${i + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Akwa;