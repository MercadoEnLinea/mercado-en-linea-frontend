import React from 'react'

import Card from '@components/ui/Card'
import SignUpView from '@components/auth/SignUpView'


export default function Auth() {
  return (
    <div>
      <Card>
        <SignUpView />
      </Card>
    </div>
  )
}
