import React from "react";
import { Contador } from "../Contador";
import { Buscar } from "../Buscar";
import { Listar } from "../Listar";
import { ItemTarea } from "../ItemTarea";
import { CrearTarea } from "../CrearTarea";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { CreateTodoForm } from "../CreateTodoForm";
import { Loading } from "../Loading";
import { EmptyList } from "../EmptyList";
const AppUI = () => {
  const { error, loading, searchedTodos, completeTodo, onDelete, openModal, setOpenModal } =
    React.useContext(TodoContext);
    return (
      <React.Fragment>
        <div>
          <Contador />
          <Buscar />
        </div>
          <Listar>
            {error && (
              <div style={{ color: "white" }}>
                Hubo un error, intenta recargar la pagina
              </div>
            )}
            {loading && (
              <Loading />
            )}
            {(!loading && !searchedTodos.length) && (
                <EmptyList />
            )}
            {searchedTodos.map((element) => (
              <ItemTarea
                completeTodo={completeTodo}
                key={element.text}
                text={element.text}
                onDelete={onDelete}
                estado={element.completed}
              />
            ))}
          </Listar>
          { !!openModal && (
            <Modal>
              <CreateTodoForm />
            </Modal>
            )
          }
          <CrearTarea setOpenModal={setOpenModal} />
      </React.Fragment>
    );
};

export { AppUI };
