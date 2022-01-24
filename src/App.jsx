import React, { useState } from "react";
import Todolist from "./Todolist";
const App = () => { 
    const [input, setInput] = useState("chal jana bhai ");
    const [items,setitems] =useState([] ); // to create an empty array as default
    const itemEvent = (event) => {  // callback function se event me value store kar raha hu jo bhi input se nikla
       setInput(event.target.value); // taking value from whatever input users enters and givign it to setInput
    };

    const deleteitems = (id) =>{
        console.log("deleted");
        
        setitems((olditems)=>{
            return olditems.filter((arrElem, index)=>{
                return index !== id;
            });
        });
    };
     
    const listofitems  = () =>{    // to display items as list
        setitems((olditems)=>{   // accessing prev state value of line 5 ka array into  olditems
              return[...olditems,input]; // concatenating 2 arrays
        })
    setInput("")}; // making the array empty so that input field khali rahe - also check wht value used on line 20
    return <div className="main_div">
                <div className="center_div">
                <br/>
                <h1>To Do List</h1>
                <br/>
                <input type="text" placeholder="Add a item" value={input} onChange={itemEvent}/>
                <button onClick={listofitems}> + </button>
                <ol>
                     {
                        items.map((itemval,index) => {
                           return <Todolist text={itemval}
                               key ={index}
                               onSelect ={deleteitems}
                           />; 
                        })
                    }
                </ol>
                </div>
            </div>
    
                }
export default App;  