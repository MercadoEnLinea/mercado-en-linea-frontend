import React from 'react'
import Card from '../common/Card'
import Label from '../common/Label'
import Input from '../common/Input'
import Username from '../common/Username'
import Button from '../common/Button'


export default function Registration() {
    return (

        <Card>
            <form>
                <div>
                    <Label htmlFor="name" value="Nombre" />
                    <Input id="name" type="text" placeholder="Nombre Completo" className="mt-1 block w-full" required autoFocus autoComplete="name" />
                </div>

                <div className="mt-4">
                    <Label htmlFor="name" value="Correo electrónico" />
                    <Input id="name" type="text"  placeholder="E-mail" className="mt-1 block w-full" required autoFocus autoComplete="email" />
                </div>

                <div className="mt-4">
                    <Label htmlFor="username" value="Nombre de usuario" />
                    <Username id="username" domain="mercadoenlinea.mx" type="text" className="mt-1 block w-full" required autoFocus autoComplete="password_confirmation" />
                </div>

                <div className="mt-4">
                    <Label htmlFor="name" value="Contraseña" />
                    <Input id="name" type="password" placeholder="Contraseña" className="mt-1 block w-full" required autoFocus autoComplete="password" />
                </div>

                <div className="mt-4">
                    <Label htmlFor="name" value="Confirmar contraseña" />
                    <Input id="name" type="password" placeholder="Confirmar Contraseña" className="mt-1 block w-full" required autoFocus autoComplete="password_confirmation" />
                </div>

                

                <div className="flex items-center justify-end mt-4">
                    <Button>
                        Registrarse
                    </Button>
                </div>

            </form>
        </Card>
    )
}