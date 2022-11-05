import React from "react";
import './Contador.css';
import { TodoContext } from "../TodoContext";

const Contador = ()=>{
  const { allTodos, completedTodos } = React.useContext(TodoContext);
    return (
        <h2 className="titulo">Has completado {completedTodos} de {allTodos} Tareas</h2>
    );
}

export { Contador };
