'use client'

import React, { createContext, useState } from 'react'

import Navigation from './navigation';
import SigninModal from './signinModal';
import { OverlayPropsInterface, RootProviderInterface } from '../_interfaces/component_interfaces';
import VillaCarousel from './villaCarousel';

// could we use in case there is a need to have global state
export const RootContext = createContext<OverlayPropsInterface>({
    callbackSetter: undefined
});

const RootProvider: React.FC<RootProviderInterface> = ({ child }) => {

    const [signInModalOverlay, setSignInModalOverlay] = useState(false);
    const [albumOverlay, setAlbumOverlay] = useState<boolean>(false);

    return (
        <RootContext value={{ callbackSetter: setAlbumOverlay }}>
            <Navigation callbackSetter={setSignInModalOverlay} />
            <div className={`flex-1 overflow-x-hidden scroll-m-0 z-10`}>
                {child}
            </div>
            {
                signInModalOverlay ?
                    <SigninModal callbackSetter={setSignInModalOverlay} /> : null
            }
            {
                albumOverlay ?
                    <VillaCarousel callbackSetter={setAlbumOverlay} /> : null
            }
        </RootContext>
    )
}

export default RootProvider;
