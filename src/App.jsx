import TodoList from "./components/TodoList";

const App = () => {

  return (
    <div className="mt-3 container">
      <h1 className="text-center mb-5">Lista de Tareas</h1>
      <TodoList />
    </div>
  );
}

export default App