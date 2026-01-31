import {create} from "zustand";

type State = {
    signInOverlayFlag: boolean,
    albumOverlayFlag: boolean
}

type Action = {
    setSignInOverlayFlag: () => void,
    setAlbumOverlayFlag: () => void
}

const useOverlayFlagsStore = create<State & Action>((set, get) => ({
    signInOverlayFlag: false,
    albumOverlayFlag: false,
    setSignInOverlayFlag: () => set({signInOverlayFlag: !get().signInOverlayFlag}),
    setAlbumOverlayFlag: () => set({albumOverlayFlag: !get().albumOverlayFlag})
}));

export default useOverlayFlagsStore;