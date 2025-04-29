import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import BookCard from '../components/BookCard';
import './styles/BrowseBooks.css';

const BrowseBooks = () => {
  const { category } = useParams();
  const allBooks = useSelector((state) => state.books);
  const [search, setSearch] = useState('');

  const filteredBooks = allBooks.filter(
    (book) =>
      book.category === category &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="browse-books">
      <h1>Books in {category}</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="books-list">
        {filteredBooks.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default BrowseBooks;
