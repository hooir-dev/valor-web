'use client';
import { useInView } from "framer-motion";
import { useEffect, useRef } from 'react';
import { MouseParallax } from "react-just-parallax";
import ValorPage from "@/components/common/valor-page";
export default function ValorApproach() {

    const refImgBox = useRef(null);
    const refTitle = useRef(null);
    const refTitleView = useInView(refTitle, { margin: "0px 0px -100px 0px" });

    useEffect(() => {
        refTitle.current.id = refTitleView && 'valor-approach-active'
    }, [refTitleView]);

    const refNavbox = useRef(null);
    const refNavboxView = useInView(refNavbox, { margin: "0px 0px -100px 0px" });

    useEffect(() => {
        refNavbox.current.id = refNavboxView && 'valor-app-navbox-active'
    }, [refNavboxView]);


    const navList = [
        {
            title: 'Advisory',
            des: 'Carbon markets are complex - the scale and breadth of opportunities can be hidden. Valor will be there at the very beginning to advise you. We will conduct a review of your overall situation and assess potential projects you could pursue.'
        },
        {
            title: 'Project Design',
            des: 'Aligning carbon projects with international standards can be challenging. Valor will design your project from the ground up. Our data-driven approach ensures high-quality design, which is critical for achieving real impact and higher credit prices.'
        },
        {
            title: 'Implementation',
            des: 'Project owners can struggle with the operational hurdles to successful implementation. Valor will directly support you throughout this process. Our software will ease project management, and where necessary we will station teams locally to assist.'
        },
        {
            title: 'Transaction',
            des: 'Finding and securing buyers for carbon credits can be difficult in this still very inefficient market. Valor will be there to help structure and advise on the sale of your carbon credits, structuring the transaction to suit your needs.'
        },
    ]

    return (
        <>
            <div className='px-[24px]'>
                <nav ref={refTitle} className='text-[#0C2821] text-[60px] font-medium leading-[60px] text-left ml-[24.58%] mt-[72px] -tracking-[16px] opacity-0 ease-out duration-[.6s] md:pt-[32px] md:!ml-0 md:!text-[44px] md:!leading-[52px]'>
                    Our Approach
                </nav>
                <div className="mt-[10px]"> <ValorPage num="03" /> </div>
                <div ref={refImgBox} className='mt-[56px] h-[360px] overflow-hidden rounded-[12px] bg-[#ede8e1] cursor-all-scroll md:!h-[160px]' id='valor-approach-img'>
                    {/* <MouseParallax parallaxContainerRef={refImgBox} shouldResetPosition lerpEase={0.03} strength={0.12}> */}
                    <MouseParallax parallaxContainerRef={refImgBox} shouldResetPosition lerpEase={0.02} strength={0.09}>
                        <img className='max-w-[1392px] w-full h-full object-cover' src='/img/valor-approach-bg.png' />
                    </MouseParallax>
                </div>
                <div className="mt-[48px] flex valor-app-navbox nj:flex-col nj:border-l nj:border-[#E1E6E6] nj:!mt-[24px] overflow-hidden" ref={refNavbox}>
                    {
                        navList.map((item, idx) => (
                            <nav key={idx + 'exc'} className="flex-1 px-[24px] border-l border-[#E1E6E6] nj:mt-[48px] nj:!border-none">
                                <div className="h-6 px-3 bg-[#f3fd65] rounded-[32px] flex-col justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-[#0c2821] text-base font-normal font-['Neue Haas Grotesk Display Pro'] leading-normal">0{idx + 1}</div>
                                </div>
                                <div className="mt-[64px] text-[#0C2821] text-[24px] leading-[32px] font-medium nj:!mt-[24px]">{item.title}</div>
                                <div className="mt-[8px] text-[#0C2821] text-[16px] leading-[24px] font-medium">
                                    {item.des}
                                </div>
                            </nav>
                        ))
                    }
                </div>
            </div>
        </>
    )
}