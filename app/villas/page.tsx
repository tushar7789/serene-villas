'use client'

import { useEffect } from "react";
import Image from "next/image";
import Divider from '@mui/material/Divider';

import Cabin_1 from "../../public/static_images/living-room-i.png";
import Button from "../_components/button";
import VillaSpecsComp from "../_components/villaSpecsComp";
import FilterPanel from "../_components/filterPanel";
import useAllVillaDataStore from "../_store/villaDataStore";
import { VillaType } from "../_store/villaDataStore";
import { fetchAllVillasFunction } from "../_utils/functions/fetchAllVillasFunction";
import Footer from "../_components/footer";

const Villas = () => {
    const allVillas = useAllVillaDataStore((state) => state.allVillas);
    const filteredVillas = useAllVillaDataStore((state) => state.filteredVillas);

    useEffect(() => {
        fetchAllVillasFunction();
    }, []);

    return (
        <>
            <div className="h-200 w-screen flex justify-center items-center">
                <FilterPanel />
                <Divider orientation="vertical" flexItem />
                <div className="h-full w-550 flex flex-col justify-start items-center">
                    <div className="h-20 w-full px-10 my-5 flex justify-center items-center ">
                        <input type="text" className="h-14 w-full px-5 flex justify-center items-center outline-0 bg-linear-90 shadow-xl rounded-md" placeholder="Search property by name or area ...." />
                    </div>
                    {/* <Divider variant="middle" flexItem /> */}
                    <div className="h-min w-full mb-12 flex flex-col justify-start items-center overflow-x-hidden">
                        {
                            allVillas.isLoading ? <span>Loading...</span> :
                                filteredVillas.Villas.length !== 0 ?
                                    filteredVillas.Villas.map((villaDetails: VillaType, ind) => {
                                        const id = villaDetails.villaNumber;
                                        return (
                                            <div className='w-full px-10 mt-5' key={ind}>
                                                <Button to={`villas/${id}`} type={"image-button"} key={ind} villaDetails={villaDetails}>
                                                    <Image src={Cabin_1} alt="cabin" height={220} width={250} style={{ borderRadius: '8px' }} />
                                                    <div className="h-full w-100 rounded-r-xl ">
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
                                                <div className='h-80 w-full px-10 mt-5' key={ind}>
                                                    <Button to={`villas/${id}`} type={"image-button"} key={ind} villaDetails={villaDetails}>
                                                        <Image src={Cabin_1} alt="cabin" height={220} width={250} style={{ borderRadius: '8px' }} />
                                                        <div className="h-full w-140 rounded-r-xl ">
                                                            <VillaSpecsComp villaDetails={villaDetails} />
                                                            <Divider variant="middle" flexItem />
                                                        </div>
                                                    </Button>
                                                </div >
                                            )
                                        })
                        }
                    </div>
                </div>
                {/* <div className="h-45 w-screen px-40 flex items-center justify-start bg-linear-to-r from-gray-50 to-gray-100 sticky top-0 z-20">
                <FilterPanel />
            </div> */}
                {/* <div className="h-min w-screen mb-20 flex flex-col justify-start items-center">

                </div > */}
            </div>
            <Footer />
        </>
    )
}

export default Villas;
