import { TempType } from "../store/villaDataStore"

interface TempInt {
    allVillas : TempType[],
    noOfVisitors: number
}

export const filterFunction = ({allVillas, noOfVisitors} : TempInt) => {
    return allVillas.filter(villa => villa.rating === noOfVisitors);
}