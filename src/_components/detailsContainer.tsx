import React from 'react'

const DetailsContainer = () => {
    return (
        <div className="
            w-screen 
            h-[1050px] 
            px-[150px] 
            mt-[50px]
            flex 
            flex-col
            justify-around
            items-center  
      ">
            {
                Array.from({ length: 3 }, (ele, ind) => {
                    return (
                        <div className="
                      w-screen 
                      h-[300px] 
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
                                        <Card />
                                        <Details />
                                    </> :
                                    <>
                                        <Details />
                                        <Card />
                                    </>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}


const Card = () => {
    return (
        <div className="h-full w-[400px] bg-pink-400">

        </div>
    )
}

const Details = () => {
    return (
        <div className="h-full w-[500px] text-[20px] text-justify flex items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint molestiae quasi quis quos minus! Temporibus aperiam, omnis vitae explicabo dolores, accusantium nostrum quam sequi recusandae obcaecati deserunt eum ratione?
        </div>
    )
}

export default DetailsContainer;
