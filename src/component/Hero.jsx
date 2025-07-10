import image from '../assets/_ (2).jpeg';

function Hero() {
    return (
        <>
            <section className="w-full md:w-11/12 mx-auto p-12" data-aos="fade-up">
                <div className="text-center space-y-8" data-aos="zoom-in">
                    <h1 className="text-4xl font-semibold" data-aos="fade-right">
                        Apple iPhone 13 Pro Max
                    </h1>
                    <p className="text-lg text-gray-700" data-aos="fade-left">
                        From unmatched speed to cinematic brilliance, <br />
                        experience the next generation of smartphones <br className="md:inline hidden" /> 
                        with the iPhone 13 Pro Max.
                    </p>
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-md" data-aos="zoom-in-up">
                        Buy Now
                    </button>
                </div>

                <div className="flex justify-center items-center" data-aos="fade-up">
                    <div data-aos="flip-left">
                        <img className="w-64 h-[500px] mt-10" src={image} alt="" />
                    </div>
                    <div data-aos="flip-up">
                        <img className="w-72 h-[700px]" src={image} alt="" />
                    </div>
                    <div data-aos="flip-right">
                        <img className="w-64 h-[500px] mt-10" src={image} alt="" />
                    </div>
                </div>

                <div className="space-y-5 mt-16" data-aos="fade-up">
                    <h1 className="text-2xl text-center font-semibold leading-tight tracking-tighter bg-gradient-to-r from-pink-900 via-yellow-700 to-blue-900 text-transparent bg-clip-text" data-aos="zoom-in">
                        Be the first to know about the iPhone 15 launch
                    </h1>
                    <div className="flex justify-center items-center mt-8" data-aos="fade-up">
                        <input
                            className="w-1/2 px-4 py-3 outline-none border border-gray-500 bg-gray-50 rounded-l-lg"
                            type="text"
                            placeholder="Enter your email"
                        />
                        <button
                            className="px-4 py-3 bg-blue-600 text-white rounded-r-lg border border-blue-600 hover:bg-blue-700"
                        >
                            Notify Me
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
