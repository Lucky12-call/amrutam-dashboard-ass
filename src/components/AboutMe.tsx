import {
    LuFacebook,
    LuInstagram,
    LuYoutube,
    LuTwitter,
    LuPlus,
} from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import RightContent from "./RightContent";

const AboutMe = () => {
    return (
        <div className="w-full flex justify-between gap-10 rounded-2xl mt-10">
            {/* left section  */}
            <div className="w-1/2">
                {/* a little about me  */}
                <div className="w-full border border-gray-300 rounded-2xl mb-8">
                    <h1 className="flex justify-between items-center text-2xl font-semibold px-10 py-4 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-tl-2xl rounded-tr-2xl">
                        A Little About me{" "}
                        <button className="flex justify-center items-center gap-2 border border-[#3A643B] text-xl py-1 px-3 rounded-lg">
                            Follow <LuPlus />
                        </button>
                    </h1>

                    <p className="text-gray-500 border-b border-gray-500 m-10 pb-10 relative">
                        Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
                        Surat. love to work with all my hospital staff and seniour doctors.
                        Completed my graduation in Gynaecologist Medicine from the
                        <a
                            href="#"
                            className="underline text-lg font-medium absolute right-0 -bottom-3 bg-white px-2"
                        >
                            Read more
                        </a>
                    </p>

                    <h1 className="flex items-center gap-2 text-xl m-10">
                        Language Spoken{" "}
                        <span className="text-xl px-5 py-3 rounded-full bg-gray-100">
                            English
                        </span>
                        <span className="text-xl px-5 py-3 rounded-full bg-gray-100">
                            Hindi
                        </span>
                        <span className="text-xl px-5 py-3 rounded-full bg-gray-100">
                            Telugu
                        </span>
                    </h1>

                    {/* social media icons  */}
                    <div className="flex items-center gap-5 m-8">
                        <LuFacebook
                            size={44}
                            className="p-2 rounded-full text-gray-400 bg-gray-100 border border-gray-300"
                        />
                        <LuInstagram
                            size={44}
                            className="p-2 rounded-full text-gray-400 bg-gray-100 border border-gray-300"
                        />
                        <LuYoutube
                            size={44}
                            className="p-2 rounded-full text-gray-400 bg-gray-100 border border-gray-300"
                        />
                        <LuTwitter
                            size={44}
                            className="p-2 rounded-full text-gray-400 bg-gray-100 border border-gray-300"
                        />
                    </div>
                </div>

                {/* I Specialize In  */}
                <div className="w-full border border-gray-300 rounded-2xl mb-8">
                    <h1 className="flex justify-between items-center text-2xl font-semibold px-10 py-4 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-tl-2xl rounded-tr-2xl">
                        I Specialize In
                    </h1>

                    {/* images section  */}
                    <div className="flex justify-between items-center gap-5 p-10">
                        <div>
                            <img src="hair.png" alt="hair" className="mb-1" />
                            <p className="text-lg">women’s health</p>
                        </div>

                        <div>
                            <img src="skin.png" alt="skin" className="mb-1" />
                            <p className="text-lg">Skin Care</p>
                        </div>

                        <div>
                            <img src="immunity.png" alt="immunity" className="mb-1" />
                            <p className="text-lg">Immunity</p>
                        </div>

                        <div>
                            <img src="health.png" alt="health" className="mb-1" />
                            <p className="text-lg">Hair Care</p>
                        </div>
                    </div>
                </div>

                {/* The Concerns I Treat */}
                <div className="w-full border border-gray-300 rounded-2xl mb-8">
                    <h1 className="flex justify-between items-center text-2xl font-semibold px-10 py-4 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-tl-2xl rounded-tr-2xl">
                        The Concerns I Treat
                    </h1>

                    {/* images section  */}
                    <div className="flex justify-between items-center gap-5 p-8">
                        <div className="flex flex-wrap items-center gap-5">
                            <h1 className="text-md font-semibold bg-gray-100 rounded-full px-3 py-2">
                                Skin Treatment
                            </h1>{" "}
                            <h1 className="text-md font-semibold bg-gray-100 rounded-full px-3 py-2">
                                Pregnancy
                            </h1>{" "}
                            <h1 className="text-md font-semibold bg-gray-100 rounded-full px-3 py-2">
                                Period Doubts
                            </h1>{" "}
                            <h1 className="text-md font-semibold bg-gray-100 rounded-full px-3 py-2">
                                Endometriosis
                            </h1>{" "}
                            <h1 className="text-md font-semibold bg-gray-100 rounded-full px-3 py-2">
                                Pelvic Pain
                            </h1>{" "}
                            <h1 className="text-md font-semibold bg-gray-100 rounded-full px-3 py-2">
                                Ovarian Cysts
                            </h1>{" "}
                            <h1 className="text-md font-semibold bg-gray-100 rounded-full px-3 py-2">
                                + 5 More
                            </h1>
                        </div>
                    </div>
                </div>

                {/* My Work Experience */}
                <div className="w-full border border-gray-300 rounded-2xl mb-8">
                    <h1 className="flex justify-between items-center text-2xl font-semibold px-10 py-4 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-tl-2xl rounded-tr-2xl">
                        My Work Experience
                    </h1>

                    <h1 className="text-lg font-bold text-[#3A643B] uppercase mx-5 border-b border-gray-400 py-5">I have been in practice for : 7+ Years</h1>

                    <div className="flex justify-between px-10 pt-5">
                        <div className="flex gap-2">
                            <img src="home-img.png" alt="home-img" />
                            <div className="">
                                <h2 className="text-lg font-semibold mb-2">Midtown Medical Clinic</h2>
                                <p className="text-md text-gray-500">Senior doctor</p>
                            </div>
                        </div>
                        <p className="text-lg uppercase text-gray-500">2016-present</p>
                    </div>

                    <div className="flex justify-between px-10 pb-10">
                        <div className="flex gap-2">
                            <img src="home-img.png" alt="home-img" />
                            <div className="">
                                <h2 className="text-lg font-semibold mb-2">Midtown Medical Clinic</h2>
                                <p className="text-md text-gray-500">Senior doctor</p>
                            </div>
                        </div>
                        <p className="text-lg uppercase text-gray-500">2010-2015</p>
                    </div>
                </div>

                {/* Featured Reviews (102) */}
                <div className="w-full border border-gray-300 rounded-2xl mb-8">
                    <h1 className="flex justify-between items-center text-2xl font-semibold px-10 py-4 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-tl-2xl rounded-tr-2xl">
                        Featured Reviews (102)
                    </h1>

                    <div className="rounded-2xl bg-gray-50 m-8">
                        <div className="flex justify-between items-center mx-10">
                            <div className="flex items-center gap-2">
                                <img src="profile-pic-2.png" alt="profile-pic-2" />
                                <div className="">
                                    <h2 className="text-xl font-semibold mb-1">Alicent Hightower</h2>
                                    <p className="text-md text-gray-500">Consulted for Skin care</p>
                                </div>
                            </div>
                            <p className="text-md uppercase text-gray-500">20 January 2023</p>
                        </div>
                        {/* stars div  */}
                        <div className="flex items-center gap-2 text-[#F79624] px-10 mt-3 mb-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <p className=" text-gray-500 px-10">Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
                    </div>

                    <div className="rounded-2xl bg-gray-50 m-8">
                        <div className="flex justify-between items-center mx-10">
                            <div className="flex items-center gap-2">
                                <img src="profile-pic-2.png" alt="profile-pic-2" />
                                <div className="">
                                    <h2 className="text-xl font-semibold mb-1">Alicent Hightower</h2>
                                    <p className="text-md text-gray-500">Consulted for Skin care</p>
                                </div>
                            </div>
                            <p className="text-md uppercase text-gray-500">20 January 2023</p>
                        </div>
                        {/* stars div  */}
                        <div className="flex items-center gap-2 text-[#F79624] px-10 mt-3 mb-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <p className=" text-gray-500 px-10">Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
                    </div>
                </div>

            </div>

            {/* right section  */}
            <div className="w-1/2 h-[155vh] border border-gray-300 rounded-2xl">
                <RightContent />
            </div>
        </div>
    );
};

export default AboutMe;
