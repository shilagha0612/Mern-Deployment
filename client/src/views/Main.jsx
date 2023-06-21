// import React,{useState,useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import List from '../components/List'
// import Form from '../components/Form'
// import axios from 'axios'

// const Main = (props) => {
//     const[note,setNote]=useState("")
//     const[loaded,setLoaded]=useState(false)

//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/notes')
//         .then(res=>{
//             setNote(res.data);
//             setLoaded(true)
//         })
//         .catch(err=>console.log(err))
//     }, [])
//     const removeFromDom= noteId=>{
//         setNote(note.filter(note=>note._id!=noteId))
//     }

//   return (
//     <div>
//     <Link to={'/add_note'}>Add a note</Link>
   
//    <hr/>
//    {loaded && <List note={note} removeFromDom={removeFromDom}/>}
// </div>
//   )
// }

// export default Main


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import List from '../components/List';
// import axios from 'axios';

// const Main = (props) => {
//   const [notes, setNotes] = useState([]);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/notes')
//       .then(res => {
//         setNotes(res.data);
//         setLoaded(true);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const removeFromDom = (noteId) => {
//     setNotes(notes.filter(note => note._id !== noteId));
//   };

//   return (
//     <div>
//       <h1> Note Wall </h1>
//       <h3>Leave a note</h3>
//       <Link to={'/add_note'}>Add a note</Link>
//       <hr />
//       {loaded && <List notes={notes} removeFromDom={removeFromDom} />}
//     </div>
//   );
// };

// export default Main;


// App.js
// Main.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import List from '../components/List';
import axios from 'axios';

// const Main = (props) => {
//   const [notes, setNotes] = useState([]);
//   const [loaded, setLoaded] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get('http://localhost:8000/api/notes')
//       .then((res) => {
//         setNotes(res.data);
//         setLoaded(true);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const removeFromDom = (noteId) => {
//     setNotes(notes.filter((note) => note._id !== noteId));
//   };

//   const handleRandomNoteClick = () => {
//     if (notes.length > 0) {
//       const randomNoteIndex = Math.floor(Math.random() * notes.length);
//       const randomNote = notes[randomNoteIndex];
//       navigate(`/note/${randomNote._id}`);
//     }
//   };

//   return (
//     <div>
//       <h1>Note Wall</h1>
//       <h3>Leave a note</h3>
//       <Link to="/add_note">Add a note</Link>
//       <hr />
//       {loaded && <List notes={notes} removeFromDom={removeFromDom} />}
//       <button onClick={handleRandomNoteClick}>Random Note</button>
//     </div>
//   );
// };

// export default Main;

const Main = (props) => {
  const [notes, setNotes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/notes')
      .then((res) => {
        setNotes(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (noteId) => {
    setNotes(notes.filter((note) => note._id !== noteId));
  };

  const handleRandomNoteClick = () => {
    if (notes.length > 0) {
      const randomNoteIndex = Math.floor(Math.random() * notes.length);
      const randomNote = notes[randomNoteIndex];
      navigate(`/note/${randomNote._id}`);
    }
  };

  const handleSortNewest = () => {
    const sortedNotes = [...notes].sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setNotes(sortedNotes);
  };

  const handleSortOldest = () => {
    const sortedNotes = [...notes].sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
    setNotes(sortedNotes);
  };

  return (
    <div>
      <h1>Note Wall</h1>
      <h3>Leave a note</h3>
      <Link to="/add_note">Add a note</Link>
      <hr />
      <div>
        <button style={{width:'150px', height:'40px', borderRadius:'5px',  marginLeft:'20px', marginRight:'20px'}} onClick={handleSortNewest}>Sort by Newest</button>
        <button style={{width:'150px', height:'40px', borderRadius:'5px',  marginLeft:'20px', marginRight:'20px'}} onClick={handleSortOldest}>Sort by Oldest</button>
      </div>
      {loaded && <List notes={notes} removeFromDom={removeFromDom} />}
      <button style={{width:'150px', height:'40px', borderRadius:'5px',  marginLeft:'20px', marginRight:'20px'}} onClick={handleRandomNoteClick}>Random Note</button>
    </div>
  );
};
export default Main
