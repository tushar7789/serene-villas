'use client'

import React, { useState, createRef, RefObject } from 'react'
import { Carousel } from "antd";
import { CarouselRef } from 'antd/es/carousel';
import Image from 'next/image';

import { ImageList } from '../utils/data/imageDirectory';
import LeftArrow from '../../public/static_images/left-arrow.png'
import RightArrow from "../../public/static_images/right-arrow.png"
import Cross from "../../public/static_images/cross.png"
import { OverlayPropsInterface } from '../interfaces/component_interfaces';

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
            callbackSetter();
        }
    }

    return (
        <div className='z-30 absolute h-screen w-screen bg-black/70 text-[50px] flex flex-col items-center justify-center'>
            <div className='z-40 relative top-13.75 h-12.5 w-180 px-5 flex items-center justify-end'>
                <Image src={Cross.src} height={40} width={40} alt="" style={{ cursor: 'pointer' }} onClick={handleOverlayClose} />
            </div>
            <Carousel
                infinite={false}
                className='
                        h-105 
                        w-180
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
                                    src={img[1]}
                                    alt={img[0].toString()}
                                />
                            </div>
                        );
                    })
                }
            </Carousel>
            <div className='z-40 relative bottom-16.25 h-12.5 w-180 px-6.5 flex items-center justify-between'>
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