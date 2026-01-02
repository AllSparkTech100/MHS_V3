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
    ];

    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, i) => {
                    const itemClass =
                        i === 0
                            ? "relative overflow-hidden rounded-lg shadow-md col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 h-64 sm:h-80 md:h-96"
                            : i === 2 || i === 8
                            ? "relative overflow-hidden rounded-lg shadow-md col-span-1 md:col-span-2 h-56 md:h-72"
                            : i === 5 || i === 6
                            ? "relative overflow-hidden rounded-lg shadow-md col-span-1 sm:col-span-2 h-60 md:h-80"
                            : "relative overflow-hidden rounded-lg shadow-md h-48 sm:h-56 md:h-64";

                    return (
                        <div key={image.src} className={itemClass}>
                            <img
                                src={image.src}
                                alt={`Akwa ${i + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    );
                })}
            </div>

            <h4 className="capitalize text-lg my-7 text-center font-bold">
                akwa-ibom Therapy
            </h4>
        </div>
    );
}

export default Akwa;