import React from 'react'

const villaSpecsArr = [
    "Living Room",
    "Open Kitchen",
    "Bedroom",
    "Fireplace",
    "Balcony"
]

const VillaSpecsComp = () => {
    return (
        <>
            {
                villaSpecsArr.map((ele, ind) => {
                    return (
                        <li className="flex justify-between items-center" key={ele}>
                            <span>{ele}</span>
                            <span>
                                <span className="text-xs mr-[3px]">x</span>
                                {Math.floor(Math.random() * (5 - ind) + ind)}
                            </span>
                        </li>
                    )
                })
            }
        </>
    )
}

export default VillaSpecsComp;
