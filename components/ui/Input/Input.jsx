import React, {useRef } from 'react'
import cn from 'classnames'
import s from './styles.module.css'

export default function Input({className, children, onChange,     Component = 'label', ...rest}) {
  console.log('Input', this, className, children, onChange, Component)
  const ref = useRef()

  const rootClassName = cn(s.root, {}, className)

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (

      <input
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />

  )
}


