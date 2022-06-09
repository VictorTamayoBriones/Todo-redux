import { FormNewTodo } from "./components/FormNewTodo"
import { TodoList } from "./components/ListTodos"

function App() {

  return (
    <>
      <h1>React Todo App with Redux</h1>
      <div className="main">
        <TodoList/>
        <FormNewTodo/>
      </div>
    </>
  )
}

export default App
