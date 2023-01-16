import React from 'react'
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  
    const [note, setNote] = useState({
        title:'',
        content:''
    }); 

    const [zoomIn, setZoomIn] = useState(false);
    
    function handleChange(event){
        const {name,value} = event.target

        setNote(prevNote => {
            return{
                ...prevNote,
                [name] : value
            };
        });

    };

    function handleSubmit(event){
        props.onAdd(note)
        setNote({
            title:'',
            content:''
        })
        setZoomIn(false);
        event.preventDefault();
    }

    function handleZoom(){
        setZoomIn(true);
    }
    
    return (
        <div>
            <form className='create-note'>
                { zoomIn && <input type="text" onChange={handleChange} value={note.title} name='title' placeholder='Title' />}
                <textarea name="content" onChange={handleChange} onClick={handleZoom} value={note.content} placeholder='Take a note ...' rows={zoomIn ? 3 : 1}></textarea>
                <Zoom in={zoomIn}>
                    <Fab onClick={handleSubmit}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea