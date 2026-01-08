import React from 'react'

import { signIn, signOut } from '../../auth'

const Handle = () => {
    return (
        <div>
            <button onClick={() => signIn("google")}>Sign in</button>
            <button onClick={() => signOut()}>Log out</button>
        </div>
    )
}

export default Handle;
