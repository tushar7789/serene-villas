import useVillaDataStore from "../../_store/villaDataStore"

export const filteredVillaFunction = (noOfVisitors : number) => {
    const allVillas = useVillaDataStore.getState().allVillas;
    const setFilteredVillas = useVillaDataStore.getState().setFilteredVillas;

    const tempArr = allVillas.Villas.filter(villa => villa.rating === noOfVisitors);
    setFilteredVillas({ filterAttempted: true, Villas: tempArr });
}

export const clearFilterValues = () => {
    const setFilteredVillas = useVillaDataStore.getState().setFilteredVillas;
    setFilteredVillas({ filterAttempted: false, Villas: [] });
}
