import { Link } from "react-router-dom";
import crool from "../../assets/crool.jpg";
import Codebook from "../../assets/Codebook.jpg";
import Freewatch from "../../assets/Freewatch.jpg";
import Todo from "../../assets/todo.jpg";
import Quiz from "../../assets/Quiz.jpg";

export const Projects = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold dark:text-slate-300 mt-20 mt-8 mb-20 ">Projects</h1>
      <section className="flex flex-wrap m-4 mb-20">

        <div className="max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to="https://codebook-rk.netlify.app/" target="_blank">
            <img className="w-full h-48 object-cover rounded-t-lg" src={Codebook} alt="Gaming" />
          </Link>
          <div className="p-5">
            <Link to="https://codebook-rk.netlify.app/" target="_blank">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CodeBook</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A comprehensive, responsive application offering features like a filter bar, search bar, JWT-based authentication, a user dashboard, and order success notifications. Built with React, jQuery, Redux, and Toast notifications, Codebook provides a seamless user experience with dynamic page titles and an interactive cart page.</p>

            <Link to="https://github.com/Rishabh7778/codebook" target="_blank" > <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Github</button></Link>
            <Link to="https://codebook-rk.netlify.app/" target="_blank" > <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Live demo</button></Link>
          </div>
        </div>


        <div className="max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to="https://codebook-rk.netlify.app/" target="_blank">
            <img className="w-full h-48 object-cover rounded-t-lg" src={crool} alt="Gaming" />
          </Link>
          <div className="p-5">
            <Link to="https://codebook-rk.netlify.app/" target="_blank">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Crool Gaming</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Crool Games is a versatile gaming website offering free access to various game categories like arcades, action, racing, and adventure. Users can download games seamlessly and explore detailed reviews to make informed choices about what to play. The platform ensures a comprehensive gaming experience for all.</p>

            <Link to="https://github.com/Rishabh7778/CroolGames" target="_blank" > <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Github</button></Link>
          </div>
        </div>
        
        <div className="max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to="https://codebook-rk.netlify.app/" target="_blank">
            <img className="w-full h-48 object-cover rounded-t-lg" src={Freewatch} alt="Gaming" />
          </Link>
          <div className="p-5">
            <Link to="https://codebook-rk.netlify.app/" target="_blank">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Free Watch</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">FreeWatch is a responsive movie website built with React, React-DOM, Tailwind CSS, and a movie API. It offers detailed movie information like budget and IMDb rating, with a user-friendly interface. The site includes dark mode for visual appeal and ensures a seamless experience across different screen sizes..</p>

            <Link to="https://github.com/Rishabh7778/FreeWatch" target="_blank" > <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Github</button></Link>
            <Link to="https://coruscating-manatee-94a6d7.netlify.app/" target="_blank" > <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Live demo</button></Link>
          </div>
        </div>
        
        <div className="max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to="https://codebook-rk.netlify.app/" target="_blank">
            <img className="w-full h-48 object-cover rounded-t-lg" src={Todo} alt="Gaming" />
          </Link>
          <div className="p-5">
            <Link to="https://codebook-rk.netlify.app/" target="_blank">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Todo Task</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Taskmate is a responsive to-do website built with React, CSS3, and JavaScript, offering multiple themes and local storage integration for a seamless user experience. Its user-friendly design allows for easy task updates and efficient task management, providing a modern and smooth functionality for daily task organization.</p>

            <Link to="https://github.com/Rishabh7778/Taskmate" target="_blank" > <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Github</button></Link>
            <Link to="https://taskmate-rk.netlify.app/" target="_blank" > <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Live demo</button></Link>
          </div>
        </div>
        
        <div className="max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to="https://codebook-rk.netlify.app/" target="_blank">
            <img className="w-full h-48 object-cover rounded-t-lg" src={Quiz} alt="Gaming" />
          </Link>
          <div className="p-5">
            <Link to="https://codebook-rk.netlify.app/" target="_blank">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Think Tank Trivia (Quiz)</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This quiz website, built using Node.js, Express.js, MongoDB, and RESTful APIs, offers users the ability to discover, create, and learn through interactive quizzes. It features over 15 categories, including English, general knowledge, and music, making it ideal for use at school, work, or home.</p>

            <Link to="https://github.com/Rishabh7778/QuizWebsite" target="_blank" > <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Github</button></Link>
          </div>
        </div>
      </section>
     <hr />
    </div>
  )
}
