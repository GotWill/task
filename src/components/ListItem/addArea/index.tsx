import { useState, KeyboardEvent } from "react"
import * as C from "./styles"

type props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: props) =>{

  
    const [inputText, setInputText] = useState('')
    

   

    const hendelkeyUp = (e: KeyboardEvent) =>{
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText)
            setInputText('')
        }
    }
    return (
        <C.Container>
            <div className="image">➕</div>
            <input type="text"
            placeholder="adicone sua proxima tarefa"
            value={inputText} 
            onChange={e=>setInputText(e.target.value)}
            onKeyUp={hendelkeyUp}/>
        </C.Container>
    )
}