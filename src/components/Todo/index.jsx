import { useState } from "react"
import { Check } from "../ButtonCheck"
import { TodoComponent } from "./style"

export const Todo = () =>{

    const[onFinish, setOnFinish]=useState(false);
    const handleChange = ({target:{checked}}) => console.log(checked)

    return(
        <TodoComponent>
            <h3>Ordenar la casa</h3>
            <Check onChange={handleChange} value={onFinish} />
        </TodoComponent>
    )
}