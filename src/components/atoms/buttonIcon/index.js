import React from 'react'

import { ButtonComponent } from './styled'

const ButtonIcon = ({color, ...props}) => {
  return <ButtonComponent color={color} {...props}/>
}

export default ButtonIcon