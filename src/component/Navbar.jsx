function Navbar() {
    return (
        <>
            <section 
                className="w-11/12 mx-auto bg-blue-50"
                data-aos="fade-down"
            >
                <nav className="p-8 flex justify-between">
                    <h1
                        className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text"
                        data-aos="fade-right"
                    >
                        iPhoneWorld
                    </h1>
                    
                    <button
                        className="px-8 py-2 bg-blue-600 rounded-md text-white text-lg"
                        data-aos="zoom-in"
                    >
                        Login
                    </button>
                </nav>
            </section>
        </>
    );
}

export default Navbar;
