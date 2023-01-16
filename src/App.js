import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNote => {
      return [...prevNote, newNote];
    });
  };

  function deleteNote(id){
    setNotes(prevNote => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
      <Note
      key = {noteItem.key}
      id= {index}
      title={noteItem.title}
      content={noteItem.content}
      onDelete={deleteNote}
      />
      ))}
      <Footer />
    </div>
  );
}

export default App;
