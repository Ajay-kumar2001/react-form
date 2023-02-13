 import {useState} from "react"
 import AddData from "./AddData"
function Form(){
    let [data,setData]=useState({name:"",id:"", sem1:"",sem2:"", sem3:""})
     let [obj,setObj]=useState([])
let setName=(e)=>{
    let s=e.target.value
    let re=/^[A-Z][a-zA-Z]{3}$/
    if(re.test(s)){
       return setData({...data,name:e.target.value}) 
    }
    }
let setId=(e)=>{setData({...data,id:e.target.value})}
let setSem1=(e)=>{setData({...data,sem1:e.target.value})}
let setSem2=(e)=>{setData({...data,sem2:e.target.value})}
let setSem3=(e)=>{setData({...data,sem3:e.target.value})}
let Add=(e)=>{
    let s=data
    console.log(s)
    setObj([...obj,data])
    setData({...data,name:"",id:"", sem1:"",sem2:"", sem3:""})
}

return(<div>
<form onSubmit={(e)=>{e.preventDefault()}}>
         <input type="text" placeholder="enterName" value={data.name} onChange={setName}></input>
         <input type="text" placeholder="enter id" value={data.id} onChange={setId}></input>
         <input type="text" placeholder="entersem1" value={data.sem1} onChange={setSem1}></input>
         <input type="text" placeholder="enter sem2" value={data.sem2} onChange={setSem2}></input>
         <input type="text" placeholder="entersem3" value={data.sem3} onChange={setSem3}></input>
<button onClick={Add}>Add</button>
</form>
<AddData sdata={obj}/>
</div>)
}
export default Form