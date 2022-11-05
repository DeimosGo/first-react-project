import React from "react";
import './CreateTodoComponent.css';
import { TodoContext } from '../TodoContext/index';

const CreateTodoForm = () => {
  const { setOpenModal, onCreate } = React.useContext(TodoContext);
  const [textValue, setTextValue] = React.useState('');

  const crearTarea = (event) => {
    event.preventDefault();
    onCreate(textValue);
    setOpenModal(prevState => !prevState);
    setTextValue('');
  };
  return (
    <form className="create__container" onSubmit={() => setOpenModal(prevState => !prevState)}>
      <h3>Agrega una nueva tarea</h3>
      <textarea  type="text" placeholder="Inserte una tarea"
        onChange={(event)=> setTextValue(event.target.value)}
        value={textValue} />
      <div className="container__buttons">
        <button type="submit" className="button__container cancel">Cancelar</button>
        <button onClick={crearTarea} className="button__container create">Crear</button>
      </div>
    </form>
  );
};
export { CreateTodoForm };
