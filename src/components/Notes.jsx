import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  const {notes, deleteNote} = props;

  return (
    <div className="flex  items-center justify-center gap-4 mt-6 p-6">
       {notes.map(note => (
         <div className="p-4 rounded bg-yellow-600 " key={note.id} id="box-note">
         <h1 className="text-black text-2xl font-bold">{note.title}</h1>
         <p className="text-white  text-lg  pt-2 pb-6  ">{note.content}</p>
         <div className="w-full flex justify-center ml-2 items-center  ">
          
          <button><FaTrash onClick={() => deleteNote(note.id)} className=" text-black mx-1"/></button>
          <button><FaEdit /></button>
         </div>
       </div>   
       ))}      
    </div>
  );
}

export default Notes;