import Image from 'next/image'
import React from 'react'

import Star from "../../public/static_images/star.png"
import { VillaType } from '../_store/villaDataStore'

type UtilityCompInterface = {
    name?: string,
    area?: string,
    cost?: string,
    rating?: string,
    ammenities?: Array<Array<string>>,
}

export interface VillaInterface {
    villaDetails: VillaType;
}

const VillaSpecsComp: React.FC<VillaInterface> = ({ villaDetails }) => {
    return (
        <div className='h-full w-full text-[14px] pt-4'>
            <TitleComp name={villaDetails.name} area={villaDetails.area} rating={villaDetails.rating.toLocaleString()} />
            <SpecDetailComp cost={villaDetails.cost.toLocaleString()} ammenities={villaDetails.ammenities.ammenities} />
        </div>
    )
}


const TitleComp: React.FC<UtilityCompInterface> = ({ name, area, rating }) => {
    return (
        <>
            <div className='h-10 w-full flex justify-between items-center text-green-700 text-2xl font-bold'>
                <span className="h-full w-min-10 flex items-center">{name}</span>
                <span className='h-full w-30 flex justify-end items-center text-[16px]'>
                    <span className='h-8 w-7 flex justify-center items-center'><i>{rating}</i></span>
                    <span className='h-8 w-7 flex justify-center items-center'>
                        <Image src={Star.src} height={28} width={28} alt="" />
                    </span>
                </span>
            </div>
            <div className='h-3 w-full mb-3 text-gray-600 text-xs font-bold'><i>{area}</i></div>
        </>
    )
}

const SpecDetailComp: React.FC<UtilityCompInterface> = ({ cost, ammenities }) => {
    return (
        <div className='h-25 w-full flex py-3 text-gray-600'>
            <div className='h-full w-115 flex flex-col justify-start '>
                <AmmenitiesComp ammenities={ammenities} />
            </div>
            <div className='h-full w-25 flex items-end font-extrabold text-[18px]'>
                Rs. {cost}
            </div>
        </div>
    )
}

export const AmmenitiesComp: React.FC<UtilityCompInterface> = ({ ammenities }) => {
    const len = ammenities?.length;
    return (
        <>
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
        </>
    )
}

export default VillaSpecsComp;
