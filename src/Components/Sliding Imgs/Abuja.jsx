import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";



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


    return (
        <div className="w-full mx-auto py-10">
            <Splide
                options={{
                    type: "loop",
                    perPage: 2,
                    gap: "1rem",
                    autoplay: true,
                    focus: "center",
                    interval: 2000,
                    pagination: false,
                    lazyLoading: "sequential",
                    breakpoints: {
                        1024: { perPage: 2 },
                        640: { perPage: 1 },
                    },
                }}>

                {images.map((image) => (
                    <SplideSlide key={image.id}>
                        <div className="relative overflow-hidden rounded-lg shadow-md">
                            <img
                                src={image.src}
                                alt='Therapy'
                                className="w-full h-64 lg:h-80 object-cover" loading="lazy"
                            />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>

            <h4 className="capitalize text-lg my-7 text-center font-bold">
                Abuja art Therapy
            </h4>
        </div>
    )
}

export default Abuja