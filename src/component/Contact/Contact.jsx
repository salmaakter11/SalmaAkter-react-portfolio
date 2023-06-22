import React from 'react';

const Contact = () => {
    return (
        <div className=" lg:px-10 bg-pink-100">
          {/* contact title */}
          <h1 className="text-center font-bold text-4xl lg:text-3xl py-20">Contact me</h1>
            <div id="Contact" className="hero min-h-screen  ">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold pl-7 my-2">CONTACT DETAILS</h1>
      <p className="pl-7 pr-10">Please feel free to get in touch anytime, whether for work inquiries or to just say hello.
I am currently accepting new freelance projects, and always excited to hear interesting proposals.</p>
    </div>

    {/* messege section */}

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
    <h1 className='font-bold px-3 my-3'>Leave a message</h1>
      <div className="card-body">
        
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" />
        </div>        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="text" placeholder="Subject type" className="input input-bordered" />
        </div>    
        <div className="form-control">
          <label className="label">
            <span className="label-text">Messege</span>
          </label>
          <input type="text" placeholder="messege" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">send messege</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Send </button>
        </div>
      </div>
    </div>
  </div>
</div>
         

            

        </div>
    );
};

export default Contact;