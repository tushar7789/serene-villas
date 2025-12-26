import Image from "next/image"
import { FeaturesImageList } from "@/utils/utils"

const Features = () => {
    return (
        <>
            {
                FeaturesImageList.map((img, ind) => {
                    return (
                        <Image
                            src={img.src}
                            height={30}
                            width={30}
                            key={ind}
                            style={{ cursor: "pointer" }}
                            alt=" "
                        />
                    )
                })
            }
        </>
    )
}

export default Features;