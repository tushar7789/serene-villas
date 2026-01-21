'use client'

import { useEffect } from "react";
import Image from "next/image";
import Divider from '@mui/material/Divider';

import Cabin_1 from "../../public/static_images/living-room-i.png";
import Button from "../_components/button";
import VillaSpecsComp from "../_components/villaSpecsComp";
import FilterPanel from "../_components/filterPanel";
import useAllVillaDataStore from "../store/villaDataStore";
import { VillaType } from "../store/villaDataStore";
import { fetchAllVillasFunction } from "../_utils/functions/fetchAllVillasFunction";

const Villas = () => {
    const allVillas = useAllVillaDataStore((state) => state.allVillas);
    const filteredVillas = useAllVillaDataStore((state) => state.filteredVillas);

    useEffect(() => {
        fetchAllVillasFunction();
    }, []);

    return (
        <>
            <div className="h-45 w-screen px-40 flex items-center justify-start bg-linear-to-r from-gray-50 to-gray-100 sticky top-0 z-20">
                <FilterPanel />
            </div>
            <div className="h-100 w-screen flex flex-col justify-start items-center">
                {
                    allVillas.isLoading ? <span>Loading...</span> :
                        filteredVillas.Villas.length !== 0 ?
                            filteredVillas.Villas.map((villaDetails: VillaType, ind) => {
                                const id = villaDetails.villaNumber;
                                return (
                                    <div className='w-screen px-40 mt-10' key={ind}>
                                        <Button to={`villas/${id}`} type={"image-button"}>
                                            <Image src={Cabin_1} alt="cabin" height={320} width={350} style={{ borderRadius: '8px' }} />
                                            <div className="h-full w-140 rounded-r-xl ">
                                                <VillaSpecsComp villaDetails={villaDetails} />
                                                <Divider variant="middle" flexItem />
                                            </div>
                                        </Button>
                                    </div >
                                )
                            }) : filteredVillas.filterAttempted ? <span>No Villas with this filter. Try Again!</span> :
                                allVillas.Villas.map((villaDetails: VillaType, ind) => {
                                    const id = villaDetails.villaNumber;
                                    return (
                                        <div className='w-screen px-40 mt-10' key={ind}>
                                            <Button to={`villas/${id}`} type={"image-button"}>
                                                <Image src={Cabin_1} alt="cabin" height={320} width={350} style={{ borderRadius: '8px' }} />
                                                <div className="h-full w-140 rounded-r-xl ">
                                                    <VillaSpecsComp villaDetails={villaDetails} />
                                                    <Divider variant="middle" flexItem />
                                                </div>
                                            </Button>
                                        </div >
                                    )
                                })
                }
            </div >
        </>
    )
}

export default Villas;
