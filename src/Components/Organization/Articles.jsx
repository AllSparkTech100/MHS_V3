
function Articles() {
    const Posts = [
        {
            title: "WHY DO SOME PEOPLE STRUGGLE WITH DEPENDENT PERSONALITY PATTERNS?",
            text: "When you constantly fear being alone, struggle to make decisions without reassurance, or feel anxious at the thought of displeasing others, it might not just be “a soft heart.” It could be what clinicians call Dependent Personality Patterns (DPP) or, as a diagnosis, Dependent Personality Disorder (DPD).",
            link: "https://medium.com/@mentalhealthispreservedwealth/why-do-some-people-struggle-with-dependent-personality-patterns-6f5b94da01f5"
        },
        {
            title: "HOW DO I KNOW IF I HAVE WORKPLACE ANXIETY?",
            text: "Workplace anxiety isn’t a diagnosis on its own, but it can show up as part of Generalized Anxiety Disorder (GAD), Social Anxiety Disorder, or even Panic Disorder, all depending on what triggers it and how it affects you.",
            link: "https://medium.com/@mentalhealthispreservedwealth/how-do-i-know-if-i-have-workplace-anxiety-ea007c9f741e"
        },
        {
            title: "WHEN DOES NORMAL SADNESS TURN INTO DEPRESSION?",
            text: "Everyone gets sad because sadness is a normal, healthy human emotion. It helps us process what matters.But depression is different. Here’s how to tell the difference. Sadness says:",
            link: "https://medium.com/@mentalhealthispreservedwealth/when-does-normal-sadness-turn-into-depression-ed43f96461f7"
        },
    ];
    return (
        <div className="container mx-auto h-full px-4 py-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
                {Posts.map((items, index) => {
                    return (
                        <div
                            key={index}
                            className="lg:w-90 w-full max-w-full min-h-[320px] h-auto bg-white rounded-3xl flex flex-col items-center overflow-hidden justify-between border-2 border-[#88c040] shadow-lg transition-all duration-500 p-4"
                        >

                            <div className="w-full flex-1 flex flex-col">
                                <h4 className="text-xl md:text-2xl lg:text-xl text-center font-bold text-[#02514b] py-4 px-2 capitalize">
                                    {items.title}
                                </h4>
                                <p className="text-base md:text-lg px-2 pb-4 text-left text-gray-700 flex-1">
                                    {items.text}.......<a href={items.link} className="inline-flex items-center gap-3 mb-2  text-blue-400  font-semibold shadow transition-colors duration-200 underline"
                                        target="_blank">Read More</a>
                                </p>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className="w-full flex mx-auto justify-center mt-4 lg:mt-30 md:mt-20">
                <a
                    href="https://medium.com/@mentalhealthispreservedwealth"
                    className="inline-flex items-center gap-3 mb-2 px-6 py-2 text-white rounded-lg font-semibold shadow bg-[#02514b] transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    View the Mental Health Journal
                </a>
            </div>
        </div>
    )
}

export default Articles