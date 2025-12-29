'use client'

import React, { useState, createRef, RefObject } from 'react'
import { Carousel } from "antd";
import { CarouselRef } from 'antd/es/carousel';
import Image from 'next/image';

import { ImageList } from '../_utils/utils';
import LeftArrow from '../../public/static_images/left-arrow.png'
import RightArrow from "../../public/static_images/right-arrow.png"
import Cross from "../../public/static_images/cross.png"
import { OverlayPropsInterface } from '../_interfaces/component_interfaces';

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
            <div className='z-40 relative top-[55px] h-[50px] w-[720px] px-[20px] flex items-center justify-end'>
                <Image src={Cross.src} height={40} width={40} alt="" style={{ cursor: 'pointer' }} onClick={handleOverlayClose} />
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
            <div className='z-40 relative bottom-[65px] h-[50px] w-[720px] px-[26px] flex items-center justify-between'>
                {
                    curLabelInd !== 0 ?
                        <Image src={LeftArrow.src} height={35} width={35} alt="" style={{ cursor: 'pointer' }} onClick={handlePrev} />
                        : <span className='h-full w-full'></span>

                }
                {
                    curLabelInd !== len - 1 ?
                        <Image src={RightArrow.src} height={35} width={35} alt="" style={{ cursor: 'pointer' }} onClick={handleNext} />
                        : null
                }
            </div>
        </div>
    )
}

export default VillaCarousel;