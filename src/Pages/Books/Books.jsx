import React from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    console.log(data);
    const books = typeof data === "string" ? JSON.parse(data) : data;
    return (
        <div>
            <h1 className="text-3xl font-bold p-4 text-center">Books</h1>
            {
                books.map(singleBook => <Book data={singleBook}></Book>)
            }
        </div>
    );
};

export default Books;