import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Watch1, { Watch2, Watch3, Watch4 } from './LuxuryWatches';

const items = [
    <div className="item" data-value="1"><Watch1/></div>,
    <div className="item" data-value="2"><Watch2/></div>,
    <div className="item" data-value="3"><Watch3/></div>,
    <div className="item" data-value="4"><Watch4/></div>,

];

export default function WatchCarousel() {
    const carouselRef = useRef(null);

    const next = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const previous = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    return (
        <>
        <h1 className='luxury  text-center text-3xl mt-4'>Luxury Watches</h1>
        <div className='mx-auto max-w-7xl flex relative h-1/3 items-center gap-2 mt-5'>
            <button className='absolute left-0 cursor-pointer' onClick={previous}><ArrowBackIosIcon/></button>
            <AliceCarousel
                animationType="fadeout"
                animationDuration={1000}
                autoPlayStrategy="none"
                autoPlayInterval={3000}
                disableButtonsControls
                disableDotsControls

                infinite
                autoPlay
                items={items}
                mouseTracking
                ref={carouselRef}
            
            />
            <button className='absolute right-0 cursor-pointer' onClick={next}><ArrowForwardIosIcon/></button>
        </div>
        </>

    );
}
