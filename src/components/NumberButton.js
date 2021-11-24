import { useState } from "react";

export default function NumberButton(props){
    const [state, setState] = useState(props.state);

    const decrease = () =>{
        if(state >=0){
            setState(state-1)
        }
    }
    const increase = () =>{
        setState(state+1)
    }
    return (
        <div className="form d-flex align-items-center">
                <div className="value-button decrease" id="" onClick={decrease} value="Decrease Value">-</div>
                <input type="number" id="number" value={state} />
                <div className="value-button increase" id="" onClick={increase} value="Increase Value">+</div>
        </div>
    )
}