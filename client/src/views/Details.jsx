// // Detail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/note/${id}`)
      .then((res) => {
        setNote(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleDeleteNote = () => {
    axios
      .delete(`http://localhost:8000/api/note/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Note Details</h1>
      <p>Title: {note.title}</p>
      <p>Body: {note.body}</p>
      <button onClick={handleDeleteNote}>Delete</button>
    </div>
  );
};

export default Detail;
