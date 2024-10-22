'use client';
import { useEffect,useRef } from 'react';
import { useInView } from "framer-motion";
import ValorPage from "@/components/common/valor-page";
export default function ValorPortfolio() {
    const refPortf = useRef(null);
    const refPortfView = useInView(refPortf, { margin: "0px 0px -100px 0px" });

    useEffect(() => {
        refPortf.current.id = refPortfView && 'valor-portf-active'
    }, [refPortfView]);

    return (
        <>
            <div ref={refPortf} className='valor-portf bg-white mt-[80px] rounded-[12px] pt-[72px]'>
                <nav className='text-left max-w-[684px] mx-auto'>
                    <div className='text-[60px] font-medium leading-[60px] text-[#0C2821]'>Portfolio</div>
                    <div className='text-[32px] font-[400] leading-[40px] text-[#0C2821] mt-[25px]'>Valor works on projects with measurable carbon removal potential and tangible co-benefits for local communities. We prioritize nature-based carbon removal projects, such as reforestation and regenerative agriculture, as well as certain avoided-emission projects in the waste and energy efficiency sectors.
                    </div>
                </nav>
                <div className="mt-[10px]"> <ValorPage num="04" /> </div>

                <div className='valor-port-lunbo'>
                    
                </div>
            </div>
        </>
    )
}