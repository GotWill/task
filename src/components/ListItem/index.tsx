import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";

type props ={
    item: Item
}
export const ListItem = ({item}: props) =>{

    const [isChecked, SetisChecked] = useState(item.done)
    return(
        < C.Container done={isChecked}>
            <input
            type="checkbox" 
            checked={isChecked}
            onChange ={e => SetisChecked(e.target.checked)}
            />
         <label>{item.name}</label>
        </C.Container>
    )
}