import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
        <div className="w-full mx-auto py-10">
            <Splide
                options={{
                    type: "loop",
                    perPage: 2,
                    gap: "1rem",
                    autoplay: true,
                    interval: 2000,
                    pagination: false,
                    focus: "center",
                    breakpoints: {
                        1024: { perPage: 2 },
                        640: { perPage: 1 },
                    },
                    lazyLoading: "sequential",
                }}
            >
                {images.map((image) => (
                    <SplideSlide key={image.id}>
                        <div className="relative overflow-hidden rounded-lg shadow-md">
                            <img
                                src={image.src}
                                alt='Portharcourt Therapy'
                                className="w-full h-64 lg:h-80  object-cover bg-top" loading="lazy"
                            />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>

            <h4 className="capitalize text-lg my-7 text-center font-bold">
                port-harcourt art Therapy
            </h4>
        </div>
    )
}

export default PHC