import React from 'react';
import { useParams } from 'react-router';
import { useLoaderData } from "react-router";
import { IoMdStarHalf } from "react-icons/io";
import { addToStoredDB} from '../../Utility/AddToDB';

const BookDetails = () => {
    const {id}= useParams();
    const data= useLoaderData();
    const books = typeof data === "string" ? JSON.parse(data) : data;
    const bookid=parseInt(id);
    const singlebook=books.find(book => book.bookId === bookid);
    const {bookName,author,image,review,rating,category,tags,
yearOfPublishing,totalPages, publisher
}=singlebook;

const handleAddToDB=(id)=>{
    console.log(id);
    addToStoredDB(id);
}

    return (
       <div className="w-2/3 mx-auto my-10">
  <div className="card bg-base-100 shadow-sm border p-6 shadow-2xl flex flex-row gap-6">
    
    {/* IMAGE */}
    <figure className="w-2/3 bg-gray-200 flex items-center justify-center">
      <img
        className="h-[400px] w-[250px]"
        src={image}
        alt={bookName}
      />
    </figure>

    {/* CONTENT */}
    <div className="card-body w-2/3">
      
      

      <h2 className="card-title">
        {bookName}
        <div className="badge badge-secondary">
          {yearOfPublishing}
        </div>
      </h2>

      <h3>{author}</h3>
      <p>{review}</p>


      <div className="flex gap-3 flex-wrap">
  <span className="font-medium">Tags:</span>

  {tags?.map(tag => (
    <button key={tag} className="badge badge-outline">
      {tag}
    </button>
  ))}
</div>


      <p>Total Pages: <span className="font-bold">{totalPages}</span></p>
      <p>Category: <span className="font-bold">{category}</span></p>
      <p>Publisher: <span className="font-bold">{publisher}</span></p>


      <div className="border-t border-dashed my-3"></div>

      <div className="card-actions justify-end">
        <div className="badge badge-outline">{category}</div>
        <div className="badge badge-outline">
          {rating} <IoMdStarHalf />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-between">
        <button onClick={() => handleAddToDB(id)} className="btn btn-accent ">Mark as Read</button>
        <button className="btn btn-info">Add To Wishlist</button>
      </div>

    </div>
  </div>
</div>
    );
};

export default BookDetails;