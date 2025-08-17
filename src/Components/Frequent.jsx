import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FaArrowDown } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


function Frequent() {
    const New = [
        {
            title: "How Common are Mental Health Issues? ",
            text: " Mental health issues are common. According to the World Health Organization, around 1 in 4 people globally will experience a mental health condition at some point in their lives.",
        },
        {
            title: "What are some common signs of mental health problems? ",
            text: " Signs may include changes in mood, prolonged sadness or irritability, changes in sleep or appetite, withdrawal from activities, and difficulty concentrating. However, everyone is unique, and signs can vary.",
        },
        {
            title: "How can I support someone with a mental health condition? ",
            text: " Offer your support and listen without judgment. Encourage them to seek professional help, educate yourself about their condition, and be patient and understanding.",
        },
        {
            title: "Are mental health issues treatable? ",
            text: "Yes, many mental health conditions are treatable. Treatment options include therapy, medication, lifestyle changes, and support from mental health professionals.",
        },
    ];
    return (
        <>
            <div className="container h-auto p-6 mx-auto mt-28 lg:mt-52">
                <div className="grid grid-col-1 lg:grid-cols-2 gap-5">
                    <div className="mt-4 mb-4">
                        <h4 className="font-medium text-2xl lg:text-6xl md:text-2xl capitalize">
                            frequently asked <br /> questions
                        </h4><p className="my-2 text-lg">
                            your privacy and comfort is our priority!!
                        </p>
                        <button className="mt-3 items-center justify-center p-3 lg:p-4 outline-none lg:transition-all  lg:hover:scale-90  bg-[#02514b] flex gap-3 rounded-lg text-white">
                            <span><IoCall size={25} /></span>
                            <a href="tel:+2348149944531">+2348149944531</a>
                        </button>
                    </div>

                    <div>
                        {New.map((quest, index) => {
                            return (
                                <Accordion key={index}>

                                    <AccordionSummary
                                        expandIcon={<FaArrowDown />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <div className='font-bold capitalize' >{quest.title} </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {quest.text}
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}


                    </div>
                </div>
            </div>

        </>
    )
}

export default Frequent