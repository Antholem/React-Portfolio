import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import FadeIn from '../../animations/FadeIn';

const Banner = () => {

    return (
        <FadeIn>
            <section
                id="about"
                className="w-full pt-10 pb-20 flex flex-col-reverse gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
            >
                <LeftBanner />
                <RightBanner />
            </section>
        </FadeIn>
    )
}

export default Banner;