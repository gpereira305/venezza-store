import React from 'react'
import { Alert } from 'react-bootstrap';


const StoreMessage = ({ variant, children }) => {
  return (
    <Alert variant={variant}>{ children }</Alert>
  )
};

StoreMessage.defaultProps = {
   variant: 'info'
}


export default StoreMessage