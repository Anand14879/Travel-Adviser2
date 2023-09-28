import { useContext, useState } from "react"
import { AppContext } from "../App";



export const ChangeMenu = () => {

const [newUsername, setNewUsername] = useState("");
const {setUsername} = useContext(AppContext);
  return (
    <div>

        <input  onChange={(event)=>{
            setNewUsername(event.target.value);
        }}/>
        <button onClick={()=>{
            setUsername(newUsername);
        }}>Change Username</button>
    </div>
  )
}



