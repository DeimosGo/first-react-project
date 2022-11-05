import React from "react";
import './ItemTarea.css';
const ItemTarea = ({estado, text, completeTodo, onDelete})=>{
    return (
            <li className={`item ${estado && "item--done"}`} >
            <button onClick={()=> completeTodo(text)} className="botonCheck">
                <i className={`fa-solid fa-check ${estado ? 'iconoCheckDone' : 'iconoCheck'}`}></i>
            </button>
                <p className={`${estado && 'text--item'}`}>{text}</p>
                <button onClick={()=> onDelete(text)} className="botonCheck">
                    <i className="fa-regular fa-trash-can iconoDelete"></i>
            </button>
            </li>
    );
}

export { ItemTarea };
