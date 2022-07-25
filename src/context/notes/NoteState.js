import React, {useState} from 'react';
import NoteContext from './noteContext';


const NoteState = (props)=>{

    const notesInitial = [
        {
            "_id": "62debd36d605a94582fac889",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:56:38.948Z",
            "__v": 0
            },
            {
            "_id": "62de7d5ed605a94582fac872",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:18.331Z",
            "__v": 0
            },
            {
            "_id": "62debd5ed605a91582fac874",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:18.551Z",
            "__v": 0
            },
            {
            "_id": "62debd5e4605a94582fac876",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:18.732Z",
            "__v": 0
            },
            {
            "_id": "62debd5ed605a54582fac878",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:18.925Z",
            "__v": 0
            }
        ];

const [notes, setNotes] = useState(notesInitial);

// add a note
const addNote = (title, description, tag)=>{
    // TODO: Api call
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

}

// edit a note
const editNote = (id)=>{

};


    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}> 
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;