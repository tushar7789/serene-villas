import {create} from "zustand";

type State = {
    from: string,
    to: string,
    noOfVisitors: string,
    filterValue: string,
    filterDirection: string,
}

type Action = {
    setFrom: (from: State['from']) => void,
    setTo: (to: State['to']) => void,
    setNoOfVisitors: (noOfVisitors: State['noOfVisitors']) => void,
    setFilterValue: (filterValue: State['filterValue']) => void,
    setFilterDirection: (filterDirection: State['filterDirection']) => void,
}

const filterDataStore = create<State & Action>((set, get) => ({
    from:"",
    to:"",
    noOfVisitors:"",
    filterValue:"",
    filterDirection:"",
    setFrom: (from) => set({from : from}),
    setTo: (to) => set({to : to}),
    setNoOfVisitors: (noOfVisitors) => set({noOfVisitors : noOfVisitors}),
    setFilterValue: (filterValue) => set({filterValue : filterValue}),
    setFilterDirection:(filterDirection) => set({filterDirection : filterDirection})

}));

export default filterDataStore;