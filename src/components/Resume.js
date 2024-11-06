import React from 'react';
import { Link } from 'react-router-dom';
import R1 from '../assets/Resume.png';

export const Resume = () => {
    return (
        <main>
            <div className='m-auto'>
                <img className="h-auto m-auto max-w-full" src={R1} alt="Resume"/>
            </div>
                <Link to="https://app.luminpdf.com/viewer/672ba8219dff5647126e7be5" target="_blank" className="h-10 text-white m-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download Resume</Link>
        </main>
    )
}
