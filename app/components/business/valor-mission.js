import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function ValorMission() {
    const ref1 = useRef(null);
    const ref1View = useInView(ref1, { margin: "0px 0px -150px 0px" });

    useEffect(() => {
        ref1.current.id = ref1View && 'valor-mission-active';
    }, [ref1View]);

    return (
        <>
            {/* <div className="flex justify-center"> */}
            <div className="flex pl-[24.58%] md:!pl-0">
                <div ref={ref1} className="max-w-[680px] text-left ease-out duration-[.6s] opacity-0 scale-95">
                    <nav className="text-[60px] text-[#0C2821] font-medium leading-[60px] md:!text-[44px] md:!leading-[52px]">Mission</nav>
                    <nav className="mt-[25px] text-[32px] text-[#0C2821] font-normal leading-[40px] md:!mt-[16px] ">Fragmented processes and limited access are holding back the carbon markets, and in turn the fight against climate change.</nav>
                    <nav className="mt-[24px] text-[32px] text-[#0C2821] font-normal leading-[40px] md:!mt-[10px]">We will strengthen the carbon markets by sourcing and developing carbon projects with greater efficiency, integrity, and reach.</nav>
                </div>
            </div>
        </>
    )
}