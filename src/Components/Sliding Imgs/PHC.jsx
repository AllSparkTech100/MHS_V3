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
        { src: "/pha/ph10.webp" },
        { src: "/pha/ph11.webp" },
        { src: "/pha/ph12.webp" },
        { src: "/pha/ph13.webp" },
        { src: "/pha/ph14.webp" },
        { src: "/pha/ph15.webp" },
    ];

    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, i) => {
                    const itemClass =
                        i === 0
                            ? "relative overflow-hidden rounded-lg shadow-md col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 h-64 sm:h-80 md:h-96"
                            : i === 2 || i === 9
                            ? "relative overflow-hidden rounded-lg shadow-md col-span-1 md:col-span-2 h-56 md:h-72"
                            : i === 5 || i === 6
                            ? "relative overflow-hidden rounded-lg shadow-md col-span-1 sm:col-span-2 h-60 md:h-80"
                            : "relative overflow-hidden rounded-lg shadow-md h-48 sm:h-56 md:h-64";

                    return (
                        <div key={image.src} className={itemClass}>
                            <img
                                src={image.src}
                                alt={`PHC ${i + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    );
                })}
            </div>

            <h4 className="capitalize text-lg my-7 text-center font-bold">
                port-harcourt art Therapy
            </h4>
        </div>
    );
}

export default PHC;