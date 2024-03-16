import PropTypes from 'prop-types';

const Sidebar = ({ wantToCook }) => {
    return (
        <div className="border w-full lg:w-2/5 border-[#28282833] pt-8 lg:rounded-2xl pb-24">
            {/* want to cook table */}
            <div className="mb-8">
                {/* TOAST start */}
                <div id='toast-container' className="toast toast-top toast-end z-30 hidden">
                    <div className="alert alert-info bg-[#150B2B]">
                        <span className='text-[#0BE58A] text-sm md:text-base lg:text-xl font-semibold lexend'>You have already added this dish!</span>
                    </div>
                </div>
                {/* TOAST end */}

                <h3 className="text-2xl font-semibold text-[#282828] lexend text-center pb-4">Want to cook: {wantToCook.length}</h3>

                <hr className="w-2/3 mx-auto mb-6" />

                <div className="overflow-x-auto">
                    <table className="table table-sm md:table-lg lg:table-md">
                        {/* head */}
                        <thead className="text-[#878787] font-medium fira-sans">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        {/* body */}
                        <tbody className="fira-sans text-[#282828B2]">
                            {
                                wantToCook.map((food, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{food.recipe_name}</td>
                                        <td>{food.preparing_time}</td>
                                        <td>{food.calories}</td>
                                        <td><button className="btn rounded-full btn-sm md:btn-md lg:btn-md bg-[#0BE58A] text-[#150B2B] font-medium lexend hover:text-[#0BE58A] hover:bg-[#150B2B]">Preparing</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>


            {/* currently cooking table */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#282828] lexend text-center pb-4">Currently cooking: 02</h3>
                <hr className="w-2/3 mx-auto mb-6" />
                <div className="overflow-x-auto">
                    <table className="table table-sm lg:table-md md:table-lg">
                        {/* head */}
                        <thead className="text-[#878787] font-medium fira-sans">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody className="fira-sans text-[#282828B2]">
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            {/* time and calory calculation table */}
            <div className="mb-8">
                <div className="overflow-x-auto">
                    <table className="table table-sm lg:table-md md:table-lg">
                        <tbody className="fira-sans text-[#282828B2]">
                            <tr>
                                <th className="opacity-0">1</th>
                                <td className="opacity-0">something here</td>
                                <td>Total Time =
                                    45 minutes</td>
                                <td>Total Calories =
                                    1050 calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    wantToCook: PropTypes.object.isRequired,
};

export default Sidebar;