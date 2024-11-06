import { Routes, Route } from "react-router";
import { Contact,Home, Resume} from "../components";
import { AllAbout } from "../components/AllAbout";

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="about" element={<AllAbout/>} />
            <Route path="resume" element={<Resume/>} />
        </Routes>
    </>
  )
}
