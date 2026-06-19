import React from 'react';
import bookimg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="flex justify-between items-center rounded-lg p-2 w-full bg-base-300 my-12">
  
  <div className='p-20'>
    <h2 className="text-2xl font-bold">BOOKS TO FRESHEN UP</h2>
    <h2 className="text-2xl font-bold">YOUR COLLECTION</h2>
    
    <br />
    <div>
      <button className="btn btn-primary bg-green-500 text-white border-0">View The List</button>
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