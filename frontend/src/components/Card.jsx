import React, { useContext } from 'react'
import UserContext from '../UserContext'
import { useUserContext } from '../hooks/useUserContext'

const Card = () => {
  // const { data } = useContext(UserContext);
  // console.log(data,"this is fucking data");
  const context = useUserContext();
  console.log(context, "cntxt");
  return (
    <div>
      {/* {data} */}
    </div>
  )
}

export default Card
