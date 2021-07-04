import React from 'react'

import Card from '../common/Card'
import Label from '../common/Label'
import Input from '../common/Input'
import Username from '../common/Username'
import Button from '../common/Button'

export default function Auth() {
  return (
    <Card>
      <form>

        <div className="mt-4">
          <Label htmlFor="name" value="Correo electrónico" />
          <Input id="name" type="email" placeholder="E-mail" className="mt-1 block w-full" required autoFocus autoComplete="email" />
        </div>

        <div className="mt-4">
          <Label htmlFor="name" value="Contraseña" />
          <Input id="name" type="password" placeholder="Contraseña" className="mt-1 block w-full" required autoFocus autoComplete="password" />
        </div>

        <div class="flex items-center justify-end mt-4">
          <Button>
            Ingresar
          </Button>
        </div>

      </form>
    </Card>
  )
}