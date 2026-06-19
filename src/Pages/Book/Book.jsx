import React from 'react';

const Book = ({data}) => {
    console.log(data);
    const {bookName,author,image,review}=data
    return (
            <div className="card bg-base-100 w-96 shadow-sm md:grid-cols-2 lg:grid-cols-3 gap-4">
  <figure>
    <img
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
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        
    );
};

export default Book;