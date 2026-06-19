import React from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    console.log(data);
    const books = typeof data === "string" ? JSON.parse(data) : data;
    return (
        <div>
            <h1 className="text-3xl font-bold p-4 text-center">Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                books.map(singleBook => <Book data={singleBook}></Book>)
            }
            </div>
            
        </div>
    );
};

export default Books;