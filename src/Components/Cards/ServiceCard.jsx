import {
    suicide,
    art, counsel,
    child_counsel,
    therapist_img,
    converse,
    convert,
} from "../../lib/Images";


function ServiceCard() {
    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:gap-y-10 gap-y-6 gap-x-4 p-4 lg:grid-cols-3">

                <div className="h-64 lg:h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={art} loading='lazy' className="object-cover w-full h-full" alt="Art Therapy" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl lg:text-3xl font-semibold">
                        art therapy
                    </h4>
                    <p className="mt-3 text-lg">
                        A creative approach to mental health that uses art-making to explore emotions, reduce stress, and enhance self-awareness.
                    </p>
                </div>
                {/* first */}
                <div className="h-64 lg:h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={counsel} loading="lazy" className="object-cover w-full h-full" alt="Cognitive Thearpy" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl lg:text-3xl font-semibold  ">
                        cognitive-behavioural therapy
                    </h4>
                    <p className="mt-3 text-lg">
                        A structured, evidence-based therapy aimed at identifying and changing negative thought patterns and behaviours to improve emotional well-being.
                    </p>
                </div>
                {/* second */}
                <div className="h-64 lg:h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={child_counsel} loading="lazy" className="object-cover object-top w-full h-full" alt="REBT" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl lg:text-3xl  font-semibold  ">
                        Dialectical behavioural/REBT
                    </h4>
                    <p className="mt-3 text-lg">
                        A specialized form of therapy that combines mindfulness, emotional regulation, and practical strategies to address intense emotions and improve interpersonal skills.
                    </p>
                </div>
                {/* third */}
                <div className="h-64 lg:h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={therapist_img} loading="lazy" className="object-top object-cover w-full h-full" alt="Behaviour Modification" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl lg:text-3xl font-semibold  ">
                        behavioural modification
                    </h4>
                    <p className="mt-3 text-lg">
                        A therapy focused on replacing unhealthy behaviours with positive ones through reinforcement techniques and goal-setting.
                    </p>
                </div>
                {/* fourth */}
                <div className="h-64 lg:h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={converse} loading="lazy" className="object-cover w-full h-full" alt="Counselling" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl lg:text-3xl font-semibold  ">
                        counselling
                    </h4>
                    <p className="mt-3 text-lg">
                        A supportive process that provides a safe space for individuals to discuss their challenges, gain insight, and develop coping strategies.
                    </p>
                </div>
                {/* fifth */}
                <div className="h-64 lg:h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={suicide} loading="lazy" className="object-cover w-full h-full" alt="Suicide Intervention" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl lg:text-3xl font-semibold  ">
                        suicide intervention
                    </h4>
                    <p className="mt-3 text-lg">
                        Immediate and compassionate support aimed at preventing suicide by addressing underlying issues and creating a safety plan.
                    </p>
                </div>
                {/* sixth */}
                <div className="h-64 lg:h-64 md:h-96 w-full object-center overflow-hidden rounded-lg">
                    <img src={convert} loading="lazy" className="object-cover w-full h-full" alt="Psycho Education" />
                </div>
                <div className="...">
                    <h4 className="capitalize flex items-center gap-4 text-2xl lg:text-3xl font-semibold  ">
                        psycho education
                    </h4>
                    <p className="mt-3 text-lg">
                        Providing individuals and families with knowledge about mental health conditions, treatment options, and coping skills to promote understanding and recovery.
                    </p>
                </div>
                {/* seventh */}
            </div>
        </>
    )
}

export default ServiceCard;