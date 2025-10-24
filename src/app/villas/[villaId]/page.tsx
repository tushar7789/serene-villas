'use client'

import React, { useState, createRef, RefObject } from 'react'
import { usePathname } from 'next/navigation';
import { Carousel } from "antd";
import { CarouselRef } from 'antd/es/carousel';
import Image from 'next/image';

import Button from '@/_components/button';
import ImageList from '@/utils/utils';
import Arrow from '@/_components/arrows';

const modeLeft: string = "left";

function VillaId() {
    const pathname = usePathname();
    const id = pathname.split("/")[2];
    const len = ImageList.length;

    const [curLabelInd, setCurLabelInd] = useState<number>(0);

    const carouselRef: RefObject<CarouselRef | null> = createRef<CarouselRef>();

    // function handleBeforeChange() {
    //     const len = ImageList.length;
    //     setCurLabelInd(curLabelInd => (curLabelInd + 1) % len);
    // }

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

    return (
        <>
            <div className='
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
                        left-[1055px]
                        top-[80px]
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
                        left-[675px]
                        top-[250px]
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
                                top-[250px]
                                z-20
                                ${curLabelInd !== 0 ? 'left-[1000px]' : 'left-[1030px]'}
                            `}
                            onClick={handleNext}
                        >
                            <Arrow mode="right" />
                        </span> :
                        null
                }
            </div >
            <div className='flex flex-row h-[460px] width-[820px] items-center justify-between  mx-[50px] backdrop-brightness-30'>
                <div className='
                            flex 
                            flex-col
                            items-start 
                            justify-between
                            w-[640px]  
                            h-[400px]
                            text-white 
                            ml-[30px]
                            border-2 
                            border-red-500
                    '>
                    <span className='text-[100px]'>
                        Villa #{id}
                    </span>
                    <Button to="/" type="secondary">Book</Button>
                </div>
                <Carousel
                    infinite={false}
                    className='
                        h-[400px] 
                        w-[400px]
                        mr-[30px]
                    '
                    // beforeChange={handleBeforeChange}
                    ref={carouselRef}
                >
                    {
                        ImageList.map((img, ind) => {
                            return (
                                <div key={ind}>
                                    <Image
                                        src={img[0]}
                                        alt={img[1].toString()}
                                    />
                                </div>
                            );
                        })
                    }
                </Carousel>

            </div>
        </>
    )
}

export default VillaId;
