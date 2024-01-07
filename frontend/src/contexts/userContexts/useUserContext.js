import UserContext from './UserContext'
import { useContext } from 'react'

const useUserContext = () => {
    const userContext = userContext(UserContext);
    if (!userContext) {
        console.log("Error in userContext");
    }
    return userContext;
}

export default useUserContext