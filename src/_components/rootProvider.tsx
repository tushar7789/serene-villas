'use client'

import React, { createContext, useState } from 'react'

import Navigation from './navigation';
import SigninModal from './signinModal';
import { RootProviderInterface } from '@/_interfaces/component_interfaces';

// could we use in case there is a need to have global state
// const rootContext = createContext({
//     'siginInModalOverlay': false
// })

const RootProvider: React.FC<RootProviderInterface> = ({ child }) => {

    const [signInModalOverlay, setSignInModalOverlay] = useState(false);

    return (
        <>
            <Navigation callbackSetter={setSignInModalOverlay} />
            <div className={`flex-1 overflow-x-hidden scroll-m-0 z-10`}>
                {child}
            </div>
            {
                signInModalOverlay ?
                    <SigninModal callbackSetter={setSignInModalOverlay} /> : null
            }
        </>
    )
}

export default RootProvider;
