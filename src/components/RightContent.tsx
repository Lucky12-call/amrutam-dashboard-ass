import { IoCalendarClearOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./CustomCrousale";


const RightContent = () => {

    return (
        <div className="w-full px-4 py-8">
            <h1 className="text-2xl font-semibold flex justify-between items-center border border-gray-300 rounded-2xl px-8 py-4">
                <span>Appointment Fee</span>
                <span className="text-[#3A643B]">₹699.00</span>
            </h1>

            <div className="h-44 border-y border-gray-300 relative my-10">
                <h1 className="text-xl font-semibold absolute left-0 -top-5 px-4 bg-white">Select your mode of session</h1>
                <h1 className="text-xl font-semibold absolute left-0 -bottom-3 px-4 bg-white">Pick a Time slot</h1>
                <IoCalendarClearOutline size={48} className="rounded-full p-2 border border-gray-500 absolute right-0 -bottom-5 bg-white" />

                <div className="flex justify-between items-center my-10">
                    <div className="h-20 w-40 flex flex-col justify-center items-center border border-gray-500 rounded-xl ">
                        <p className="text-lg font-semibold">In-Clinic</p>
                        <p className="text-gray-500">45 mins</p>
                    </div>

                    <div className="h-20 w-40 flex flex-col justify-center items-center border border-[#3A643B85] rounded-xl bg-[#F2FBF2]">
                        <p className="flex items-center gap-2 text-lg font-semibold">Video <FaCircleCheck color="#3A643B" /></p>
                        <p className="text-gray-500">45 mins</p>
                    </div>

                    <div className="h-20 w-40 flex flex-col justify-center items-center border border-gray-500 rounded-xl ">
                        <p className="text-lg font-semibold">Chat</p>
                        <p className="text-gray-500">10 mins</p>
                    </div>
                </div>
            </div>

            {/* card slider  */}
            <div className="h-40 w-[90%] flex items-center justify-center mx-auto my-10 border border-gray-300 rounded-2xl">
                <Carousel>
                    <div className="h-20 min-w-32 max-w-32 flex flex-col justify-center items-center border border-[#3A643B85] rounded-xl bg-[#F2FBF2]">
                        <p className="flex items-center gap-2 text-lg font-semibold text-center mt-3">Mon, 10 Oct</p>
                        <p className="text-gray-500 text-center">10 slots</p>
                    </div>

                    <div className="h-20 min-w-32  max-w-32 flex flex-col justify-center items-center border border-gray-500 rounded-xl ">
                        <p className="text-lg font-semibold text-center mt-3">Tus, 10 Oct</p>
                        <p className="text-red-500 text-center ">2 mins</p>
                    </div>

                    <div className="h-20 min-w-32  max-w-32 flex flex-col justify-center items-center border border-gray-500 rounded-xl ">
                        <p className="text-lg font-semibold text-center mt-3">Wed, 10 Oct</p>
                        <p className="text-orange-500 text-center">5 mins</p>
                    </div>

                    <div className="h-20 min-w-32  max-w-32 flex flex-col justify-center items-center border border-[#3A643B85] rounded-xl bg-[#F2FBF2]">
                        <p className="flex items-center gap-2 text-lg font-semibold text-center mt-3">Thr, 10 Oct</p>
                        <p className="text-orange-500 text-center">8 slots</p>
                    </div>

                    <div className="h-20 min-w-32  max-w-32 flex flex-col justify-center items-center border border-gray-500 rounded-xl ">
                        <p className="text-lg font-semibold text-center mt-3">Fri</p>
                        <p className="text-red-500 text-center">3 mins</p>
                    </div>
                </Carousel>
            </div>

            {/* time table */}
            <div className="">
                {/* morning time  */}
                <div className="p-5">
                    <h1 className="text-lg font-semibold mb-5 px-4">Morning</h1>
                    <div className="flex flex-wrap items-center gap-5">
                        <span className="text-lg border border-gray-300 p-4 rounded-2xl">09:00 AM</span>
                        <span className="text-lg border border-gray-300 p-4 rounded-2xl">09:30 AM</span>
                        <span className="text-lg border border-gray-300 p-4 rounded-2xl">10:00 AM</span>
                        <span className="text-lg border border-gray-300 p-4 rounded-2xl">10:15 AM</span>
                        <span className="text-lg border border-gray-300 p-4 rounded-2xl">10:45 AM</span>
                        <span className="text-lg border border-gray-300 p-4 rounded-2xl bg-[#3A643B] text-white">11:00 AM</span>
                    </div>
                </div>

                 {/* evening time  */}
                 <div className="p-5">
                    <h1 className="text-lg font-semibold mb-5 px-4">Evening</h1>
                    <div className="flex flex-wrap items-center gap-5">
                        <span className="text-lg border border-gray-300 p-4 rounded-2xl">04:00 PM</span>
                        <span className="text-lg border border-gray-300 p-4 rounded-2xl">04:14 PM</span>
                        <span className="text-lg border border-gray-300 p-4 rounded-2xl">04:30 PM</span>
                        <span className="text-lg border border-gray-300 p-4 rounded-2xl">04:45 PM</span>
                        <span className="text-lg border border-gray-300 p-4 rounded-2xl">05:15 PM</span>
                    </div>
                <button className="w-[90%] px-10 py-5 text-xl font-semibold text-white bg-[#3A643B] m-10 rounded-xl text-center">Make An Appointment</button>
                </div>

            </div>
        </div>
    );
};

export default RightContent;
