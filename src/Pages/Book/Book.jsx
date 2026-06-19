import React from 'react';
import { IoMdStarHalf } from "react-icons/io";

const Book = ({data}) => {
    console.log(data);
    const {bookName,author,image,review,rating,category}=data
    return (
            <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-4 bg-gray-200 w-2/3 mx-auto '>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <h3>{author}</h3>
    <p>{review}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <IoMdStarHalf /></div>
    </div>
  </div>
</div>
        
    );
};

export default Book;