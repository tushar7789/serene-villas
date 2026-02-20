import Image from "next/image";
import Left from "../public/static_images/left-arrow.png";
import Right from "../public/static_images/right-arrow.png";
import FilterTagArrow from "../public/static_images/arrow.png"
import FilterDirArrow from "../public/static_images/filter-arrow.png"

type modeType = {
    type?: string,
    mode?: string,
    dimension?: string
};

export default function Arrow({ type, mode, dimension }: modeType) {
    // const ClassName = `${dimension !== undefined ? `h-${dimension} w-${dimension}` : "h-7 w-7"} cursor-pointer`
    const dim = Number(`${dimension !== undefined ? dimension : "30"}`)
    return (
        <>
            {
                type === undefined ?
                    mode === "left" ?
                        <Image src={Left} height={dim} width={dim} alt="left" className="cursor-pointer" /> :
                        mode === "right" ?
                            <Image src={Right} height={dim} width={dim} alt="right" className="cursor-pointer" /> :
                            mode === "up" ?
                                <Image src={Left} height={dim} width={dim} alt="right" className="cursor-pointer rotate-90" /> :
                                <Image src={Right} height={dim} width={dim} alt="right" className="cursor-pointer rotate-90" />
                    :
                    type === "filter-dir" ?
                        mode === "down" ?
                            <Image src={FilterDirArrow} height={dim} width={dim} alt="right" className="cursor-pointer rotate-180" /> :
                            <Image src={FilterDirArrow} height={dim} width={dim} alt="right" className="cursor-pointer" />
                        :
                        mode === "down" ?
                            <Image src={FilterTagArrow} height={dim} width={dim} alt="right" className="cursor-pointer rotate-90" /> :
                            <Image src={FilterTagArrow} height={dim} width={dim} alt="right" className="cursor-pointer rotate-270" />
            }
        </>
    );
}
