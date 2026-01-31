'use client'

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Divider from '@mui/material/Divider';

import Button from '../../../components/button';
import { AmmenitiesComp, TitleComp } from '../../../components/villaSpecsComp';
import Footer from '../../../components/footer';
import BackNav from '../../../components/backNav';

import CabinImg from "../../../public/static_images/balcony-i.png"
import AlbumIcon from "../../../public/static_images/album-icon.png"
import useOverlayFlagsStore from '../../../store/overlayFlagsStore';

function VillaId() {
    const villaDetailsString = useSearchParams().get('villaDetails');
    const villaDetails = villaDetailsString !== null ? JSON.parse(villaDetailsString) : null;

    const setAlbumOverlayFlag = useOverlayFlagsStore((state) => state.setAlbumOverlayFlag);

    const handleAlbumOverlayOpen = () => {
        setAlbumOverlayFlag();
    }

    return (
        <>
            <div className='h-min w-screen flex flex-col items-center justify-start'>
                <div className='h-20 w-250 flex justify-start items-center'>
                    <BackNav prevUrl='/villas' />
                </div>
                <div className='h-110 w-250 flex flex-row items-center justify-between bg-linear-to-r from-gray-100/60 to-gray-200/40 rounded-xl shadow-2xl'>
                    <div className='h-full w-105 flex flex-col items-start justify-between'>
                        <Image src={CabinImg.src} height={350} width={420} alt="" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                        <div className='h-56.25 w-full flex flex-col justify-between items-center border-r-0 border-r-black'>
                            <div className='h-35 w-full px-5 py-2 text-[14px] '>
                                <TitleComp name={villaDetails.name} area={villaDetails.area} rating={villaDetails.rating.toLocaleString()} titleType='2' />
                                <AmmenitiesComp ammenities={villaDetails.ammenities.ammenities} ammenitiesType='2' />
                            </div>
                            <Divider variant="middle" flexItem />
                            <p className='h-10 w-full px-5 flex justify-between text-[20px]'>
                                <span>Total Price</span>
                                <span>Rs. {villaDetails.cost}</span>
                            </p>
                        </div>
                    </div>
                    <Image src={AlbumIcon.src} alt="" height={30} width={30} style={{ position: 'relative', zIndex: '10', bottom: '195px', right: '65px', cursor: 'pointer' }} onClick={handleAlbumOverlayOpen} />
                    <div className='h-full w-125 flex flex-col items-start justify-between '>
                        <div className='h-70 w-full flex flex-col justify-start items-center'>
                            <span className='h-15 w-full px-4 flex items-center text-[30px]'>
                                Description
                            </span>
                            <span className='h-40 w-full px-4 flex items-center text-justify overflow-x-clip'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga officia cupiditate nam ex quam nulla, ad soluta optio distinctio asperiores, odio praesentium eveniet iste doloremque deleniti expedita magni assumenda reiciendis.
                            </span>
                        </div>
                        <div className='h-40 w-full px-5 flex flex-col justify-evenly items-center'>
                            <Button to="/" type="boundary-button">Add to Wishlist</Button>
                            <Button to="/" type="boundary-button">Book</Button>
                        </div>
                    </div>
                </div>
                <RecommendedComp />
            </div>
            <Footer />
        </>
    )
}

const RecommendedComp = () => {
    return (
        <div className='h-200 w-250 my-5 flex flex-col justify-start items-center bg-red-400'>
            <div className='h-20 w-full px-4 flex justify-start items-center bg-white font-bold text-emerald-600 text-[30px]'>
                Similar Villas
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim fuga tempora expedita eaque, quisquam corporis blanditiis, ab animi atque in vero dolore nam reprehenderit harum distinctio mollitia provident quidem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim fuga tempora expedita eaque, quisquam corporis blanditiis, ab animi atque in vero dolore nam reprehenderit harum distinctio mollitia provident quidem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim fuga tempora expedita eaque, quisquam corporis blanditiis, ab animi atque in vero dolore nam reprehenderit harum distinctio mollitia provident quidem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim fuga tempora expedita eaque, quisquam corporis blanditiis, ab animi atque in vero dolore nam reprehenderit harum distinctio mollitia provident quidem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim fuga tempora expedita eaque, quisquam corporis blanditiis, ab animi atque in vero dolore nam reprehenderit harum distinctio mollitia provident quidem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim fuga tempora expedita eaque, quisquam corporis blanditiis, ab animi atque in vero dolore nam reprehenderit harum distinctio mollitia provident quidem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim fuga tempora expedita eaque, quisquam corporis blanditiis, ab animi atque in vero dolore nam reprehenderit harum distinctio mollitia provident quidem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim fuga tempora expedita eaque, quisquam corporis blanditiis, ab animi atque in vero dolore nam reprehenderit harum distinctio mollitia provident quidem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim fuga tempora expedita eaque, quisquam corporis blanditiis, ab animi atque in vero dolore nam reprehenderit harum distinctio mollitia provident quidem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim fuga tempora expedita eaque, quisquam corporis blanditiis, ab animi atque in vero dolore nam reprehenderit harum distinctio mollitia provident quidem!
        </div>
    )
}

export default VillaId;
