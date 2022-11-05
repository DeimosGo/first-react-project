import React from "react";
import { useLocalStorage } from './useLocalStorage';
const  TodoContext = React.createContext();

const TodoProvider = (props) => {
  const {
    items: tareas,
    saveChangesItems: saveTareas,
    loading,
    error,
  // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useLocalStorage('items_V1', []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = tareas.filter(todo => !!todo.completed).length;
  const allTodos = tareas.length;
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = tareas;
  } else {
    searchedTodos = tareas.filter((item) => {
      return item.text.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
  const completeTodo = (textTodo) => {
    const newTodos = [...tareas];
    const todoIndex = tareas.findIndex(item => item.text === textTodo);
    newTodos[todoIndex].completed = true;
    saveTareas(newTodos);
  };
  const onDelete = (textTodo) => {
    const newTodos = [...tareas];
    const todoIndex = tareas.findIndex((item) => item.text === textTodo);
    newTodos.splice(todoIndex, 1);
    saveTareas(newTodos);
  }

  const onCreate = (textTodo) => {
    const newTodos = [...tareas];
    newTodos.push({ text: textTodo, estado: false });
    saveTareas(newTodos);
  }
    return (
    <TodoContext.Provider value={{
      tareas,
      error,
      allTodos,
      loading,
      completedTodos,
      searchedTodos,
      completeTodo,
      onDelete,
      setSearchValue,
      searchValue,
      openModal,
      setOpenModal,
      onCreate,
    }}>
        {props.children}
    </TodoContext.Provider>
    )
};

export { TodoContext, TodoProvider }
