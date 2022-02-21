import React, { useEffect } from 'react'

export const Message = () => {
    
    useEffect(() => {
      console.log(' component mount')
    
      return () => {
        console.log(' component unmount')   
      }
    }, [])
    
  return (
    <div>
        <h3>
            Message
        </h3>
    </div>
  )
}
