import FindDoctors from "./components/FindDoctors"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className=" bg-black">
      <div className="w-[95%] mx-auto bg-white relative">
        <Navbar />
        <div className="w-[83%] mx-auto ">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/find-doctors" element={<FindDoctors />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App