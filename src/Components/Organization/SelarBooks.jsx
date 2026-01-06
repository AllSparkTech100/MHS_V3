
function SelarBooks() {

    const books = [
        {
            id: 1,
            name: 'Mental Health First Aid',
            image: '/firstbook.png',
            link: 'https://selar.com/mentalhealthfirstaid?',
            author: 'Alexander Comfort'
        },
        {
            id: 2,
            name: 'Before the Breakdown',
            image: '/breakdown.png',
            link: 'https://selar.com/bf5c35',
            author: 'Alexander Comfort'
        }
    ];

    return (
        <>
            <div className="max-w-7xl mx-auto p-4">
                <h3 className="text-2xl font-semibold text-black mb-6">Our Books</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.map((book) => (
                        <div key={book.id} className="flex flex-col lg:flex-row items-stretch bg-white/60 rounded-lg shadow-md overflow-hidden">
                            <a href={book.link} target="_blank" rel="noopener noreferrer" className="block w-full lg:w-40 flex-shrink-0">
                                <img src={book.image} alt={book.name} className="w-full h-auto max-h-80 lg:max-h-40 object-contain" />
                            </a>

                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h4 className="text-lg font-medium text-black mb-2">{book.name}</h4>
                                    <h4 className="text-lg font-medium text-black mb-2">{book.author}</h4>
                                    <p className="text-sm text-gray-700 mb-4 hidden lg:block">Get a copy of our e-book on Selar.</p>
                                </div>
                                <div>
                                    <a href={book.link} target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-4 bg-green-800 text-white font-bold rounded-sm">Read now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SelarBooks;