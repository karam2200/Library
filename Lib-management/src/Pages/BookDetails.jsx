import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) => state.books.find((b) => b.id === id));

  if (!book) return <p>Book not found.</p>;

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Rating: {book.rating}</p>
      <p>{book.description}</p>
      <button onClick={() => navigate(-1)}>Back to Browse</button>
    </div>
  );
};

export default BookDetails;
