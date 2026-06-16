import React from 'react';
import bookimg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="flex justify-between items-center rounded-lg p-2 w-full bg-base-300 my-12">
  
  <div className='p-20'>
    <h2 className="text-2xl font-bold">New album is released!</h2>
    <p className="text-lg">Click the button to listen on Spotiwhy app.</p>
    <br />
    <div>
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
  <div>
    <img className=' '
      src={bookimg}
      alt="Album" />
  </div>
</div>
    );
};

export default Banner;