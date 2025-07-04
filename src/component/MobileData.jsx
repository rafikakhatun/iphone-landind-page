function MobileData({ datas }) {

    console.log(datas)
    return (
        <>
            <div
                className="w-72 py-8 px-4 shadow-md border border-gray-300 rounded-md"
                data-aos="fade-up"
            >
                <img
                    src={datas.image}
                    alt="photo"
                    className="w-60 h-64 transform transition duration-300 hover:scale-105"
                    data-aos="zoom-in"
                />
                <div
                    className="flex flex-col justify-center items-center space-y-4 mt-4"
                    data-aos="fade-up"
                >
                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                        {datas.name}
                    </h1>
                    <p className="text-center text-gray-700 text-lg">
                        {datas.title}
                    </p>
                    <p className="text-xl text-green-600">
                        {datas.price}
                    </p>
                    <button className="text-white px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-900">
                        {datas.button}
                    </button>
                </div>
            </div>
        </>
    )
}

export default MobileData;
