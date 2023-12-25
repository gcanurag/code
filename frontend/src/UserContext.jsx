import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "./lib/cookieGetterSetter";
export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

    
  useEffect(() => {
    const fetchdata = async () => {
      const cookie = getCookie("storedAuthtoken");
    const {data} = await axios.get(`/profile`, {
        headers: {
          "auth-token": cookie,
        }
      });
        // const { data } = response.json();
        console.log(data,"dataaa from context");
        setReady(true);
        setUser(data);

    }
    fetchdata();
  },[])
  console.log(user);
  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
