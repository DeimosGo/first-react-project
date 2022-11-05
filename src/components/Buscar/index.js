import React from "react";
import './Buscar.css'
import { TodoContext } from "../TodoContext";

const Buscar = ()=>{
  const { setSearchValue, searchValue, } = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="buscar__container">
            <input className="busqueda"
            onChange={onSearchValueChange}
            value={searchValue}
            placeholder="Buscar tarea..." />
        </div>
    );
}
export { Buscar }
