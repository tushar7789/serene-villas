import Image from 'next/image'
import React from 'react'

import Star from "../../public/static_images/star.png"

interface UtilityCompInterface {
    name?: string,
    area?: string,
    rating?: string,
    cost?: string,
    ammenities?: Array<Array<string>>,
}

interface VillaSpecsCompInterface {
    villaDetails: UtilityCompInterface
}

const VillaSpecsComp: React.FC<VillaSpecsCompInterface> = ({ villaDetails }) => {
    return (
        <div className={`h-full w-full text-[14px] pt-4`}>
            <div>
                <TitleComp name={villaDetails.name} area={villaDetails.area} />
                <RatingsComp rating={villaDetails.rating} />
                <SpecDetailComp cost={villaDetails.cost} ammenities={villaDetails.ammenities} />
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
        <div className='h-25 w-full flex py-3'>
            <div className='h-full w-115 flex flex-col '>
                {
                    len !== undefined && len !== 0 ?
                        <>
                            <div className='h-8 w-full flex justify-evenly bg-yellow-500'>
                                {
                                    ammenities?.slice(0, 3).map((ele, ind) => {
                                        return (
                                            <span className='h-full w-5 flex justify-start items-center' key={ind}>{ele?.at(ind)}</span>
                                        );
                                    })
                                }
                            </div>
                            {(len > 3)
                                &&
                                <div className='h-12 w-full flex justify-evenly bg-yellow-500'>
                                    {
                                        ammenities?.slice(3).map((ele, ind) => {
                                            return (
                                                <span className='h-full w-full flex justify-start items-center' key={ind}>{ele?.at(ind)}</span>
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
