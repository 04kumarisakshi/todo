import { useState } from "react"
import TodoInput from "./components/TodoInput"
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);
const deleteItem=(key)=>{
let newListTodo=[...list];
newListTodo.splice(key,1)
setList([...newListTodo])
}
  const addList = (input) => {
    if(input!=='')
    setList([...list, input]);
  };

  return (
    <div className=" text-center  mx-auto justify-center ">
      <TodoInput addList={addList} />
      <h1 className="text-2xl text-center font-serif text-blue-900 font-bold">To do List</h1>
    
      <div className=" justify-center  flex flex-col gap-5 mx-auto  items-start w-1/3">
      {list.map((listItem, i) => {
        return (
          <List key={listItem.id || i} item={listItem} deleteItem={deleteItem} /> 
        );
      })}
      </div>
    </div>
  );
}

export default App;