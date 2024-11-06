import { Link } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';
import logo from "../../assets/logo.jpg";

export const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ['I am specialize in Full-stack web appllications with React.js', 'MERN stack development and', 'Cloud engineering'],
    loop:{},
    typeSpeed: 100,
    delaySpeed: 40
  })

  return (
    <main>
      <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
        <div className="my-5">
          <h2 className='text-2xl'>Hi <span className='text-red-400'>{typeEffect}</span></h2>
          <p className="text-5xl my-7 px-1 dark:text-slate-300 text-base leading-normal text-left">Hi my Name is Rishabh Kumar I recently completed my BCA with strong skills in programming and full-stack development, including JavaScript, Node.js, React, and MongoDB. I'm a quick learner and team player, eager to apply my knowledge in a challenging role and gain practical experience while contributing to the success of an organization.
          </p>
          <Link to="/about" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">About me</Link>
        </div>
        <div className="visual my-5 w-full">
          <img className="rounded-lg" src={logo} alt="" />
          <h1 className="text-center text-5xl">Rishabh Kumar</h1>
        </div>
      </section>
    </main>
  )
}
