import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "67138f4c816f63bc45a39bb3",
      "user": "66d82c39b761ebc6ccd5fff1",
      "title": "My New last",
      "description": "Current new hobby is to code!!",
      "tag": "Personal task",
      "date": "2024-10-19T10:51:56.037Z",
      "__v": 0
    },

    {
      "_id": "67138f4c816f63bc45a39bb31",
      "user": "66d82c39b761ebc6ccd5fff1",
      "title": "My New last",
      "description": "Current new hobby is to code!!",
      "tag": "Personal task",
      "date": "2024-10-19T10:51:56.037Z",
      "__v": 0
    },

    {
      "_id": "67138f4c816f63bc45a39bb32",
      "user": "66d82c39b761ebc6ccd5fff1",
      "title": "My New last",
      "description": "Current new hobby is to code!!",
      "tag": "Personal task",
      "date": "2024-10-19T10:51:56.037Z",
      "__v": 0
    },

    {
      "_id": "67138f4c816f63bc45a39bb33",
      "user": "66d82c39b761ebc6ccd5fff1",
      "title": "My New last",
      "description": "Current new hobby is to code!!",
      "tag": "Personal task",
      "date": "2024-10-19T10:51:56.037Z",
      "__v": 0
    },
    {
      "_id": "67138f4c816f63bc45a39bb34",
      "user": "66d82c39b761ebc6ccd5fff1",
      "title": "My New last",
      "description": "Current new hobby is to code!!",
      "tag": "Personal task",
      "date": "2024-10-19T10:51:56.037Z",
      "__v": 0
    },
    {
      "_id": "67138f4c816f63bc45a39bb35",
      "user": "66d82c39b761ebc6ccd5fff1",
      "title": "My New last",
      "description": "Current new hobby is to code!!",
      "tag": "Personal task",
      "date": "2024-10-19T10:51:56.037Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = (title, description, tag) =>{
    //TODO: API Call
    const note = {
      "_id": "67138f4c816f63bc45a39bb3",
      "user": "66d82c39b761ebc6ccd5fff1",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-10-19T10:51:56.037Z",
      "__v": 0
    }
    setNotes(notes.concat(note))

  }

  //Delete a note
  const deleteNote = (id) =>{
    //TODO: API Call
    console.log("Deleting with id" + id);
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes);
  }

  //Edit a note
  const editNote = () =>{
    
  }



  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
