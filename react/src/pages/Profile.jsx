import { useContext } from "react";
import { AppContext } from "../App";
import {ChangeProfile} from "../components/ChangeProfile";

export const Profile = () => {
    const {username} = useContext(AppContext);
    return (
      <div>
       
        <h1>This is the profile page, welcome {username}</h1>
        <ChangeProfile />
      
      </div>
    )
  }