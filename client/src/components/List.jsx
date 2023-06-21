// import React,{useState} from 'react'
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
    
// const List = (props) => {

//     const [note, setNote] = useState({})
//     const { removeFromDom } = props;

//     const { id } = useParams();

//     const deleteNote = (noteId) => {
//         axios.delete('http://localhost:8000/api/note/' + noteId)
//             .then(res => {
//                 removeFromDom(noteId)
//             })
//             .catch(err => console.error(err));
//     }
//     return (
        
//         <div>
//             <h1>
//                 Favorite Author
//             </h1>
//             {props.note.map( (n, i) =>
//                 <p key={i}>{n.title}, {n.body} 
//                 <Link to={"/note/" + n._id + "/edit"}>Edit</Link>|
//                 <button onClick={(e)=>{deleteNote(n._id)}}>
//                         Delete
//                     </button>
  



                
//                 </p>
//             )}
//         </div>
//     )
// }
    
// export default List;

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// const List = (props) => {
//   const { removeFromDom } = props;

//   const deleteNote = (noteId) => {
//     axios.delete('http://localhost:8000/api/note/' + noteId)
//       .then(res => {
//         removeFromDom(noteId);
//       })
//       .catch(err => console.error(err));
//   };

//   return (
//     <div>
      
//       {props.notes.map((note, i) =>
//         <p key={i}>
//           <h1>{note.title}
//             </h1>
//             <h3>{note.body}</h3>
//           <Link to={"/note/" + note._id + "/edit"}>Edit</Link>
//           {/* <button onClick={() => { deleteNote(note._id); }}>Delete</button> */}
//         </p>
//       )}
//     </div>
//   );
// };

// export default List;

const List = (props) => {
    const { notes, removeFromDom } = props;
  
    const deleteNote = (noteId) => {
      axios
        .delete('http://localhost:8000/api/note/' + noteId)
        .then((res) => {
          removeFromDom(noteId);
        })
        .catch((err) => console.error(err));
    };
  
    return (
      <div>
        {notes.map((note) => (
          <div key={note._id}>
            <h1>{note.title}</h1>
            <h3>{note.body}</h3>
            <Link to={`/note/${note._id}/edit`}><h1>Edit</h1></Link>
            {/* <button onClick={() => deleteNote(note._id)}>Delete</button> */}
          </div>
        ))}
      </div>
    );
  };
  
export default List;
