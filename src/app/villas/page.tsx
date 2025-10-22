
function Villas() {
    return (
        <div className=''>
            <div className="w-screen h-[50px] my-[15px] border-2">
                Villas
            </div>
            <div className="grid grid-rows-5">
                {
                    Array.from({ length: 5 }, (v, ind) => {
                        return (
                            <div className='grid grid-cols-2' key={ind}>
                                <div className=' border-2'>Loda --- 1</div>
                                <div className='border-2'>Loda --- 2</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Villas;
