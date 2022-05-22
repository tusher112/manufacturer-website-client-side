import React from "react";
import contact from '../../assest/img/contactus.webp';

const ContactUs = () => {
  return (
    <div style={{
        background:`url(${contact})`
    }} className={'bg-primary bg-opacity-40 px-10 py-14 '}>
      <div className='text-center pb-14 text-white'>
        <p className='text-3xl font-bold text-transparent bg-clip-text text-error'>
          Contact Us
        </p>
        <h1 className='text-4xl text-accent '>Stay connected with us!</h1>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-5'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <button className="btn bg-success px-16 text-white"> Submit</button>
        {/* <PrimaryButton>Submit</PrimaryButton> */}
      </div>
    </div>
  );
};

export default ContactUs;