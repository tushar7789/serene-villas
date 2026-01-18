import {create} from "zustand";

export type VillaType = {
    id: string,
    area: string,
    cost: number,
    name: string,
    rating: number,
    villaNumber: number
}

type TempTypeTwo = {
    Villas: Array<VillaType>,
    filterAttempted: boolean
}

type State = {
    allVillas: Array<VillaType>,
    filteredVillas: TempTypeTwo
}

type Action = {
    setAllVillas : (allVillas: State['allVillas']) => void,
    setFilteredVillas :  (filteredVillas: State['filteredVillas']) => void
}

const useVillaDataStore = create<State & Action>((set, get) => ({
    allVillas: [],
    filteredVillas: { Villas:[], filterAttempted: false},
    setAllVillas: (allVillas) => set({allVillas : allVillas}),
    setFilteredVillas: (filteredVillas) => set({filteredVillas : filteredVillas})
}));

export default useVillaDataStore;
