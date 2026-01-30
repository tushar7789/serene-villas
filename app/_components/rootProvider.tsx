'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import Navigation from './navigation';
import SigninModal from './signinModal';
import { RootProviderInterface } from '../_interfaces/component_interfaces';
import VillaCarousel from './villaCarousel';
import useOverlayFlagsStore from '../_store/overlayFlagsStore';



const RootProvider: React.FC<RootProviderInterface> = ({ child }) => {
    const signInOverlayFlag = useOverlayFlagsStore((state) => state.signInOverlayFlag);
    const albumOverlayFlag = useOverlayFlagsStore((state) => state.albumOverlayFlag);
    const setSignInOverlayFlag = useOverlayFlagsStore((state) => state.setSignInOverlayFlag);
    const setAlbumOverlayFlag = useOverlayFlagsStore((state) => state.setAlbumOverlayFlag);

    return (
        <SessionProvider>
            <Navigation callbackSetter={setSignInOverlayFlag} />
            <div className={`flex-1 overflow-x-hidden scroll-m-0 z-10`}>
                {child}
            </div>
            {
                signInOverlayFlag ?
                    <SigninModal callbackSetter={setSignInOverlayFlag} /> : null
            }
            {
                albumOverlayFlag ?
                    <VillaCarousel callbackSetter={setAlbumOverlayFlag} /> : null
            }
        </SessionProvider>
    )
}

export default RootProvider;
