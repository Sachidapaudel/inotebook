import React, { useContext } from 'react';
import Noteitem from './Noteitem';
import noteContext from '../context/noteContext';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes } = context;

    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h3>Notes</h3>
                {notes.length > 0 ? (
                    notes.map((note) => {
                        return <Noteitem key={note._id} note={note} />;
                    })
                ) : (
                    <p>No notes available</p>
                )}
            </div>
        </>
    );
};

export default Notes;
