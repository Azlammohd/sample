import React, { useContext } from 'react'
import { MyContext } from './Context'


function Contextsample() {
    const {username}=useContext(MyContext)
  return (
    <div>
      {username}
    </div>
  )
}

export default Contextsample
