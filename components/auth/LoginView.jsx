import {useEffect, useState, useCallback } from 'react'
import { Button, Input, Logo } from '@components/ui'

console.log(Input, Button, Logo)

import { validate } from 'email-validator'

const LoginView = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const setModalView  = () => {

  }

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      await login({
        email,
        password,
      })
      setLoading(false)
      closeModal()
    } catch ({ errors }) {
      setMessage(errors[0].message)
      setLoading(false)
      setDisabled(false)
    }
  }

  const handleValidation = useCallback(() => {

    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword)
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <form
      onSubmit={handleLogin}
      className="w-100 flex flex-col justify-between p-3"
    >
      <div className="flex justify-center pb-12 ">
        <Logo width="64px" height="64px" />
      </div>
      <div className="flex flex-col space-y-3">
        {message && (
          <div className="text-red border border-red p-3">
            {message}. Did you {` `}
            <a
              className="text-accent-9 inline font-bold hover:underline cursor-pointer"
              onClick={() => setModalView('FORGOT_VIEW')}
            >
              forgot your password?
            </a>
          </div>
        )}
        <Input type="email" placeholder="Correo Electrónico" onChange={() => {}} />
        <Input type="password" placeholder="Contraseña" onChange={() => {}} />

        <Button
          variant="slim"
          type="submit"
          className={'button customerEmail-button button--primary optimizedCheckout-buttonPrimary'}
          loading={loading}
          disabled={disabled}
        >
          Ingresar
        </Button>
        <div className="pt-1 text-center text-sm">
          <span className="text-accent-7">¿Aún no tienes cuenta?</span>
          {` `}
          <a
            className="text-accent-9 font-bold hover:underline cursor-pointer"
            onClick={() => setModalView('SIGNUP_VIEW')}
          >
            Registrarse
          </a>
        </div>
      </div>
    </form>
  )

}

export default LoginView
