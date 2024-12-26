import { FaStar } from "react-icons/fa";
import AboutMe from "./AboutMe";

const Profile = () => {
    return (
        <div>
        <div className="w-full h-[40vh] mt-20 bg-[url('bg-img.png')] bg-no-repeat bg-top rounded-2xl relative">
            <div className="flex justify-between items-center bg-[#FFFBF2] h-[50%] w-full rounded-bl-2xl rounded-br-2xl absolute left-0 right-0 bottom-0 px-10">
                {/* profile img div  */}
                <div className="w-80">
                    <div className="flex justify-between items-end gap-5 absolute -top-10 ">
                        <img src="profile-pic.png" alt="profile-pic" className="rounded-full border-2 border-white" />
                        <div className="mb-2">
                            <h1 className="text-2xl font-semibold mb-1">Dr. Bruce Willis</h1>
                            <p className="text-md mb-2">Gynecologist</p>
                            <p className="flex items-center gap-1">4.2 <FaStar color="#F79624" /><FaStar color="#F79624" /><FaStar color="#F79624" /><FaStar color="#F79624" /></p>
                        </div>
                    </div>
                </div>

                {/* followers div  */}
                <div className="flex items-center gap-20">
                    <h1 className="text-md">
                        Followers
                        <p className="text-2xl font-bold text-center">850</p>
                    </h1>

                    <h1 className="text-md">
                        Following
                        <p className="text-2xl font-bold text-center">850</p>
                    </h1>

                    <h1 className="text-md">
                        Posts
                        <p className="text-2xl font-bold text-center">850</p>
                    </h1>
                </div>

                {/* button div  */}
                <div className="">
                    <button className="px-8 py-4 text-xl font-semibold bg-[#3A643B] text-white rounded-xl">Book an Appointment</button>
                </div>
            </div>
        </div>
        <AboutMe />
        </div>
    )
}

export default Profile