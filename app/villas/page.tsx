'use client'

import { useEffect } from "react";
import Image from "next/image";
import Divider from '@mui/material/Divider';
import Pagination from "@mui/material/Pagination";
import Stack from '@mui/material/Stack';


import Cabin_1 from "../../public/static_images/living-room-i.png";
import Button from "../../components/button";
import VillaSpecsComp from "../../components/villaSpecsComp";
import FilterPanel from "../../components/filterPanel";
import useAllVillaDataStore from "../../store/villaDataStore";
import { VillaType } from "../../store/villaDataStore";
import { fetchAllVillasFunction } from "../../utils/villa";
import Footer from "../../components/footer";

const Villas = () => {
    const allVillas = useAllVillaDataStore((state) => state.allVillas);
    const filteredVillas = useAllVillaDataStore((state) => state.filteredVillas);

    useEffect(() => {
        fetchAllVillasFunction();
    }, []);

    const handleSearchChange = () => {

    }

    return (
        <>
            <div className="h-200 w-screen flex justify-center items-center">
                <FilterPanel />
                {/* <Divider orientation="vertical" flexItem /> */}
                <div className="h-full w-550 flex flex-col justify-start items-center">
                    <div className="h-20 w-full px-10 my-5 flex justify-center items-center ">
                        <input
                            type="text"
                            className="h-14 w-full px-5 flex justify-center items-center outline-0 bg-linear-90 shadow-xl rounded-md"
                            placeholder="Search property by name or area ...."
                            onChange={handleSearchChange}
                        />
                    </div>
                    {/* <Divider variant="middle" flexItem /> */}
                    <div className="h-min w-full mb-5 flex flex-col justify-start items-center overflow-x-hidden">
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
                    <div className="h-20 w-full mb-5  px-5 flex justify-start items-center">
                        <Pagination count={10} shape="rounded" />
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Villas;
