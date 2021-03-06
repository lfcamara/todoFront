import React from 'react'

import { ButtonComponent } from './styled'

const Button = ({color, ...props}) => {
  return <ButtonComponent color={color} {...props}/>
}

export default Button