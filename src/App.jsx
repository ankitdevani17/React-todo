import React, { useState } from "react";

const App = () => { 
    const [input, setInput] = useState("chal jana bhai ");

    const itemEvent = (event) => {
       setInput(event.target.value);
    };
     
    return (<div className="main_div">
                <div className="center_div">
                <br/>
                <h1>To Do List</h1>
                <br/>
                <input type="text" placeholder="Add a item" onChange={itemEvent}/>
                <button> + </button>
                <ol>
                    <li>{input}</li>
                </ol>
                </div>
            </div>
    )
}

export default App;  