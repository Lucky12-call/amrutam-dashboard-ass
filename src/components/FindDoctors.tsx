import { useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import { MdLocationPin, MdOutlineMessage } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const FindDoctors = () => {
    const [selectedCity, setSelectedCity] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = () => {
        console.log(`You submitted: ${inputValue}`);
    };

    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(event.target.value);
    };
    return (
        <div className="w-full h-[175vh] mt-20">
            <div className="w-full h-[30vh] bg-[#EAF2EA] relative overflow-hidden">
                <div className="h-32 w-32 rounded-full bg-[#CFEBCF80] absolute -top-12 left-20"></div>
                <div className="h-32 w-32 rounded-full bg-[#CFEBCF80] absolute -top-12 right-20"></div>
                <div className="h-32 w-32 rounded-full bg-[#CFEBCF80] absolute -bottom-12 left-36"></div>
                <div className="h-32 w-32 rounded-full bg-[#CFEBCF80] absolute -bottom-12 right-36"></div>

                <h1 className="text-4xl font-semibold text-[#3A643B] text-center pt-12">
                    Find expert Doctors for an In-clinic session here{" "}
                </h1>

                <div className="w-full flex justify-center items-center gap-2 mt-8">
                    <select
                        value={selectedCity}
                        onChange={handleChange}
                        className="w-44 px-6 py-3 border border-gray-300 rounded-lg shadow-sm outline-none"
                    >
                        <option
                            value=""
                            disabled
                            className="flex justify-between items-center gap-2"
                        >
                            <MdLocationPin /> Select Location
                        </option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>

                    <div className="w-[500px] flex justify-center items-center border border-gray-300 rounded-lg">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="eg. Doctor, specialization, clinic name"
                            className="w-[90%] px-6 py-3 rounded-l-lg shadow-sm outline-none"
                        />
                        <button
                            onClick={handleSubmit}
                            className="w-[10%] bg-white p-3 rounded-r-lg pr-6"
                        >
                            <FaArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center gap-20 mt-5">
                <select className="px-6 py-3 border border-gray-300 rounded-lg shadow-sm outline-none bg-[#F3F3F3]">
                    <option
                        value=""
                        className="flex justify-between items-center gap-2"
                    >
                        Expertise
                    </option>
                    <option>option 1</option>
                    <option>option 1</option>
                </select>

                <select className="px-6 py-3 border border-gray-300 rounded-lg shadow-sm outline-none bg-[#F3F3F3]">
                    <option
                        value=""
                        className="flex justify-between items-center gap-2"
                    >
                        Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>

                <select className="px-6 py-3 border border-gray-300 rounded-lg shadow-sm outline-none bg-[#F3F3F3]">
                    <option
                        value=""
                        className="flex justify-between items-center gap-2"
                    >
                        Fees
                    </option>
                    <option>20000</option>
                    <option>30000</option>
                </select>

                <select className="px-6 py-3 border border-gray-300 rounded-lg shadow-sm outline-none bg-[#F3F3F3]">
                    <option
                        value=""
                        className="flex justify-between items-center gap-2"
                    >
                        Languages
                    </option>
                    <option>Hindi</option>
                    <option>English</option>
                </select>

                <select className="px-6 py-3 border border-gray-300 rounded-lg shadow-sm outline-none bg-[#F3F3F3]">
                    <option
                        value=""
                        className="flex justify-between items-center gap-2"
                    >
                        All filters
                    </option>
                    <option>option 1</option>
                    <option>option 1</option>
                </select>
            </div>

            <div className="flex justify-end items-center gap-5 mt-16">
                <h1 className="flex justify-center items-center gap-2 text-xl rounded-full p-3 bg-[#EAF2EA]"><span>Hair care</span> <RxCross2 /></h1>
                <h1 className="flex justify-center items-center gap-2 text-xl rounded-full p-3 bg-[#EAF2EA]"><span>Female</span> <RxCross2 /></h1>
                <h1 className="flex justify-center items-center gap-2 text-xl rounded-full p-3 bg-[#EAF2EA]"><span>Rs.0-Rs.500</span> <RxCross2 /></h1>
                <h1 className="flex justify-center items-center gap-2 text-xl rounded-full p-3 bg-[#EAF2EA]"><span>Hindi</span> <RxCross2 /></h1>
            </div>

            {/* experts  */}
            <div className="flex justify-between items-center mt-10">
                <div className="h-[550px] w-[360px] flex flex-col items-center bg-[#FFF7E2] rounded-2xl shadow-xl mx-4 py-5 px-5 ">
                    {/* image and name div  */}
                    <div className="w-[150px] justify-center relative mb-4">
                        <img src="girl-pic.png" alt="girl-img-3" className="rounded-full" />
                        <div className="w-20 flex justify-center items-center gap-2 rounded-full bg-zinc-950 text-white p-1 absolute -bottom-1 left-[22%]">
                            4.5{" "}<FaStar size={20} color="#EEDE4D" />
                        </div>
                    </div>

                    <h2 className="text-3xl text-center  font-semibold mb-2">Dr. Prerna Narang</h2>

                    <div className="pl-10 mb-2">
                        <p className="flex justify-start items-center mb-2 gap-2"><IoIosLink size={24} />Male-Female Infertility</p>

                        <p className="flex justify-start items-center mb-2 gap-2"><LuGraduationCap size={24} /> 7 years of Experience</p>

                        <p className="flex justify-start items-center mb-2 gap-2"><MdOutlineMessage size={24} />Speaks: English, Hindi, Marathi</p>
                    </div>

                    <div className="flex justify-between items-center gap-2 mb-8">
                        <div className="text-sm w-1/2 h-16 flex flex-col justify-center items-center border border-gray-400 rounded-xl p-1">
                            <p className="text-center">Video Consultation</p>
                            <p className="text-center">₹800</p>
                        </div>

                        <div className="text-sm w-1/2 h-16 flex flex-col justify-center items-center border border-gray-400 rounded-xl p-1">
                            <p className="text-center">Video Consultation</p>
                            <p className="text-center">₹800</p>
                        </div>
                    </div>

                    <button className="w-full py-2 text-lg border border-[#3A643B]  mb-2 bg-white  rounded-lg">View Profile</button>

                    <button className="w-full py-2.5 text-lg bg-[#3A643B] border border-[#3A643B] text-white  rounded-lg">Book a consultation</button>
                </div>

                <div className="h-[550px] w-[360px] flex flex-col items-center bg-[#FFF7E2] rounded-2xl shadow-xl mx-4 py-5 px-5 ">
                    {/* image and name div  */}
                    <div className="w-[150px] justify-center relative mb-4">
                        <img src="girl-pic.png" alt="girl-img-3" className="rounded-full" />
                        <div className="w-20 flex justify-center items-center gap-2 rounded-full bg-zinc-950 text-white p-1 absolute -bottom-1 left-[22%]">
                            4.5{" "}<FaStar size={20} color="#EEDE4D" />
                        </div>
                    </div>

                    <h2 className="text-3xl text-center  font-semibold mb-2">Dr. Prerna Narang</h2>

                    <div className="pl-10 mb-2">
                        <p className="flex justify-start items-center mb-2 gap-2"><IoIosLink size={24} />Male-Female Infertility</p>

                        <p className="flex justify-start items-center mb-2 gap-2"><LuGraduationCap size={24} /> 7 years of Experience</p>

                        <p className="flex justify-start items-center mb-2 gap-2"><MdOutlineMessage size={24} />Speaks: English, Hindi, Marathi</p>
                    </div>

                    <div className="flex justify-between items-center gap-2 mb-8">
                        <div className="text-sm w-1/2 h-16 flex flex-col justify-center items-center border border-gray-400 rounded-xl p-1">
                            <p className="text-center">Video Consultation</p>
                            <p className="text-center">₹800</p>
                        </div>

                        <div className="text-sm w-1/2 h-16 flex flex-col justify-center items-center border border-gray-400 rounded-xl p-1">
                            <p className="text-center">Video Consultation</p>
                            <p className="text-center">₹800</p>
                        </div>
                    </div>

                    <button className="w-full py-2 text-lg border border-[#3A643B]  mb-2 bg-white  rounded-lg">View Profile</button>

                    <button className="w-full py-2.5 text-lg bg-[#3A643B] border border-[#3A643B] text-white  rounded-lg">Book a consultation</button>
                </div>

                <div className="h-[550px] w-[360px] flex flex-col items-center bg-[#FFF7E2] rounded-2xl shadow-xl mx-4 py-5 px-5 ">
                    {/* image and name div  */}
                    <div className="w-[150px] justify-center relative mb-4">
                        <img src="girl-pic.png" alt="girl-img-3" className="rounded-full" />
                        <div className="w-20 flex justify-center items-center gap-2 rounded-full bg-zinc-950 text-white p-1 absolute -bottom-1 left-[22%]">
                            4.5{" "}<FaStar size={20} color="#EEDE4D" />
                        </div>
                    </div>

                    <h2 className="text-3xl text-center  font-semibold mb-2">Dr. Prerna Narang</h2>

                    <div className="pl-10 mb-2">
                        <p className="flex justify-start items-center mb-2 gap-2"><IoIosLink size={24} />Male-Female Infertility</p>

                        <p className="flex justify-start items-center mb-2 gap-2"><LuGraduationCap size={24} /> 7 years of Experience</p>

                        <p className="flex justify-start items-center mb-2 gap-2"><MdOutlineMessage size={24} />Speaks: English, Hindi, Marathi</p>
                    </div>

                    <div className="flex justify-between items-center gap-2 mb-8">
                        <div className="text-sm w-1/2 h-16 flex flex-col justify-center items-center border border-gray-400 rounded-xl p-1">
                            <p className="text-center">Video Consultation</p>
                            <p className="text-center">₹800</p>
                        </div>

                        <div className="text-sm w-1/2 h-16 flex flex-col justify-center items-center border border-gray-400 rounded-xl p-1">
                            <p className="text-center">Video Consultation</p>
                            <p className="text-center">₹800</p>
                        </div>
                    </div>

                    <button className="w-full py-2 text-lg border border-[#3A643B]  mb-2 bg-white  rounded-lg">View Profile</button>

                    <button className="w-full py-2.5 text-lg bg-[#3A643B] border border-[#3A643B] text-white  rounded-lg">Book a consultation</button>
                </div>
            </div>
        </div>
    );
};

export default FindDoctors;
