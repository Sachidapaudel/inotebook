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
    }
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
