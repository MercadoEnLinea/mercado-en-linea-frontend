import cn from 'classnames'
import { forwardRef, useRef } from 'react'
import s from './styles.module.css'
import mergeRefs from 'react-merge-refs'
import Loading from '@components/ui/Loading'

const Button = forwardRef((props, buttonRef) => {
  const {
    className = '',
    variant = '',
    children,
    Component = 'button',
    width = 10,
    loading = false,
    disabled = false,
    style = {},
    ...rest
  } = props

  const ref = useRef()

  const rootClassName = cn(
    s.root,
    {
      [s.ghost]: variant === 'ghost',
      [s.slim]: variant === 'slim',
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className
  )

  return (
    <Component
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children}
      {loading && (
        <i className="pl-2 m-0 flex">
          <Loading />
        </i>
      )}
    </Component>
  )

})

export default Button;
