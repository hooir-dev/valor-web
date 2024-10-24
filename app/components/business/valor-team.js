import { useEffect, useState, useRef } from 'react';
import { useInView } from "framer-motion";
import ValorPage from "@/components/common/valor-page";

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
                setTimeout(() => ball.style.transition = 'ease-out 0.3s', 300);
            })
        }
    }, []);

    const refTeam = useRef(null);
    const refTeamView = useInView(refTeam, { margin: "0px 0px -110px 0px" });
    useEffect(() => {
        refTeam.current.id = refTeamView && 'valor-team-active';
    }, [refTeamView]);

    const [showOpen, setShowOpen] = useState(false);
    const onItemClick = (e) => {
        setShowOpen(!showOpen);
        // console.log(e,'e');

    }

    return (
        <div ref={refTeam} className='valor-team bg-white mt-[80px] py-[72px] px-[24px] md:!py-[36px]'>
            <div className="ml-[24.58%] yw:!ml-0">
                <div className="text-[#0c2821] text-6xl font-medium leading-[60px] md:!text-[44px] md:!leading-[52px]">Team</div>
                <div className="mt-[10px]"> <ValorPage num="05" /> </div>

                <div className="ball-con mt-[56px] grid grid-cols-3 gap-[24px] md:!mt-[24px] md:!flex md:flex-col">
                    {
                        Array.from(new Array(9)).map((item, idx) => (
                            <div className={`ball-box min-h-[430px] max-h-[900px] rounded-[12px] bg-[#D9D9D9] relative overflow-hidden grayscale hover:grayscale-0 ease-out duration-300 md:!max-w-[100%] md:w-full md:!h-[468px]`} onClick={() => onItemClick(item)}>
                                <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[90%] h-[76px] p-3 bg-[#f2f2f2] rounded-lg flex-col justify-center items-start inline-flex z-10 md:!h-[89px]">
                                    <div className="text-[#0c2821] text-xl font-medium font-['Neue Haas Grotesk Display Pro'] uppercase leading-7">Rocco</div>
                                    <div className="text-[#0c2821] text-base font-medium font-['Neue Haas Grotesk Display Pro'] leading-normal">Co-Founder & CEO</div>
                                </div>

                                <div className='ball w-[114px] h-[114px] rounded-[50%] bg-[#F3FD65] translate-x-[var(--x)] translate-y-[var(--y)] active:scale-[1.3] opacity-0 flex flex-col items-center justify-center cursor-pointer absolute z-20'>
                                    <section>
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                                            <path d="M11.3002 5.0332L4.7002 11.6332" stroke="#0C2821" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.66699 5L11.3003 5.03267L11.3337 9.66667" stroke="#0C2821" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </section>
                                    <section>SEE ARTICLE</section>
                                </div>

                                {/* <img className='absolute top-0 left-0 w-full h-full object-cover' src='https://s21.ax1x.com/2024/10/23/pAdIXh6.png' /> */}
                                <img className='w-full h-full object-cover' src='/img/vloar-prs.png' />
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* pc dialog */}
            <div className={`modal ${showOpen && 'dd:modal-open'} modal-middle`}>
                {/* w-[66.66%] */}
                <div className='max-w-[960px] wa:!max-w-[66.66%] w-full bg-white box-border rounded-[12px] px-[40px] pt-[24px] pb-[40px]' style={{ height: 'calc(100vh - 160px)' }}>
                    <div className='h-[32px] w-full cursor-pointer flex justify-end' onClick={() => setShowOpen(false)}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="15" stroke="#0C2821" stroke-width="2" />
                            <path d="M20 12L12 20M12 12L20 20" stroke="#0C2821" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div className='flex mt-[20px]' style={{ height: 'calc(100% - 40px)' }}>
                        <div className='flex-1 max-h-[95%] bg-[#C8C8C8]'>
                            <img className='w-full h-full object-cover' src='https://s21.ax1x.com/2024/10/23/pAdIXh6.png' />
                        </div>
                        <div className='flex-1 h-full ml-[40px] border-l border-[#F2F2F2] pl-[40px] overflow-auto'>
                            <div className='text-[#0C2821] text-[40px] leading-[48px] font-medium'>
                                Rocky
                            </div>
                            <div className='text-[#0C2821] text-[16px] leading-[24px] font-normal mt-[8px]'>
                                Co-Founder & CTO
                            </div>
                            <div className='text-[#0C2821] text-[20px] leading-[32px] font-normal mt-[24px] '>
                                Rocky co-founded Valor after seeing howmany technological advances in fields likeAl and language models were failing to bedeployed in the fight against climatechange.
                                {/* <br /> */}
                                <p className='my-[16px]'>
                                    With his rigorous background in quantitativemethods, and armed with his experience indeveloping Al solutions while at TitanML.Rocky began hunting for ways to bring toolsand innovation from academia and techindustry to the carbon markets.
                                </p>
                                {/* <br /> */}
                                Rocky holds a Master of Science inTheoretical Physics from lmperial CollegeLondon, and aMasterofAdvanced StudyinMathematics from the University ofCambridge.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mbile dialog */}
            <div className={`w-full h-[432px] px-[16px] pt-[24px] pb-[40px] bg-[#F3FD65] rounded-t-xl fixed -bottom-[100%] left-0 ease-out duration-[.4s] ${showOpen && 'md:!bottom-0'}`}>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <section className='text-[#0C2821] text-[24px] font-medium leading-[32px]'>
                        Name
                    </section>
                    <section onClick={() => setShowOpen(false)}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="19" stroke="#0C2821" stroke-width="2" />
                            <path d="M25 15L15 25M15 15L25 25" stroke="#0C2821" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </section>
                </div>
                <div className='mt-[16px] text-[#0C2821] text-[16px] font-medium leading-[24px] overflow-auto' style={{
                    height:'calc(100% - 40px)'
                }}>
                    Rocco co-founded Valor after experiencing firsthand the difficulties project owners face in accessing the carbon markets.
                    <br />
                    <br />
                    In his last role, Rocco worked on renewable energy infrastructure in emerging markets - struck by the bottlenecks, lack of transparency, and huge inefficiencies involved with bringing projects to market, he was inspired to do something about it.
                    <br />
                    <br />
                    Rocco holds a Bachelor of Arts in Philosophy, Politics, and Economics from the University of Oxford.
                </div>
            </div>
        </div>
    );
}