const Sidebar = () => {
    return (
        <div className="border border-[#28282833] pt-8 pb-24">
            {/* want to cook table */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#282828] lexend text-center pb-4">Want to cook: 01</h3>
                <hr className="w-2/3 mx-auto mb-6" />
                <div className="overflow-x-auto">
                    <table className="table">
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
                        <tbody className="fira-sans text-[#282828B2]">
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td><button className="btn rounded-full bg-[#0BE58A] text-[#150B2B] font-medium lexend hover:text-[#0BE58A] hover:bg-[#150B2B]">Preparing</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            {/* currently cooking table */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#282828] lexend text-center pb-4">Currently cooking: 02</h3>
                <hr className="w-2/3 mx-auto mb-6" />
                <div className="overflow-x-auto">
                    <table className="table">
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
                    <table className="table table-lg">
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

export default Sidebar;