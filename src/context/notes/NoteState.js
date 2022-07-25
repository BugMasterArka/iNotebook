import React, {useState} from 'react';
import NoteContext from './noteContext';


const NoteState = (props)=>{

    const notesInitial = [
        {
            "_id": "62debd36d605a94582fac869",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:56:38.948Z",
            "__v": 0
            },
            {
            "_id": "62debd3bd605a94582fac86b",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:56:43.649Z",
            "__v": 0
            },
            {
            "_id": "62debd3cd605a94582fac86d",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:56:44.184Z",
            "__v": 0
            },
            {
            "_id": "62debd5ed605a94582fac870",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:18.144Z",
            "__v": 0
            },
            {
            "_id": "62debd5ed605a94582fac872",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:18.331Z",
            "__v": 0
            },
            {
            "_id": "62debd5ed605a94582fac874",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:18.551Z",
            "__v": 0
            },
            {
            "_id": "62debd5ed605a94582fac876",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:18.732Z",
            "__v": 0
            },
            {
            "_id": "62debd5ed605a94582fac878",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:18.925Z",
            "__v": 0
            },
            {
            "_id": "62debd5fd605a94582fac87a",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:19.120Z",
            "__v": 0
            },
            {
            "_id": "62debd5fd605a94582fac87c",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:19.320Z",
            "__v": 0
            },
            {
            "_id": "62debd5fd605a94582fac87e",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:19.504Z",
            "__v": 0
            },
            {
            "_id": "62debd5fd605a94582fac880",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:19.703Z",
            "__v": 0
            },
            {
            "_id": "62debd5fd605a94582fac882",
            "user": "62dd060e5e554157a4a9d401",
            "title": "Be humble",
            "description": "Kendrick Lamar",
            "tag": "music",
            "date": "2022-07-25T15:57:19.891Z",
            "__v": 0
            }
        ];

const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}> 
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;