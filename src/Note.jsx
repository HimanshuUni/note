import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

const Note = (props) => {
    const date = new Date();
    const exactdate =  date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();


    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    const editNote = () =>{
        props.editItem(props.id);
    }
    return (
        <>
            <div className="note">
            <h1 className="notedate">{exactdate}</h1>
                <h1> {props.title}</h1>
                <br />
                
                <br/>
                <p>{props.content}</p>
                <button className="btn" onClick={deleteNote}>
                     <DeleteOutlineIcon className="deleteicon" />
                </button>
                <button className="btn" >
                     <EditIcon className="editicon"/>
                </button>
            </div>
        </>
    );
}

export default Note;