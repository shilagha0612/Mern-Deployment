// import React from 'react';
// import Main from './views/Main';
// import { Routes, Route,Link} from 'react-router-dom';
// import Form from './components/Form';
// import Update from './views/Update'
// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/'element={<Main/>}/>
//         <Route path='/add_note' element={<Form/>}/> 

//         <Route  path="/note/:id/edit" element={<Update/>}/>
        

//       </Routes>

//       <Main />
//     </div>
//   );
// }
// export default App;
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Main from './views/Main';
// import Form from './components/Form';
// import Update from './views/Update';

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="/add_note" element={<Form />} />
//         <Route path="/note/:id/edit" element={<Update />} />

        

//       </Routes>
//     </div>
//   );
// }

// export default App;

// import React,{useState} from 'react';
// import Main from './views/Main';
// import { Routes, Route } from 'react-router-dom';
// import Form from './components/Form';
// import Update from './views/Update';

// function App() {
//   const [notes, setNotes] = useState([]);

//   const removeFromDom = (noteId) => {
//     setNotes(notes.filter((note) => note._id !== noteId));
//   };

//   return (
//     <div className="App">
//       <Routes>
//         <Route
//           path="/"
//           element={<Main notes={notes} removeFromDom={removeFromDom} />}
//         />
//         <Route path="/add_note" element={<Form />} />
//         <Route
//           path="/note/:id/edit"
//           element={<Update removeFromDom={removeFromDom} />}
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Form from './components/Form';
import Update from './views/Update';
import Detail from './views/Details';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);

  const removeFromDom = (noteId) => {
    setNotes(notes.filter((note) => note._id !== noteId));
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/notes')
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
     
        <Routes>
          <Route
            path="/"
            element={<Main notes={notes} removeFromDom={removeFromDom} />}
          />
          <Route path="/add_note" element={<Form />} />
          <Route
            path="/note/:id/edit"
            element={<Update removeFromDom={removeFromDom} />}
          />
          <Route path="/note/:id" element={<Detail />} />
        </Routes>
     
    </div>
  );
}

export default App;
