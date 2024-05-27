import { useState } from "react"


function TodoInput({addList}) {
    const [input,setInput]=useState("");

    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            addList(input)
            setInput("")
        }
    }
    const fun=()=>{
           addList(input)
        setInput("")
}
  return (
    <div className="">
        <input type="text" className=" bg-slate-200 rounded-xl w-1/2 shadow shadow-gray-700 p-3 " value={input} placeholder="Enter your todo"
        onChange={e=>{
            setInput(e.target.value)
        }}
        onKeyDown={handleEnterPress}
        />
        <button className="bg-blue-800  rounded-xl  shadow-2xl p-3 m-3 w-20 shadow-blue-500 hover:bg-blue-600 text-white text-2xl" onClick={fun}>Add</button>
        {/* <div className="">{input}</div> */}
    </div>
  )
}

export default TodoInput