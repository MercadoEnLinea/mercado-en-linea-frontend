import React from 'react'

import Card from '@components/ui/Card'
import LoginView from '@components/auth/LoginView'


export default function Auth() {
  return (
    <div>
      <Card>
        <LoginView />
      </Card>
    </div>
  )
}
