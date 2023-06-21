// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { useParams } from "react-router-dom";
    
// const Update = (props) => {
//     const { id } = useParams();
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [errors, setErrors] = useState([]);
//     const { removeFromDom } = props;
    

//     useEffect(() => {
//         axios.get('http://localhost:8000/api/note/' + id)
//             .then(res => {
//                 console.log("this is my update page" , res.data)
//                 setTitle(res.data.title);
//                 setBody(res.data.body);
               
//             })
//     }, [id]);
    
//     const updatePerson = e => {
//         e.preventDefault();
//         axios.patch('http://localhost:8000/api/note/' + id, {
//             title,
//             body,
            
//         })
//         .catch(err => {
            
//             const errorResponse = err.response.data.errors; 
//             console.log(errorResponse)
//             // Get the errors from err.response.data
//             const errorArr = []; // Define a temp error array to push the messages in
//             for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
//                 errorArr.push(errorResponse[key].message)
//             }
//             // Set Errors
//             setErrors(errorArr);
//         })
//     }

    

//     const deleteNote = (noteId) => {
//       axios.delete('http://localhost:8000/api/note/' + noteId)
//         .then(res => {
//           removeFromDom(noteId);
//         })
//         .catch(err => console.error(err));
//     };
    
//     return (
//         <div>
//             <h1>Update a Person</h1>
//             <form onSubmit={updatePerson}>
//                 <p>
//                     <label>Title</label><br />
//                     <input type="text" 
//                     name="title" 
//                     value={title} 
//                     onChange={(e) => { setTitle(e.target.value) }} />
//                 </p>
//                 <p>
//                     <label>Body</label><br />
//                     <input type="text" 
//                     name="body"
//                     value={body} 
//                     onChange={(e) => { setBody(e.target.value) }} />
//                 </p>

               

//                 <input type="submit" />| <button onClick={() => { deleteNote(note._id); }}>Delete</button>
//             </form>
//             <p>
//                 {errors}
//             </p>
//         </div>
//     )
// }
    
// export default Update;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate,Link } from 'react-router-dom';

const Update = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/note/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setBody(res.data.body);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const updateNote = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8000/api/note/${id}`, {
        title,
        body,
      })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  const deleteNote = (noteId) => {
    axios
      .delete(`http://localhost:8000/api/note/${noteId}`)
      .then((res) => {
        props.removeFromDom(noteId);
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
         <Link to={"/"}>Home</Link>
      <h1>Update a Note</h1>
      <form onSubmit={updateNote}>
        <p>
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <label>Body</label>
          <br />
          <input
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </p>

        <input type="submit" /> |{' '}
        <button onClick={() => deleteNote(id)}>Delete</button>
      </form>
      <p>{errors}</p>
    </div>
  );
};

export default Update;
