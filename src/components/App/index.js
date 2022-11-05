import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from './../TodoContext';

const App = () => {

/*     React.useEffect(() => {
    console.log('uso de useEffect');
  }, [allTodos]); */

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
