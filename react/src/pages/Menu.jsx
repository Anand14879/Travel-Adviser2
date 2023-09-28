import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeMenu } from "../components/ChangeMenu";
export const Menu = () => {

  const {username} = useContext(AppContext);
  return (
    <div><h1>This is the menu page, welcome {username}</h1>
    
     <ChangeMenu />
    </div>
  )
}
