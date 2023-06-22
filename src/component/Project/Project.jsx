import React from 'react';

const Project = () => {
    return (
        
        <div id='Project' className=" max-w rounded-lg shadow-2xl  bg-pink-100 ">
            <h1 className="text-center font-bold text-50  text-4xl py-32">Project/Thisis</h1>
            <div className="flex flex-col-reverse  lg:flex-row px-10 pr-16  ">
            {/* hero-content flex-col lg:flex-row pl-28 */}

                  <div className='max-w lg:px-40 '>
                  <h1 className="font-bold  ">Thisis</h1>
                  <ul className="list-disc " >
                  <li>BrainNet-7: A CNN model for diagnosing brain tumors from MRI images based on an ablation     study Published on International Journal of Advanced Computer Science and 
                Applications (IJACSA)   which is a Scopus (Q3 journal)</li>
                 <li>Heart attack prediction and analysis using classification with machine learning. Paddy leaf disease detection using machine learning with image processing (running).</li>
                 <li>Lung and Colon Cancer Classification Using Medical Imaging: With Best Image Pre-processing         Techniques Employing Transfer Learning Approach (Continue)</li> 
                   </ul>
            
           </div>

{/* project */}
             <div className=' max-w lg:px-4 '>
               <h1 className="font-bold">Project</h1>

               <ui className="list-disc"> <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora illum minima voluptatibus maiores aperiam est distinctio tenetur obcaecati alias dicta. Ex, officia hic odit et asperiores corrupti impedit assumenda ipsam.</li>
                   <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque neque doloribus qui facilis voluptates hic saepe modi, quam soluta.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus veniam amet impedit aut explicabo quis distinctio consequuntur vel delectus.</li>
    

                   </ui>
             </div>



        </div>
            
        </div>
    );
};

export default Project;