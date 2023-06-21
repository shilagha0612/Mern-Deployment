// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate,Link } from 'react-router-dom'


// const Form = (onSubmitProp) => {
//     const [title, setTitle] = useState("")
//     const [body, setBody] = useState("")
//     const navigate = useNavigate();


//     const [errors, setErrors] = useState([]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newNote = {
//             title, body
//         }
//         axios.post("http://localhost:8000/api/note", newNote)
//             .then((res) => {
//                 console.log("Response", res)
//                 onSubmitProp(newNote)
//                 setTitle("");
//                 setBody("")
//                 navigate('/')
//             })
//             .catch((err) => {
//                 if (err.response && err.response.data && err.response.data.errors) {
//                     const errorResponse = err.response.data.errors;
//                     const errorArr = [];
//                     for (const key of Object.keys(errorResponse)) {
//                         errorArr.push(errorResponse[key].message);
//                     }
//                     setErrors(errorArr);
//                 } else {
//                     setErrors(["An error occurred. Please try again."]);
//                 }
//             });
//     };
//     return (
//         <div>
//             <Link to={"/"}>Home</Link>
//             <h1>
//                 Add Note
//             </h1>
//             <form onSubmit={handleSubmit}>
//                 {errors.map((err, index) => <p key={index}>{err}</p>)}

//                 <p>
//                     <label> Note Title </label>
//                     <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />

//                 </p>

//                 <p>
//                     <label>Body</label>
//                     <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
//                 </p>

//                 <p>
//                     <button type="submit">Submit</button>
//                 </p>





//             </form>

//         </div>
//     )
// }

// export default Form


// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const Form = () => {
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const navigate = useNavigate();

//     const [errors, setErrors] = useState([]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newNote = {
//           title,
//           body
//         };
//         axios.post("http://localhost:8000/api/note", newNote)
//           .then((res) => {
//             console.log("Response", res);
//             setTitle("");
//             setBody("");
//             navigate('/');
//           })
//           .catch(err => {
//             const errorResponse = err.response.data.errors; // Get the errors from err.response.data
//             const errorArr = []; // Define a temp error array to push the messages in
//             for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
//                 errorArr.push(errorResponse[key].message)
//             }
//             // Set Errors
//             setErrors(errorArr);
//         })
//       };
      


//     return (
//         <div>
//             <Link to="/">Home</Link>
//             <h1>Add Note</h1>
//             <form onSubmit={handleSubmit}>
//                 {errors.map((err, index) => (
//                     <p key={index}>{err}</p>
//                 ))}
//                 <p>
//                     <label>Note Title</label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />
//                 </p>
//                 <p>
//                     <label>Body</label>
//                     <textarea
//                         value={body}
//                         onChange={(e) => setBody(e.target.value)}
//                     ></textarea>
//                 </p>
//                 <p>
//                     <button type="submit">Submit</button>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Form;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            title,
            body
        };
        axios.post("http://localhost:8000/api/note", newNote)
            .then((res) => {
                console.log("Response", res);
                setTitle("");
                setBody("");
                navigate('/');
            })
            .catch((err) => {
                if (err.response && err.response.data && err.response.data.errors) {
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message);
                    }
                    setErrors(errorArr);
                } else {
                    setErrors(["An error occurred. Please try again."]);
                }
            });
    };

    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Add Note</h1>
            <form onSubmit={handleSubmit}>
                {errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
                <p>
                    <label>Note Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </p>
                <p>
                    <label>Body</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </p>
                <p>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </div>
    );
};

export default Form;
