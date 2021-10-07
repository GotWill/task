import { useState } from "react";
import * as C from './App.styles';
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/ListItem/addArea";
const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: "lavar a roupa", done: false},
    {id: 2, name: "passear com o dog", done: false},

  ])

  const handleAddTask = (taskName: string) =>{
    const newList  = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })

    setList(newList)
  }


  return(
   <C.Container>
     <C.area>
       <C.header>Lista de Tarefas</C.header>

      <AddArea onEnter={handleAddTask}/>

       {list.map((item, index)=>(
         <ListItem key={index} item={item}  />
       ))}
     </C.area>
   </C.Container>
  )
}


export default App;