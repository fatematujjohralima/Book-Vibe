import React from 'react';
import { IoMdStarHalf } from "react-icons/io";
import { Link } from 'react-router';

const Book = ({data}) => {
    console.log(data);
    const {bookName,bookId,author,image,review,rating,category,tags,
yearOfPublishing
}=data
    return (
           <Link to={`/bookdetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border p-6 shadow-2xl">
  <figure className='p-4 bg-gray-200 w-2/3 mx-auto '>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex justify-center gap-10">
        {
            tags.map(tag => <button>{tag}</button>)
        }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{
yearOfPublishing
}</div>
    </h2>
    <h3>{author}</h3>
    <p className="overflow-hidden text-ellipsis line-clamp-3">{review}</p>
    <div className='border-t-1 border-dashed mb-3'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <IoMdStarHalf /></div>
    </div>
  </div>
</div></Link>
        
    );
};

export default Book;