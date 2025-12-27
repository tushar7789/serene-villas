import React from 'react'
import Image from 'next/image'

import { DetailsCardImages } from '@/utils/utils'

const DetailsContainer = () => {
    const s: string = typeof (DetailsCardImages[0]);
    return (
        <div className="
            w-screen 
            h-[1050px] 
            px-[150px] 
            my-[50px]
            flex 
            flex-col
            justify-around
            items-center  
      ">
            {
                DetailsCardImages.map((ele, ind) => {
                    return (
                        <div className="
                            w-screen 
                            h-[400px] 
                            px-[150px] 
                            flex 
                            flex-row
                            justify-between
                            items-center
                            "
                            key={ind}>
                            {
                                (ind + 1) % 2 ?
                                    <>
                                        <div className="h-full w-[500px] flex justify-center items-center ">
                                            <Image src={ele.src} height={350} width={440} alt="" style={{ borderRadius: '14px' }} />
                                        </div>
                                        <Details />
                                    </> :
                                    <>
                                        <Details />
                                        <div className="h-full w-[400px] flex justify-center items-center">
                                            <Image src={ele.src} height={340} width={410} alt="" style={{ borderRadius: '14px' }} />
                                        </div>
                                    </>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}


// const Card = () => {
//     return (
//         <div className="h-full w-[400px] bg-pink-400">
//             {/* <Image src={ele.src} alt="" /> */}
//         </div>
//     )
// }

const Details = () => {
    return (
        <div className="h-full w-[450px] text-[18px] text-justify flex items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint molestiae quasi quis quos minus! Temporibus aperiam, omnis vitae explicabo dolores, accusantium nostrum quam sequi recusandae obcaecati deserunt eum ratione?
        </div>
    )
}

export default DetailsContainer;
