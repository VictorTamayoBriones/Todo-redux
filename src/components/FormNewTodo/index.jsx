import { useState } from "react"
import { Form } from "./style"

export const FormNewTodo = () =>{

    const [newTodo, setNewTodo]=useState('');

    const handleChange = ({target:{value}})=> setNewTodo(value);

    return(
        <Form>
            <h2>New Todo</h2>
            <form>
                <label htmlFor="newTodo">New Todo</label>
                <input type="text" placeholder="example: clean my garden" id="newTodo" name="newTodo" value={newTodo} onChange={handleChange} />
                <button>Create New Todo</button>
            </form>
        </Form>
    )
    
}