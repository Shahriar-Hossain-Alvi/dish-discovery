import './Banner.css'
const Banner = () => {
    return (
        <div className="container mx-auto mb-10 lg:mb-24">
            <div className="hero lg:rounded-xl banner-img">
                <div className="hero-content text-left lg:text-center text-neutral-content">
                    <div className='py-5 lg:py-32 px-5 lg:px-20 space-y-5'>
                        <h1 className="text-white lexend text-3xl lg:text-5xl font-bold">Savor Every Bite: Unveiling a Feast of Flavor and Creativity</h1>
                        <p className="text-white lexend lg:text-lg">Indulge in a culinary journey with our exquisite recipes, meticulously crafted to tantalize your taste buds. Discover a symphony of flavors and aromas, right at your fingertips.</p>
                        <div className='space-x-3  lg:space-x-5 flex justify-center'>
                            <button className='btn lg:btn-lg rounded-full bg-[#0BE58A] text-[#150B2B] lexend text-lg lg:text-xl font-semibold border border-[#0BE58A] hover:bg-transparent hover:border-white hover:text-white'>Explore Now</button>

                            <button className='btn lg:btn-lg rounded-full bg-[#0BE58A] text-[#150B2B] lexend text-lg lg:text-xl font-semibold border border-[#0BE58A] hover:bg-transparent hover:border-white hover:text-white'>Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;