import Book from '../Components/Forms/Book'

function Booking() {
    return (
        <>
            <div className="mt-10 mx-auto space-y-18 container h-auto p-4">
                <h4 className="text-lg font-bold lg:text-4xl capitalize">
                    client booking
                </h4>
                <p className="my-6 text-lg ">
                To help us serve you better , please fill out the following information. Your responses will help us understand your preferences and requirements.
                </p>
                <div>
                    <Book />
                </div>
            </div>

        </>
    )
}

export default Booking