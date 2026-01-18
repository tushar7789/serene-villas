import { VillaType } from "../store/villaDataStore"

interface TempInt {
    allVillas : VillaType[],
    noOfVisitors: number
}

export const filterFunction = ({allVillas, noOfVisitors} : TempInt) => {
    return allVillas.filter(villa => villa.rating === noOfVisitors);
}