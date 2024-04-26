// import React from 'react'


// export default function HomeCarousel() {
//   return (
//     <div>
      
//     </div>
//   )
// }

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import David from './CarouseIMG/David';
import Mother from './CarouseIMG/Mother';
import Watch from './CarouseIMG/Watch';

const items = [
    <div className="item" data-value="1"><a href="/mothersdaygiftguide"><Mother/></a></div>,
    <div className="item" data-value="2"><a href="/david"><David/></a></div>,
    <div className="item" data-value="3"><a href="/"><Watch/></a></div>,

];

const renderSlideInfo = ({ item, itemsCount }) => {
    return `${item}\\${itemsCount}`;
};

const renderDotsItem = ({ isActive }) => {
    return isActive ? 'x' : 'o';
};

const renderPrevButton = ({ isDisabled }) => {
    return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>&lt;</span>;
};

const renderNextButton = ({ isDisabled }) => {
    return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>&gt;</span>;
};

const renderPlayPauseButton = ({ isPlaying }) => {
    return isPlaying ? 'PAUSE' : 'PLAY';
};

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        autoPlay
        items={items}
        infinite
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={1000}

        // renderSlideInfo={renderSlideInfo}
        // renderDotsItem={renderDotsItem}
        // renderPrevButton={renderPrevButton}
        // renderNextButton={renderNextButton}
        disableButtonsControls
disableDotsControls

    />
);

export default Carousel;