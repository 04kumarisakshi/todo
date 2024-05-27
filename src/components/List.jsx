function List(props) {
  return (
    <div className="  rounded-2xl mx-auto w-full bg-slate-300  shadow-xl text-center gap-4 flex"> 
     <li className=" p-4 flex text-left text-xl font-bold">  
     <span className=" ml-3 mx-4   " onClick={props.deleteItem}><i className="fa-solid fa-trash hover:text-red-700 text-black text-xl place-items-end"></i></span>
    
     <div className="">{props.item}</div>
          </li>
    </div>
  );
}

export default List