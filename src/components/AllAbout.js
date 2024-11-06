import React from 'react'

export const AllAbout = () => {
  return (
    <main>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Introduction</h1>
        <p className="text-2xl text-gray-900 dark:text-white">Hi My Name is Rishabh Kumar I recently completed my BCA with strong skills in programming and full-stack development, including JavaScript, Node.js, React, and MongoDB. I'm a quick learner and team player, eager to apply my knowledge in a challenging role and gain practical experience while contributing to the success of an organization.</p>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Education</h1>
        <hr />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-4">School</h1>
        <ul className="flex justify-between">
          <li className="text-xl  text-gray-900 dark:text-white" >10th Standard (Percentage:78%) </li>
          <li className="text-xl font-bold text-gray-900 dark:text-white">DMP Intermediate College UP, India</li>
        </ul>
        <ul className="flex justify-between mb-4">
          <li className="text-xl  text-gray-900 dark:text-white">12th(Science) (Percentage:72%) </li>
          <li className="text-xl font-bold text-gray-900 dark:text-white">DMP Intermediate College UP, India</li>
        </ul>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">College</h1>
        <ul className="flex justify-between">
          <li className="text-xl  text-gray-900 dark:text-white">Bachelor of Computer Applications (BCA) (CGPA: 8.1) </li>
          <li className="text-xl font-bold text-gray-900 dark:text-white">R.C Institute of Technology (GGSIPU) Delhi, India</li>
        </ul>
      </div>

      <div className='mt-6'>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Final Year Project</h1>
        <hr />
        <p className='text-xl text-gray-900 dark:text-white mt-6'> My Final Year Project is a crool Games. Crool Games is a comprehensive gaming website
          designed to meet the diverse needs of today's gamers.
          Our platform offers a wide range of game categories,
          including arcades, action, racing, adventure, and more,
          all accessible for free. Users can easily download any
          game at no cost and enjoy a seamless gaming
          experience. In addition to game downloads, Crool
          Games provides detailed reviews, helping gamers make
          informed decisions about which titles to play. The
          website also features the latest news and updates about
          the gaming industry, including information on eSports
          competitions worldwide. By offering a user-friendly
          interface, free access to games, and valuable content,
          Crool Games serves as a virtual hub for gamers,
          ensuring they stay informed and entertained with the
          latest trends and releases in the gaming world</p>
      </div>

    </main>
  )
}
