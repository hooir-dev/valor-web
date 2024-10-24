import { WordFadeIn } from '@/components/common/valor-fadein';
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ValorFirst() {
    const ref1 = useRef(null);
    const ref1View = useInView(ref1, { margin: "0px 0px -150px 0px" });

    useEffect(() => {
        setTimeout(() => ref1.current.id = 'valor-first-active', 500)
    }, [ref1]);

    return (
        <>
            <div className="valor-first relative min-h-[100vh] md:min-h-min md:h-[542px] overflow-y-hidden md:px-[16px]">
                <img ref={ref1} className="blur-[12px] ease-out duration-[1s] absolute -bottom-[67px] left-0 w-full object-cover h-[436px] fa:h-auto md:h-[192px] md:bottom-0" src="/img/valor-first-banner.png" />
                {/* whitespace-nowrap */}
                {/* <div className="max-w-[680px] mx-auto pt-[120px] md:pt-[80px] sc:!pt-[60px] box-border fa:max-w-[47%] md:max-w-[100%]"> */}
                <div className="max-w-[680px] mx-auto pt-[120px] md:pt-[80px] sc:!pt-[60px] box-border md:max-w-[100%]">
                    <nav className="">
                        <WordFadeIn delay={0.25} words="Your Partner for Unlocking Climate Finance" className="!text-[#0C2821] text-[60px] font-medium leading-[60px] md:!leading-[52px] md:!text-[44px] !text-left" />
                    </nav>
                    <nav className="mt-[16px]">
                        <WordFadeIn delay={0.1} words="Democratizing access to the global carbon markets,leveraging technology and deep local market knowledge." className="!text-[#0C2821] text-[24px] font-normal leading-[32px] !text-left md:!text-[16px] md:!leading-[24px]" />
                    </nav>
                    <nav className="mt-[24px] sc:mt-[5px] float-right flex items-center">
                        <section className="mr-[16px] text-[#0C2821] text-[16px] font-normal">EXPLORE</section>
                        <section className="w-[24px] h-[36px] rounded-[17px] bg-[#F3FD65] flex justify-center items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className='valor-first-svg'>
                                <path d="M7.99984 12.6666V3.33325" stroke="#0C2821" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.334 9.33252L8.00002 12.6665L4.66602 9.33252" stroke="#0C2821" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </section>
                    </nav>
                </div>
            </div>
        </>
    )
}