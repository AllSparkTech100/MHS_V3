import {
    helping,
    eap,
    brain,
    marriage,
    pna,
    bm,
    meditate,
    psycho,
} from "../../lib/Images";
import { LuSend } from "react-icons/lu";

const services = [
    {
        img: eap,
        title: "Employee Assistance Programs (EAPs)",
        desc: "Empower your workforce with confidential support for personal and professional challenges. Our EAPs offer counseling, stress management, and resources to boost employee well-being, productivity, and workplace harmony.",
    },
    {
        img: pna,
        title: "Psychological Needs Audits",
        desc: "Gain deep insights into your organization’s mental health landscape. Our audits assess psychological needs, identify gaps, and provide actionable strategies to foster a supportive, resilient environment for all.",
    },
    {
        img: marriage,
        title: "Counseling & Therapy(individual & group)",
        desc: "Experience transformative change through personalized counseling and group therapy. We provide a safe, empathetic space to address emotional struggles, build coping skills, and nurture lasting mental wellness.",
    },
    {
        img: brain,
        title: "Cognitive-Behavioural Therapy",
        desc: "Break free from negative thought patterns with evidence-based CBT. Our therapists guide you to recognize, challenge, and replace unhelpful beliefs, leading to improved mood, behavior, and overall mental health.",
    },

    {
        img: meditate,
        title: "Dialectical Behavioural/REBT",
        desc: "Master emotional regulation and resilience with DBT and Rational Emotive Behavior Therapy. These approaches blend mindfulness, practical strategies, and cognitive restructuring to help you manage intense emotions and thrive.",
    },

    {
        img: bm,
        title: "Behavioural Modification",
        desc: "Transform habits and behaviors for a healthier life. Our behavioral modification programs use proven reinforcement techniques and goal-setting to replace unhealthy patterns with positive, sustainable actions.",
    },

    {
        img: helping,
        title: "Suicide Intervention",
        desc: "Receive immediate, compassionate support in times of crisis. Our suicide intervention services focus on safety planning, emotional stabilization, and addressing root causes to prevent self-harm and promote recovery.",
    },

    {
        img: psycho,
        title: "Psycho Education",
        desc: "Empower yourself and your loved ones with knowledge. Our psychoeducation sessions cover mental health conditions, treatment options, and coping strategies, fostering understanding and proactive management of well-being.",
    },
];

function ServiceCard() {
    return (
        <div className="w-full px-2 py-8">
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-3
                "
            >
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="lg:w-90 w-full max-w-full min-h-[220px] bg-white rounded-3xl flex flex-col items-center overflow-hidden justify-start border-2 border-[#88c040] transition-all duration-500"
                    >
                        {/* relative top-10*/}
                        <div className="w-full h-46 md:h-56 lg:h-52 overflow-hidden flex items-center justify-center border-lg border-green-500">
                            <img
                                src={service.img}
                                alt={service.title}
                                loading="lazy"
                                className="border-3 border-green-500 object-top w-full h-full"
                            />
                        </div>
                        <h4 className="text-xl md:text-2xl lg:text-2xl text-center font-medium text-[#02514b] py-4 px-2 capitalize">
                            {service.title}
                        </h4>
                        <p className="text-base md:text-lg px-4 pb-6 text-left text-gray-700">
                            {service.desc}
                        </p>
                        <a
                            href={`mailto:mentalhealthplus24@gmail.com?subject=Book%20Now%20-%20${encodeURIComponent(service.title)}`}
                            className="flex items-center gap-4 mb-4 px-6 py-2 text-white rounded-lg font-semibold shadow bg-[#02514b] transition-colors duration-200"
                            target="_blank"
                            // rel="noopener noreferrer"
                        >
                            <LuSend size={25} />Book Now
                        </a>
                    </div>
                ))}
                <button className="py-4 px-3 bg-green-500 border-0"></button>
            </div>
        </div >
    );
}

export default ServiceCard;
