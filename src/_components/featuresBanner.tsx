const Features = () => {
    return (
        <>
            {
                Array.from({ length: 7 }, (ele, ind) => {
                    return (
                        <span className="h-[50px] w-[50px] bg-purple-400 flex flex-row justify-center items-center" key={ind}>
                            F
                        </span>
                    )
                })
            }
        </>
    )
}

export default Features;