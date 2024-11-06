import React from 'react';
import c from "../../assets/lang/c++.png";
import css3 from "../../assets/lang/css3.png";
import html5 from "../../assets/lang/html5.png";
import javscript from "../../assets/lang/javascript.png";
import mongo from "../../assets/lang/mongo.png";
import SQL from "../../assets/lang/mysql.png";
import Nodejs from "../../assets/lang/nodejs.png";
import react from "../../assets/lang/react.png";
import tailwind from "../../assets/lang/tailwind.png";
import bootstrap from "../../assets/lang/bootstrap.png";
import express from "../../assets/lang/express.png";

export const Skills = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold dark:text-slate-300 mt-6 mb-6">Skills</h1>
      
      <section className="flex flex-wrap justify-between">
        <h1 className="text-2xl flex justify-center items-center font-bold dark:text-slate-100">Programming Languages :</h1>
        <div className="m-4">
          <img className="h-10 w-10 rounded-lg max-h-96 shadow-xl dark:shadow-gray-800" src={html5} alt="HTML5 logo" />
          <p className="text-xl dark:text-slate-100">HTML5</p>
        </div>
        <div className="m-4">
          <img className="h-10 w-10 rounded-lg max-h-96 shadow-xl dark:shadow-gray-800" src={css3} alt="CSS3 logo" />
          <p className="text-xl dark:text-slate-100">CSS3</p>
        </div>
        <div className="m-4">
          <img className="h-10 w-10 rounded-lg max-h-96 shadow-xl dark:shadow-gray-800" src={javscript} alt="JavaScript logo" />
          <p className="text-xl dark:text-slate-100">JavaScript</p>
        </div>
        <div className="m-4">
          <img className="h-10 w-10 rounded-lg max-h-96 shadow-xl dark:shadow-gray-800" src={c} alt="C++ logo" />
          <p className="text-xl dark:text-slate-100">C++</p>
        </div>
        <div className="m-4">
          <img className="h-10 w-10 rounded-lg max-h-96 shadow-xl dark:shadow-gray-800" src={mongo} alt="MongoDB logo" />
          <p className="text-xl dark:text-slate-100">Mongo</p>
        </div>
        <div className="m-4">
          <img className="h-10 w-10 rounded-lg max-h-96 shadow-xl dark:shadow-gray-800" src={SQL} alt="SQL logo" />
          <p className="text-xl dark:text-slate-100">SQL</p>
        </div>
      </section>

      <section className="flex flex-wrap justify-between">
        <h1 className="text-2xl flex justify-center items-center font-bold dark:text-slate-100">Frameworks :</h1>
        
        <div className="m-4">
          <img className="h-10 w-10 rounded-lg max-h-96 shadow-xl dark:shadow-gray-800" src={react} alt="React logo" />
          <p className="text-xl dark:text-slate-100">React</p>
        </div>
      
        <div className="m-4">
          <img className="h-10 w-10 rounded-lg max-h-96 shadow-xl dark:shadow-gray-800" src={Nodejs} alt="Node.js logo" />
          <p className="text-xl dark:text-slate-100">Node.js</p>
        </div>
        <div className="m-4">
          <img className="h-10 w-10 rounded-lg max-h-96 shadow-xl dark:shadow-gray-800" src={express} alt="Node.js logo" />
          <p className="text-xl dark:text-slate-100">Express.js</p>
        </div>
        <div className="m-4">
          <img className="h-10 w-10 rounded-lg max-h-96 shadow-xl dark:shadow-gray-800" src={tailwind} alt="Node.js logo" />
          <p className="text-xl dark:text-slate-100">Tailwind css</p>
        </div>
        <div className="m-4">
          <img className="h-10 w-10 rounded-lg max-h-96 shadow-xl dark:shadow-gray-800" src={bootstrap} alt="Node.js logo" />
          <p className="text-xl dark:text-slate-100">Bootstrap</p>
        </div>
      </section>
    </div>
  )
}
