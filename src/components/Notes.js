import React from 'react'
import { useContext } from 'react';
import Noteitem from './Noteitem';
import noteContext from '../context/noteContext';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <div className="row my-3">
            <h3> Notes</h3>
            {notes.map((note) => {
                return <Noteitem note={note} />
            })}

        </div>
    )
}

export default Notes
