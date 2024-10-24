import { useEffect, useMediaQuery } from 'react';
import ValorPage from "@/components/common/valor-page";
import {
    motion,
    useScroll,
    useTransform,
    AnimatePresence,
    useInView,
    useSpring,
    useMotionValue,
} from 'framer-motion';


export default function ValorTeam() {

    useEffect(() => {
        // ease-out duration-[.6s]
        const ballCon = document.querySelector('.ball-con');
        const balls = document.querySelectorAll('.ball-box');
        ballCon.onmousemove = e => animateCard(e);
        ballCon.onmouseleave = e => {
            balls.forEach(item => {
                const ball = item.children[1];
                ball.style.opacity = '0';
            })
        }
        function animateCard(e) {
            balls.forEach(item => {
                const ball = item.children[1];
                const { width, height } = ball.getBoundingClientRect();
                ball.style.opacity = '1';
                const rect = item.getBoundingClientRect();
                const x = (e.clientX - rect.left) - width / 2;
                const y = (e.clientY - rect.top) - height / 2;
                item.style.setProperty('--x', `${x}px`);
                item.style.setProperty('--y', `${y}px`);
                setTimeout(() => ball.style.transition = 'ease-out 0.3s',300);
            })
        }
    }, []);

    return (
        <div className='bg-white mt-[80px] py-[72px] px-[24px] md:!py-[36px]'>
            <div className="ml-[24.58%] yw:!ml-0">
                <div className="text-[#0c2821] text-6xl font-medium leading-[60px] md:!text-[44px] md:!leading-[52px]">Team</div>
                <div className="mt-[10px]"> <ValorPage num="05" /> </div>

                <div className="ball-con mt-[56px] grid grid-cols-3 gap-[24px] md:!mt-[24px] md:!flex md:flex-col">
                    {
                        Array.from(new Array(9)).map((item, idx) => (
                            <div key={idx} className={`ball-box max-w-[342px] h-[430px] rounded-[12px] bg-[#D9D9D9] relative overflow-hidden grayscale hover:grayscale-0 ease-out duration-300 md:!max-w-[100%] md:w-full md:!h-[468px]`}>
                                <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[90%] h-[76px] p-3 bg-[#f2f2f2] rounded-lg flex-col justify-center items-start inline-flex z-10 md:!h-[89px]">
                                    <div className="text-[#0c2821] text-xl font-medium font-['Neue Haas Grotesk Display Pro'] uppercase leading-7">Rocco</div>
                                    <div className="text-[#0c2821] text-base font-medium font-['Neue Haas Grotesk Display Pro'] leading-normal">Co-Founder & CEO</div>
                                </div>

                                <div className='ball w-[114px] h-[114px] rounded-[50%] bg-[#F3FD65] translate-x-[var(--x)] translate-y-[var(--y)] active:scale-[1.3] opacity-0 flex flex-col items-center justify-center cursor-pointer relative z-20'>
                                    <section>
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                                            <path d="M11.3002 5.0332L4.7002 11.6332" stroke="#0C2821" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.66699 5L11.3003 5.03267L11.3337 9.66667" stroke="#0C2821" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </section>
                                    <section>SEE ARTICLE</section>
                                </div>

                                <img className='absolute top-0 left-0 w-full h-full object-cover' src='https://s21.ax1x.com/2024/10/23/pAdIXh6.png' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}