import React from 'react';
import './EmptyList.css';

const EmptyList = () => {
  return (
    <React.Fragment>
      <li className='empty__item'>
        <p>No se encontraron tareas pendientes</p>
      </li>
      <li className='empty__item'>
        <i className="fa-solid fa-list"></i>
      </li>
      <li className='empty__item instruction'>
        <p>Presione el icono <span className='buttonShow'>+</span> para crear una nueva tarea.</p>
      </li>
    </React.Fragment>
  );
}

export { EmptyList };
