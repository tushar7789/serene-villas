import useFilterDataStore from "../store/filterDataStore";
import useAllVillaDataStore from "../store/villaDataStore";
import { useState } from "react";
import { TempType } from "../store/villaDataStore";

const useFilterFunction = () => {
    const [newVillaList, setNewVillaList] = useState<TempType[]>([]);

    const from = useFilterDataStore((state) => state.from);
    const to = useFilterDataStore((state) => state.to);
    const noOfVisitors = useFilterDataStore((state) => state.noOfVisitors);
    const filterValue = useFilterDataStore((state) => state.filterValue);
    const filterDirection = useFilterDataStore((state) => state.filterDirection);

    const allVilla = useAllVillaDataStore((state) => state.allVillas);

    // temporary comparing noOfVisitors with Rating just to test

    if(noOfVisitors !== "") {
        const temp: TempType[]= allVilla.filter((villa) => villa.rating === Number(noOfVisitors));
        setNewVillaList(temp);
        return [newVillaList, setNewVillaList];
    }else {
        setNewVillaList(allVilla);
    }

    
    return [newVillaList, setNewVillaList];
}

export default useFilterFunction;