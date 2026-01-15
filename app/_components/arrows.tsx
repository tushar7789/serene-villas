import Image from "next/image";
import Left from "../../public/static_images/left-arrow.png";
import Right from "../../public/static_images/right-arrow.png";

type modeType = {
    mode: string
};

export default function Arrow({ mode }: modeType) {
    return (
        <>
            {
                mode === "left" ?
                    <Image src={Left} alt="left" className="h-7 w-7 cursor-pointer" /> :
                    mode === "right" ?
                        <Image src={Right} alt="right" className="h-7 w-7 cursor-pointer" /> :
                        mode === "up" ?
                            <Image src={Left} alt="right" className="h-7 w-7 cursor-pointer rotate-90" /> :
                            <Image src={Right} alt="right" className="h-7 w-7 cursor-pointer rotate-90" />
            }
        </>
    );
}
