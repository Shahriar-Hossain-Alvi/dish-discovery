import PropTypes from 'prop-types';
import { useState } from 'react';

const Sidebar = ({ wantToCook, setWantToCook }) => {

    const [prepFood, setPrepFood] = useState([]);
    const [times, setTimes] = useState([]);
    const [calories, setCalories] = useState([]);

    const handlePrepButton = (food) => {
        
        //remove item from want to cook table
        const newWantToCook = wantToCook.filter(item => item.recipe_id !== food.recipe_id);
        setWantToCook(newWantToCook);

        //add item to currently cooking table
        const isExist = prepFood.find(item => food.recipe_id === item.recipe_id);

        const totalPrepTime = parseInt( food.preparing_time);

        const totalCalories = parseInt( food.calories);
        if (!isExist) {
            setPrepFood([...prepFood, food]);
        }
        setTimes([...times, totalPrepTime]);
        setCalories([...calories, totalCalories]);

    }

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
                                        <td>{food.preparing_time} minutes</td>
                                        <td>{food.calories} calories</td>
                                        <td><button onClick={() => handlePrepButton(food)} className="btn rounded-full btn-sm md:btn-md lg:btn-md bg-[#0BE58A] text-[#150B2B] font-medium lexend hover:text-[#0BE58A] hover:bg-[#150B2B]">Preparing</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>


            {/* currently cooking table */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#282828] lexend text-center pb-4">Currently cooking: {prepFood.length}</h3>
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
                            {
                                prepFood.map((cooking, index) => (
                                    <tr id='wantToCookRow' key={index}>
                                        <th>{index + 1}</th>
                                        <td>{cooking.recipe_name}</td>
                                        <td>{cooking.preparing_time} minutes</td>
                                        <td>{cooking.calories} calories</td>
                                    </tr>
                                ))
                            }
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
                                <td>Total Time = {
                                        times.reduce((sum, time)=>
                                            sum + time, 0
                                        )
                                    }<span> minutes</span></td>
                                <td>Total Calories ={
                                        calories.reduce((sum, calories)=>
                                            sum + calories, 0
                                        )
                                    }<span>calories</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    wantToCook: PropTypes.array.isRequired,
    setWantToCook: PropTypes.func.isRequired
};

export default Sidebar;