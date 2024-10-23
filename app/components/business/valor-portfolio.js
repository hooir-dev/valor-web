'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from "framer-motion";
import ValorPage from "@/components/common/valor-page";
export default function ValorPortfolio() {
    const refPortf = useRef(null);
    const refPortfView = useInView(refPortf, { margin: "0px 0px -110px 0px" });

    useEffect(() => {
        refPortf.current.id = refPortfView && 'valor-portf-active';
        handlDomPre();
    }, [refPortfView]);

    let dataLength = 4;
    let scrollIdx = 1;
    let navWidth = 705;
    let scrollDom = document.querySelector('.valor-portf-scroll');

    const goToPrevSlide = () => {
        if (scrollIdx <= 1) return;
        scrollIdx -= 1;
        const totletra = (scrollIdx * navWidth) - navWidth;
        scrollDom.children[0].style['transform'] = `translateX(-${totletra}px)`;
        handlDomPre();
    };

    const goToNextSlide = () => {
        if (scrollIdx >= 4) return;
        scrollDom.children[0].style['transform'] = `translateX(-${scrollIdx * navWidth}px)`;
        scrollIdx += 1;
        handlDomPre();
    };

    const handlDomPre = () => {
        const pres = (scrollIdx / dataLength) * 100;
        const scopre = document.querySelector('.valor-scopre');
        scopre.style.width = `${pres}%`
    }

    return (
        <>
            <div className='px-[24px]'>
                <div ref={refPortf} className='valor-portf bg-white mt-[80px] rounded-[12px] pt-[72px] pl-[24.58%] pb-[72px] yq:!pl-[24px] md:!pt-[36px] md:!pb-[40px] md:pr-[24px]'>
                    <nav className='text-left max-w-[684px]'>
                        <div className='text-[60px] font-medium leading-[60px] text-[#0C2821] md:!text-[44px] md:!leading-[52px]'>Portfolio</div>
                        <div className='text-[32px] font-[400] leading-[40px] text-[#0C2821] mt-[25px] md:!text-[24px] md:!eading-[32px]'>Valor works on projects with measurable carbon removal potential and tangible co-benefits for local communities. We prioritize nature-based carbon removal projects, such as reforestation and regenerative agriculture, as well as certain avoided-emission projects in the waste and energy efficiency sectors.
                        </div>
                    </nav>
                    <div className="mt-[10px]"> <ValorPage num="04" /> </div>

                    <div className='valor-port-lunbo mt-[16px] overflow-hidden md:hidden'>
                        <div className='flex cursor-pointer'>
                            <section className='w-[48px] h-[48px] group rounded-[50%]' onClick={goToPrevSlide}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <path className='group-hover:scale-[1.06] ease-out duration-300' d="M23.5 18L17.5 24M17.5 24L23.5 30M17.5 24H29.5" stroke="black" />
                                    <circle cx="24" cy="24" r="23.25" stroke="#D9D9D9" stroke-width="1.5" />
                                </svg>
                            </section>
                            <section className='w-[48px] h-[48px] group ml-[15px]' onClick={goToNextSlide}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <path className='group-hover:scale-[1.06] ease-out duration-300' d="M23.5 18L29.5 24M29.5 24L23.5 30M29.5 24H17.5" stroke="black" />
                                    <circle cx="24" cy="24" r="23.25" stroke="#D9D9D9" stroke-width="1.5" />
                                </svg>
                            </section>
                        </div>
                        <div className='mt-[16px] overflow-x-none valor-portf-scroll'>
                            <div className='flex transition-all !duration-[.6s]'>
                                {
                                    Array.from(new Array(4)).map((ele, idx) => (
                                        <div key={idx + 'iof'} className="w-[683px] min-w-[683px] h-[368px] p-6 bg-[#f2f2f2] rounded-xl justify-start items-center gap-6 inline-flex cursor-pointer group hover:bg-[#F3FD65] ease-in-out duration-300 mr-[24px]">
                                            <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex">
                                                <div className="self-stretch h-52 flex-col justify-start items-start gap-6 flex">
                                                    <div className="px-3 bg-white rounded-[32px] flex-col justify-center items-center gap-2 flex">
                                                        <div className="text-[#0c2821] text-base font-medium font-['Neue Haas Grotesk Display Pro'] leading-normal">0{idx + 1}</div>
                                                    </div>
                                                    <div className="self-stretch h-40 flex-col justify-start items-start gap-2 flex">
                                                        <div className="text-[#0c2821] text-2xl font-medium font-['Neue Haas Grotesk Display Pro'] capitalize leading-loose">Project Summit</div>
                                                        <div className="self-stretch text-[#0c2821] text-base font-medium font-['Neue Haas Grotesk Display Pro'] leading-normal">Valor is spearheading a 25,000 hectare forestation and sustainable orchard farming project in Central Asia. The project will plant a mix of conifers and harvest-bearing trees, yielding high-quality carbon removal credits and sustainable fruit and nut harvests.</div>
                                                    </div>
                                                </div>
                                                <div className="self-stretch justify-end items-center gap-2 inline-flex">
                                                    <div className="opacity-0 text-[#0c2821] text-sm font-semibold font-['Neue Haas Grotesk Display Pro'] uppercase leading-[18px] group-hover:opacity-100 ease-in-out duration-300">See details</div>
                                                    <div className="w-4 h-4 justify-center items-center flex">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M11.3002 4.69971L4.7002 11.2997" stroke="#0C2821" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M6.66699 4.6665L11.3003 4.69917L11.3337 9.33317" stroke="#0C2821" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-60 h-80 bg-black/20 rounded-lg">
                                                <img className='w-full h-full' src="/img/valor-portfolio-bg.png" />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='mt-[32px] max-w-[683px] w-full h-[2px] bg-[#E5E5E5]'>
                            <div className='valor-scopre h-full w-0 bg-[#0C2821] ease-linear duration-[.6s]'></div>
                        </div>
                    </div>

                    <div className="w-full mt-[40px] min-h-[783px] p-4 bg-[#f3f7f7] rounded-xl flex-col justify-start items-center gap-4 inline-flex hidden md:block">
                        <div className="self-stretch h-[445px] bg-black/20 rounded-lg overflow-hidden">
                            <img className='w-full h-full object-cover' src="/img/valor-portfolio-bg.png" />
                        </div>
                        <div className="self-stretch min-h-[290px] flex-col justify-start items-start gap-10 flex">
                            <div className="self-stretch min-h-[232px] flex-col justify-start items-start gap-6 flex">
                                <div className="px-3 mt-[16px] bg-white rounded-[32px] flex-col justify-center items-center gap-2 flex">
                                    <div className="text-[#0c2821] text-base font-medium font-['Neue Haas Grotesk Display Pro'] leading-normal">01</div>
                                </div>
                                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                                    <div className="text-[#0c2821] text-2xl font-medium font-['Neue Haas Grotesk Display Pro'] capitalize leading-loose">Project Summit</div>
                                    <div className="self-stretch text-[#0c2821] text-base font-medium font-['Neue Haas Grotesk Display Pro'] leading-normal">Valor is spearheading a 25,000 hectare forestation and sustainable orchard farming project in Central Asia. The project will plant a mix of conifers and harvest-bearing trees, yielding high-quality carbon removal credits and sustainable fruit and nut harvests.</div>
                                </div>
                            </div>
                            <div className="self-stretch justify-end items-center gap-2 inline-flex">
                                <div className="text-[#0c2821] text-sm font-semibold font-['Neue Haas Grotesk Display Pro'] uppercase leading-[18px]">See details</div>
                                <div className="w-4 h-4 justify-center items-center flex">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M11.3002 4.7002L4.7002 11.3002" stroke="#0C2821" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.66699 4.66699L11.3003 4.69966L11.3337 9.33366" stroke="#0C2821" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}