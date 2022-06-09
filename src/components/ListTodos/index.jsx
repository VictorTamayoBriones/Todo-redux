import { Todo } from "../Todo"
import { List, Todos } from "./style"

export const TodoList = () =>{
    return(
        <Todos>
            <h2>List Toodos</h2>
            <List>
                <Todo/>
                <Todo/>
                <Todo/>
            </List>
        </Todos>
    )
}