import React from 'react';
import IBM from "../../assets/IBM.png";
import udemy from "../../assets/udemy.png";
import professional from "../../assets/Professional.png";

export const Certificates = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold dark:text-slate-300 mt-10 mb-10">Certificates</h1>
      <section className="flex justify-between flex-wrap mb-20">
        <div>
          <img className="w-96 h-max object-cover rounded-t-lg dark:shadow-gray-800" src={udemy} alt="Udemy certificate" />
          <h3 className="text-2xl text-center font-bold dark:text-slate-100">Udemy Web Development</h3>
        </div>

        <div>
          <img className="w-96 h-100 object-cover rounded-t-lg dark:shadow-gray-800" src={IBM} alt="IBM certificate" />
          <h3 className="text-2xl font-bold text-center dark:text-slate-100">IBM Web Development</h3>
        </div>

        <div>
          <img className="w-96 h-100 object-cover rounded-t-lg dark:shadow-gray-800" src={professional} alt="IBM certificate" />
          <h3 className="text-2xl font-bold text-center dark:text-slate-100">IBM Working in a Professional Skills</h3>
        </div>

      </section>
      <hr />
    </div>
  )
}
