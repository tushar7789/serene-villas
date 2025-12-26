'use client'

import React, { useState, createRef, RefObject } from 'react'
import { Carousel } from "antd";
import { CarouselRef } from 'antd/es/carousel';
import Image from 'next/image';

import { ImageList } from '@/utils/utils';
import Arrow from '@/_components/arrows';
import Cross from "../../public/static_images/cross.png"
import { OverlayPropsInterface } from '@/_interfaces/component_interfaces';

const VillaCarousel: React.FC<OverlayPropsInterface> = ({ callbackSetter }) => {
    const len = ImageList.length;

    const [curLabelInd, setCurLabelInd] = useState<number>(0);
    const carouselRef: RefObject<CarouselRef | null> = createRef<CarouselRef>();

    function handlePrev() {
        if (curLabelInd === 0) return;

        setCurLabelInd(curLabelInd => (curLabelInd - 1) % len);
        carouselRef.current?.prev();
    }


    function handleNext() {
        if (curLabelInd === len - 1) return;

        setCurLabelInd(curLabelInd => (curLabelInd + 1) % len);
        carouselRef.current?.next();
    }

    const handleOverlayClose = () => {
        if (callbackSetter !== undefined) {
            callbackSetter(s => !s);
        }
    }

    return (
        <div className='z-30 absolute h-screen w-screen bg-black/70 text-[50px] flex flex-col items-center justify-center'>
            <div className='h-[50px] w-[720px] mb-[10px] flex items-center justify-between'>
                <span className='text-[25px]'>Photos</span>
                <Image src={Cross.src} height={20} width={20} alt="" style={{ cursor: 'pointer' }} onClick={handleOverlayClose} />
            </div>
            <Carousel
                infinite={false}
                className='
                        h-[420px] 
                        w-[720px]
                    '
                ref={carouselRef}
            >
                {
                    ImageList.map((img, ind) => {
                        return (
                            <div key={ind}>
                                <Image
                                    style={{
                                        borderRadius: '8px'
                                    }}
                                    src={img[0]}
                                    alt={img[1].toString()}
                                />
                            </div>
                        );
                    })
                }
            </Carousel>
        </div>
    )
}

{/* <div className='
                        flex
                        flex-row
                        h-[40px]
                        w-screen
                '>
                    <span className='
                        h-[40px]
                        w-[125px]
                        flex
                        items-center
                        relative
                        top-[40px]
                        z-20
                        bg-[white]
                        text-[24px]
                        pl-[10px]
                '>
                        {ImageList[curLabelInd][1].toString()}
                    </span>
                    {
                        curLabelInd !== 0 ?
                            <span className='
                                relative
                                top-[210px]
                                right-[110px]
                                z-20
                            '
                                onClick={handlePrev}
                            >
                                <Arrow mode="left" />
                            </span> :
                            null
                    }
                    {
                        curLabelInd !== len - 1 ?
                            <span className={`
                                relative
                                top-[210px]
                                z-20
                                ${curLabelInd === 0 ? 'left-[550px]' : 'left-[520px]'}
                            `}
                                onClick={handleNext}
                            >
                                <Arrow mode="right" />
                            </span> :
                            null
                    }
                </div > */}

export default VillaCarousel;