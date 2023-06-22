import React from 'react';
import html  from '../../img/html.jpg'
import css from '../../img/css.jpg'
import bootstrap from '../../img/bootstrap.jpg'
import tailwind from '../../img/tailwind.jpg'
import sass from '../../img/sass.jpg'
import sql from '../../img/sql.jpg'
import php from '../../img/php.jpg'
import wordpress from '../../img/wordpress.jpg'
import react from '../../img/react.jpg'
import node from '../../img/node.jpg'

const Experience = () => {
    return (
        <div id='Skill' className=" hover:h-full  bg-pink-50 max-w rounded-lg shadow-2xl ">
          {/* skill logo */}
            <h1 className="font-bold text-center text-4xl py-32">Skills</h1>

            {/* skills img */}

            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pl-24 lg:flex-row-reverse pr-24'>
                  <div className='p-10 hover:shadow-lg hover:shadow-yellow-800 '>
                    <h1></h1>
                    <img className='h-20 mx-auto  z-0' src={html} alt="" />
                  </div>
                  <div className='p-10 hover:shadow-lg hover:shadow-yellow-800'>
                    <h1></h1>
                  <img className='w-28 mx-auto z-0' src={css} alt="" />
                  </div >
                  <div className='p-10 hover:shadow-lg hover:shadow-yellow-800'>
                  <img className='h-20 mx-auto  z-0' src={sass} alt="" />
                  </div>
                  <div className='p-10 hover:shadow-lg hover:shadow-yellow-800'>
                    <h1></h1>
                  <img className='h-20 mx-auto  z-0' src={bootstrap} alt="" />
                  </div>

                  <div className='p-10 hover:shadow-lg hover:shadow-yellow-800'>
                  <img className='h-20 mx-auto  z-0' src={tailwind} alt="" />
                  </div>

                  <div className='p-10 hover:shadow-lg hover:shadow-yellow-800'>
                  <img className='h-20 mx-auto  z-0' src={sql} alt="" />
                  </div>

                  <div className='p-10 hover:shadow-lg hover:shadow-yellow-800'>
                  <img className='h-20 mx-auto  z-0' src={php} alt="" />
                  </div>
                  <div className='p-10 hover:shadow-lg hover:shadow-yellow-800'>
                    <img className='h-20 mx-auto  z-0' src={wordpress} alt="" />
                    </div>

                  <div className='p-10 hover:shadow-lg hover:shadow-yellow-800'>
                  <img className='h-20 mx-auto  z-0' src={react} alt="" />
                  </div>

                  <div className='p-10 hover:shadow-lg hover:shadow-yellow-800'>
                    <img className='h-20 mx-auto  z-0' src={node} alt="" />
                  </div>
                 
           </div>
            

        </div>
    );
};

export default Experience;