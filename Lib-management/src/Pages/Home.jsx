import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import './styles/Home.css';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

const Home = () => {
  const books = useSelector((state) => state.books.slice(0, 2));
  return (
    <div className="home">
      <h1>Welcome to the Online Library</h1>
      <h2>Categories</h2>
      <div className="categories">
        {categories.map((cat) => (
          <Link key={cat} to={`/books/${cat}`}>{cat}</Link>
        ))}
      </div>
      <h2>Popular Books</h2>
      <div className="books-list">
        {books.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default Home;
