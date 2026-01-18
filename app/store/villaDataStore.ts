import {create} from "zustand";

export type TempType = {
    id: string,
    area: string,
    cost: number,
    name: string,
    rating: number,
    villaNumber: number
}

type State = {
    allVillas: Array<TempType>,
    filteredVillas: Array<TempType> 
}

type Action = {
    setAllVillas : (allVillas: State['allVillas']) => void,
    setFilteredVillas :  (filteredVillas: State['filteredVillas']) => void
}

const useVillaDataStore = create<State & Action>((set, get) => ({
    allVillas: [],
    filteredVillas: [],
    setAllVillas: (allVillas) => set({allVillas : allVillas}),
    setFilteredVillas: (filteredVillas) => set({filteredVillas : filteredVillas})
}));

export default useVillaDataStore;
