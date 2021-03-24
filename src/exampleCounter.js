import {useState} from "react";

export const Counter = () =>{
    const [count, setCount] = useState(0)

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Add +1</button>
            <button onClick={() => setCount(count -1)}>Minus -1</button>
            <p>{count}</p>
        </div>
    )


}