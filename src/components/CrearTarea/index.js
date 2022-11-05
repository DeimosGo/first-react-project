import React from "react";
import './CrearTarea.css';

const CrearTarea = ({ setOpenModal })=>{
    return (
        <button onClick={() => setOpenModal(true)}
        className="todo_button">
            +
        </button>
    );
}

export { CrearTarea };
