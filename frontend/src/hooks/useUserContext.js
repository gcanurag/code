import { UserContext } from '../UserContext';
import { useContext } from 'react';

export const useUserContext =  () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("this need to a valid children");
    }

    return context;
}