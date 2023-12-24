import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "./lib/cookieGetterSetter";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
//   useEffect(() => {
//     if (!user) {
//       axios.get("/profile").then(({ data }) => {
//         setUser(data);
//         setReady(true);
//       });
//       }
      

//     // }
//     // const fetchData = async () => {
//     //     const response = await fetch(`http://localhost:3000/profile`);
//     //     console.log(response);
//     // }
//     // fetchData();
//   }, []);
    
  useEffect(() => {
    const fetchdata = async () => {
      const cookie = getCookie("storedAuthtoken");
      const response = await fetch(`http://localhost:3000/profile`, {
        method: "GET",
        headers: {
          "auth-token":cookie,
        }
      });
        const { data } = response.json();
        console.log(data,"dataaa");
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
