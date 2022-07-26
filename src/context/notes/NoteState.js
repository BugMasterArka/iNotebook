import React, {useState} from 'react';
import NoteContext from './noteContext';


const NoteState = (props)=>{

    const host = "http://localhost:5000";

    const notesInitial = [];

const [notes, setNotes] = useState(notesInitial);

// add a note
const addNote = async (title, description, tag)=>{
    // TODO: Api call
    const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkZDA2MGU1ZTU1NDE1N2E0YTlkNDAxIn0sImlhdCI6MTY1ODY3NDU5Nn0.W7s3DGJkPJptSn89VB_GPAHGMhoin0vlglQH_MPwXBk'
        },
        body: JSON.stringify({title,description,tag})
    });

    console.log("Adding a new Note");
    let note = {
        "_id": "62debd5ed605a54582fac878",
        "user": "62dd060e5e554157a4a9d401",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-07-25T15:57:18.925Z",
        "__v": 0
        };
    setNotes(notes.concat(note));
};

// delete a note
const deleteNote = (id)=>{
    // TODO: API call
    console.log("Deleting note with id "+id);
    const newNotes = notes.filter((note)=>{return note._id!==id});
    setNotes(newNotes);
}

// edit a note
const editNote = async (id,title,description,tag)=>{

    // TODO: APi call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkZDA2MGU1ZTU1NDE1N2E0YTlkNDAxIn0sImlhdCI6MTY1ODY3NDU5Nn0.W7s3DGJkPJptSn89VB_GPAHGMhoin0vlglQH_MPwXBk'
        },
        body: JSON.stringify({title,description,tag})
    });
    const json =  response.json();
};

// get all notes
const getNotes = async ()=>{

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkZDA2MGU1ZTU1NDE1N2E0YTlkNDAxIn0sImlhdCI6MTY1ODY3NDU5Nn0.W7s3DGJkPJptSn89VB_GPAHGMhoin0vlglQH_MPwXBk'
        }
    });
    const json = await response.json();
    setNotes(json);
};


    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}> 
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;