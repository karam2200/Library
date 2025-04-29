import { Link } from 'react-router-dom';
import './styles/BookCard.css';

const BookCard = ({ book }) => (
  <div className="book-card">
    <h2>{book.title}</h2>
    <p>{book.author}</p>
    <Link to={`/book/${book.id}`}>View Details</Link>
  </div>
);

export default BookCard;
