import React from 'react';
import bookimg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="flex justify-around items-center bg-base-200 rounded-lg px-20 py-10 my-10">
  
  <div>
    <h2>New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div>
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
  <div>
    <img className='w-8/12 '
      src={bookimg}
      alt="Album" />
  </div>
</div>
    );
};

export default Banner;