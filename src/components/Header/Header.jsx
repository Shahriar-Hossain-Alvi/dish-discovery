import '../../index.css'
const Header = () => {
    return (
        <header className="container mx-auto my-3">
            <nav>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='hover:underline  hover:text-[#02b76c]'><a href="">Home</a></li>
                            <li className='hover:underline  hover:text-[#02b76c]'><a href="">Recipes</a></li>
                            <li className='hover:underline  hover:text-[#02b76c]'><a href="">About</a></li>
                            <li className='hover:underline  hover:text-[#02b76c]'><a href="">Search</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl lg:text-3xl font-bold text-[#150B2B] lexend">Dish Discovery</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-10 text-[#150B2BB2] lexend menu menu-horizontal px-1">
                            <li className='hover:underline  hover:text-[#02b76c]'><a href="">Home</a></li>
                            <li className='hover:underline  hover:text-[#02b76c]'><a href="">Recipes</a></li>
                            <li className='hover:underline  hover:text-[#02b76c]'><a href="">About</a></li>
                            <li className='hover:underline  hover:text-[#02b76c]'><a href="">Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-2">
                        <div className="form-control">
                            <label className="input input-bordered flex flex-row-reverse items-center gap-2 rounded-full">
                                <input type="text" className="hidden md:block lg:block grow" placeholder="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar flex items-center">
                                <div className="w-16 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="p-2 bg-[#0BE58A]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>

                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
