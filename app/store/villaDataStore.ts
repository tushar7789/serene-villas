import {create} from "zustand";

type AmmenitiesType = {
    ammenities: string[][]
}

export type VillaType = {
    id: string,
    area: string,
    cost: number,
    name: string,
    rating: number,
    villaNumber: number,
    ammenities: AmmenitiesType
}

type TempTypeOne = {
    Villas: Array<VillaType>,
    isLoading: boolean
}

type TempTypeTwo = {
    Villas: Array<VillaType>,
    filterAttempted: boolean
}


type State = {
    allVillas: TempTypeOne,
    filteredVillas: TempTypeTwo
}

type Action = {
    setAllVillas : (allVillas: State['allVillas']) => void,
    setFilteredVillas :  (filteredVillas: State['filteredVillas']) => void,
}

const useVillaDataStore = create<State & Action>((set, get) => ({
    allVillas: { Villas: [], isLoading: true},
    filteredVillas: { Villas:[], filterAttempted: false},
    setAllVillas: (allVillas) => set({allVillas : allVillas}),
    setFilteredVillas: (filteredVillas) => set({filteredVillas : filteredVillas})
}));

export default useVillaDataStore;
