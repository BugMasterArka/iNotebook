import React, {useState} from 'react';
import NoteContext from './noteContext';


const NoteState = (props)=>{

    const host = "http://localhost:5000";

const [notes, setNotes] = useState([]);

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

    console.log(response);

    // for the frontend
    let note = {
        "_id": response._id,
        "user": response.user,
        "title": title,
        "description": description,
        "tag": tag,
        "date": response.date,
        "__v": 0
        };
    setNotes(notes.concat(note));
};

// delete a note
const deleteNote = async (id)=>{
    // TODO: API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkZDA2MGU1ZTU1NDE1N2E0YTlkNDAxIn0sImlhdCI6MTY1ODY3NDU5Nn0.W7s3DGJkPJptSn89VB_GPAHGMhoin0vlglQH_MPwXBk'
        }
    });
    const json =  await response.json();
    console.log(json);

    // console.log("Deleting note with id "+id);
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
    const json =  await response.json();
    console.log(json);


    let newNotes = JSON.parse(JSON.stringify(notes));
    // logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag=tag;
            break;
        }
    }
    setNotes(newNotes);
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