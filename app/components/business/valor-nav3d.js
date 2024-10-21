'use client';
import { useEffect, useState } from 'react';

import ValorPage from "@/components/common/valor-page";
export default function ValorNav3d({ }) {

    return (
        <>
            <div className="mt-[24px]">
                <div className="md:hidden"> <ValorPage num="02" /> </div>
                <div className="box-border pt-[20px] md:!pt-0 flex justify-center items-center">
                    <div className="w-full h-[646px] flex justify-center items-center md:!h-[352px] pointer-events-none">
                        {/* 3D */}
                        <spline-viewer url="https://prod.spline.design/jrS8zR3iH8fevF8V/scene.splinecode"></spline-viewer>
                    </div>
                </div>
            </div>
        </>
    )
}