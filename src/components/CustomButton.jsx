import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({variant, text, styleing}) => {
  return (
    <Button styleing={styleing} variant={variant}>{text}</Button>
  )
}

export default CustomButton