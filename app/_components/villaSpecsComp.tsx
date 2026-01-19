import Image from 'next/image'
import React from 'react'

import Star from "../../public/static_images/star.png"
import { VillaType } from '../store/villaDataStore'

type UtilityCompInterface = {
    name?: string,
    area?: string,
    cost?: string,
    rating?: string,
    ammenities?: Array<Array<string>>,
}

interface VillaInterface {
    villaDetails: VillaType;
}

const ammenitiesVAR = [
    ["Kitchen", "1"],
    ["Bathroom", "2"],
    ["Bedroom", "3"],
    ["LivingRoom", "2"],
    ["Balcony", "4"]
]

const VillaSpecsComp: React.FC<VillaInterface> = ({ villaDetails }) => {
    return (
        <div className={`h-full w-full text-[14px] pt-4`}>
            <div>
                <TitleComp name={villaDetails.name} area={villaDetails.area} />
                <RatingsComp rating={villaDetails.rating.toLocaleString()} />
                <SpecDetailComp cost={villaDetails.cost.toLocaleString()} ammenities={ammenitiesVAR} />
            </div>
        </div>
    )
}

const TitleComp: React.FC<UtilityCompInterface> = ({ name, area }) => {
    return (
        <div className="h-10 w-full">
            <div className='h-8 w-full mr-5 text-green-700 text-2xl font-bold'>{name}</div>
            <div className='h-5 w-full text-gray-600 text-xs font-bold '><i>{area}</i></div>
        </div>
    )
}

const RatingsComp: React.FC<UtilityCompInterface> = ({ rating }) => {
    return (
        <div className='h-full w-full flex justify-start items-center mt-4'>
            {
                Array.from({ length: Number(rating) }, (ele, ind) => {
                    return (
                        <Image src={Star.src} height={20} width={20} alt="" key={ind} />
                    )
                })
            }
        </div>
    )
}

const SpecDetailComp: React.FC<UtilityCompInterface> = ({ cost, ammenities }) => {
    const len = ammenities?.length;

    return (
        <div className='h-25 w-full flex py-3 text-gray-600'>
            <div className='h-full w-115 flex flex-col justify-center'>
                {
                    len !== undefined && len !== 0 ?
                        <>
                            <div className='h-8 w-full flex justify-start'>
                                {
                                    ammenities?.slice(0, 3).map((ele, ind) => {
                                        return (
                                            <div className='h-full w-35 flex mr-2' key={ind}>
                                                <span className='h-full w-7 flex justify-start items-center'><i>{ele?.at(1)} x</i></span>
                                                <span className='h-full w-28 flex justify-start items-center'><i>{ele?.at(0)}</i></span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            {(len > 3)
                                &&
                                <div className='h-8 w-full flex justify-start '>
                                    {
                                        ammenities?.slice(3).map((ele, ind) => {
                                            return (
                                                <div className='h-full w-35 flex mr-2' key={ind}>
                                                    <span className='h-full w-7 flex justify-start items-center'><i>{ele?.at(1)} x</i></span>
                                                    <span className='h-full w-28 flex justify-start items-center'><i>{ele?.at(0)}</i></span>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            }
                        </>
                        : null
                }
            </div>
            <div className='h-full w-25 flex items-end font-extrabold text-[18px]'>
                Rs. {cost}
            </div>
        </div>
    )
}

export default VillaSpecsComp;
