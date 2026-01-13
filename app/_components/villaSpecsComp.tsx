import React, { Key } from 'react'

interface tempInterface {
    name?: string,
    area?: string,
    rating?: string,
    cost?: string,
    ammenities?: Array<Array<string>>,
    key?: Key
}

const villaSpecsArr = [
    {
        "name": "The Leelawati Palace",
        "area": "Basantkunj, New Delhi",
        "rating": "4",
        "ammenities": [
            ["Kitchen", "1"],
            ["Bathroom", "2"],
            // ["Bedroom", "3"],
            // ["LivingRoom", "2"],
            // ["Balcony", "4"]
        ],
        "cost": "22000",
    }
]

const VillaSpecsComp = () => {
    return (
        <div className={`h-full w-full text-[14px] pt-4`}>
            {
                villaSpecsArr.map((ele, ind) => {
                    return (
                        <>
                            <TitleComp name={ele.name} area={ele.area} />
                            <RatingsComp rating={ele.rating} />
                            <SpecDetailComp cost={ele.cost} ammenities={ele.ammenities} />
                        </>
                    )
                })
            }
        </div>
    )
}

const TitleComp: React.FC<tempInterface> = ({ name, area }) => {
    return (
        <div className="h-13 w-full ">
            <div className='h-8 w-full text-blue-800 text-2xl font-bold '>{name}</div>
            <div className='h-5 w-full text-gray-600 text-xs font-bold '><i>{area}</i></div>
        </div>
    )
}

const RatingsComp: React.FC<tempInterface> = ({ rating }) => {
    return (
        <div className='h-8 w-full flex items-center '>
            {
                Array.from({ length: Number(rating) }, (ele, ind) => {
                    return (
                        <span key={ind}>⭐</span>
                    )
                })
            }
        </div>
    )
}

const SpecDetailComp: React.FC<tempInterface> = ({ cost, ammenities }) => {
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
