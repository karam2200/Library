import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';
import './styles/AddBook.css';

const AddBook = () => {
  const [form, setForm] = useState({ title: '', author: '', description: '', rating: '', category: '' });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.description || !form.rating || !form.category) {
      setError('All fields are required');
      return;
    }
    dispatch(addBook({ ...form, rating: parseFloat(form.rating) }));
    navigate(`/books/${form.category}`);
  };

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      <h1>Add a New Book</h1>
      {error && <p className="error">{error}</p>}
      {['title', 'author', 'description', 'rating', 'category'].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field}
          value={form[field]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;

