import { useState } from "react";
// import AddButton from "./AddButton";
// import UpdateButton from "./UpdateButton";

function Text(){
    let [deta,setDeta]=useState ({text:""})

    return(<div>
        <input type="text" placeholder="Enter the task to do"></input>
        <button>Add</button>

        <button>Update</button>
    </div>)
}
export default Text
