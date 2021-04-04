import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';


const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: '',
    })

    const InputEvent = (event) => {
        //  const value = event.target.value;
        //  const name = event.target.name;

        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });

    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: '',
        })
    };

    const expandIt = () => {
        setExpand(true);
    };
    const backtonormal = () => {
        setExpand(false);
    };


    const date = new Date();
    const exactdate =  date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();

    return (
        <>
            <div className="main_note" onDoubleClick={backtonormal}>
                <form>
                <h1 className="date"> {exactdate}</h1>
                    {expand ?
                    
                        <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off" /> : null}
                    <textarea cols="" rows="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note..."
                        onClick={expandIt}></textarea>
                    {expand ?
                        <Button onClick={addEvent}>
                            <AddIcon className="plus_sign" />
                        </Button> : null
                    }
                </form>

            </div>
        </>
    );
}

export default CreateNote;