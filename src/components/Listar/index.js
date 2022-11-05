import React from "react";
import './Listar.css';

const Listar = (props)=>{
    return (
        <section className="container__lista">
            <ul className="lista">
                {props.children}
            </ul>
        </section>
    );
}

export { Listar };