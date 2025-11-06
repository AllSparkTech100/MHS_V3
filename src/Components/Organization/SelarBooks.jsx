


function SelarBooks() {
    return (
        <>
            <div className="h-auto grid mt-30 grid-cols-3 p-4">
                <div className="flex items-center justify-center gap-3 h-72 w-80 lg:w-96 overflow-hidden rounded-lg shadow-md shadow-black bg-white/50">
                    <div className="h-full w-80">
                        <img src="/firstbook.png" alt="Mental Health First Aid" className="object-cover h-full w-full" />
                    </div>

                    <div className="p-3">
                        <h4 className="my-5 capitalize fw-medium text-md lg:text-lg text-black">
                            get a copy of our e-book on selar
                        </h4>
                        <button className="py-3 px-5 rounded-sm bg-green-800 flex items-center justify-center">
                            <a href="https://selar.com/mentalhealthfirstaid?" className="capitalize text-white font-bold" target="_blank" >Buy now</a>
                        </button>
                    </div>
                </div>
            </div>

        </>

    );
}

export default SelarBooks;