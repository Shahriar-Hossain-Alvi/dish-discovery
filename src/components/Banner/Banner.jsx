import './Banner.css'
const Banner = () => {
    return (
        <div className="container mx-auto mb-24">
            <div className="hero rounded-xl banner-img">
                <div className="hero-content text-center text-neutral-content">
                    <div className='py-32 px-20 space-y-5'>
                        <h1 className="text-white lexend text-5xl font-bold">Savor Every Bite: Unveiling a Feast of Flavor and Creativity</h1>
                        <p className="text-white lexend text-lg">Indulge in a culinary journey with our exquisite recipes, meticulously crafted to tantalize your taste buds. Discover a symphony of flavors and aromas, right at your fingertips.</p>
                        <div className='space-x-5'>
                            <button className='btn btn-lg rounded-full bg-[#0BE58A] text-[#150B2B] lexend text-xl font-semibold border border-[#0BE58A] hover:bg-transparent hover:border-white hover:text-white'>Explore Now</button>

                            <button className='btn btn-lg rounded-full bg-[#0BE58A] text-[#150B2B] lexend text-xl font-semibold border border-[#0BE58A] hover:bg-transparent hover:border-white hover:text-white'>Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;