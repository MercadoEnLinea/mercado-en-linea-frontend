import React, {useCallback, useEffect, useState} from 'react'
import { Logo, Input, Button } from '@components/ui'
import { Info } from '@components/icons'

const SignUpView = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)



  const handleSignup = async (e) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      await signup({
        email,
        firstName,
        lastName,
        password,
      })
      setLoading(false)
      closeModal()
    } catch ({errors}) {
      setMessage(errors[0].message)
      setLoading(false)
    }
  }

  const handleValidation = useCallback(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword)
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <form
      onSubmit={handleSignup}
      className="w-100 flex flex-col justify-between p-3"
    >
      <div className="flex justify-center pb-12 ">
        <Logo width="64px" height="64px"/>
      </div>
      <div className="flex flex-col space-y-4">
        {message && (
          <div className="text-red border border-red p-3">{message}</div>
        )}
        <Input placeholder="Nombre" onChange={setFirstName}/>
        <Input placeholder="Apellidos" onChange={setLastName}/>
        <Input type="email" placeholder="Correo electrónico" onChange={setEmail}/>
        <Input type="password" placeholder="Contraseña" onChange={setPassword}/>
        <span className="text-accent-8">
          <span className="inline-block align-middle ">
            <Info width="15" height="15"/>
          </span>{' '}
          <span className="leading-6 text-sm">
            <strong>Info</strong>: Las contraseñas deben tener al menos 7 caracteres.{' '}
          </span>
        </span>
        <div className="pt-2 w-full flex flex-col">
          <Button
            variant="slim"
            type="submit"
            loading={loading}
            disabled={disabled}
          >
            Registrarse
          </Button>
        </div>

        <span className="pt-1 text-center text-sm">
          <span className="text-accent-7">¿Ya tienes una cuenta?</span>
          {` `}
          <a
            className="text-accent-9 font-bold hover:underline cursor-pointer"
            onClick={() => {}}
          >
            Ingresar
          </a>
        </span>
      </div>
    </form>
  )
}

export default SignUpView;
