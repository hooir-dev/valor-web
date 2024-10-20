'use client';
import { useEffect, useState } from 'react';

const menuList = [
    { name: 'Home', url: '' },
    { name: 'Mission', url: '' },
    { name: 'Our Approach', url: '' },
    { name: 'Team', url: '' },
    { name: 'News', url: '' },
]
export default function ValorHeader() {
    const [scrollMenu, setScrollMenu] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const onOpenMenuClick = () => {
        setOpenMenu(!openMenu);
    }

    const handleScroll = () => {
        window.scrollY > 10 ? setScrollMenu(true) : setScrollMenu(false);
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <>
            <div className={`w-full h-[46px] px-[24px] flex justify-between items-center fixed top-0 left-0 z-[999] header-bg ${scrollMenu && 'header-bg-active'}`}>

                <div className={`w-[67px] flex items-center valor-header-left ${openMenu && 'valor-header-left-active'}`}>
                    <nav className='w-[27px] h-[24px]'>
                        <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.62769 0.399269C8.51581 0.155931 8.27249 0 8.00467 0H0.686519C0.186524 0 -0.145365 0.51788 0.0634993 0.97216L10.4674 23.6007C10.5793 23.8441 10.8226 24 11.0905 24H18.4086C18.9086 24 19.2405 23.4821 19.0316 23.0278L16.8163 18.2096C16.6075 17.7553 16.9394 17.2374 17.4394 17.2374H20.9785C21.2736 17.2374 21.5357 17.0486 21.629 16.7686L26.6891 1.58827C26.8371 1.14425 26.5066 0.685714 26.0386 0.685714H18.6566C18.3614 0.685714 18.0994 0.874581 18.0061 1.15459L14.7591 10.8955C14.5625 11.4854 13.7453 11.53 13.4855 10.9651L8.62769 0.399269Z" fill="#0C2821" />
                        </svg>
                    </nav>
                    <nav className='text-[#0C2821] text-[16.5px] ml-[3.4px] font-semibold'>Valor</nav>
                </div>

                <div className={`valor-header-right ${openMenu && 'valor-header-right-active'}`} onClick={onOpenMenuClick}>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>

                <div className={`ease-in duration-300 delay-75 absolute -top-[100vh] opacity-90 left-0 w-full h-[100vh] bg-[#0C2821] ${openMenu && '!top-0 !opacity-100'}`}>
                    <nav className='mt-[111px] yl:mt-[86px] px-[24px] flex justify-between yl:flex-col'>
                        <nav>
                            <div class="h-[632px] py-6 flex-col justify-start items-start gap-4 inline-flex whitespace-nowrap yl:h-[272px] yl:!gap-2">
                                {
                                    menuList.map((x, i) => (
                                        <div class="w-[506px] justify-start items-center gap-2 inline-flex group cursor-pointer">
                                            <div class="w-24 h-24 yl:hidden ease-in-out duration-300 justify-center items-center flex -ml-[110px] opacity-0 group-hover:ml-0 group-hover:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                                                    <path d="M76 48H20" stroke="#F3FD65" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M56 68L76 48" stroke="#F3FD65" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M56 28L76 48" stroke="#F3FD65" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div class="text-[#fff] ease-in-out duration-300 group-hover:text-[#f3fd65] text-8xl font-normal font-['Neue Haas Grotesk Display Pro'] leading-[104px] yl:!text-[40px] yl:!leading-[48px]">{x.name}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </nav>
                        <nav className='yl:mt-[80px]'>
                            <div class="w-[356px] px-10 yl:!px-[24px] border-l border-white/10 flex-col justify-between items-start inline-flex">
                                <div class="self-stretch h-[264px] flex-col justify-start items-start gap-6 flex">
                                    <div class="self-stretch opacity-30 text-white text-xl font-medium font-['Neue Haas Grotesk Display Pro']">Get in touch</div>
                                    <div class="flex-col justify-start items-start gap-6 flex">
                                        <div class="justify-start items-start gap-4 inline-flex menu-hover">
                                            <div class="w-6 h-6 justify-center items-center flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.131 13.869C8.96102 12.699 8.07902 11.389 7.49302 10.06C7.37002 9.77897 7.44202 9.44997 7.65902 9.23297L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.611L17.792 15.438C17.206 14.852 16.256 14.852 15.671 15.438L14.768 16.342C14.551 16.559 14.222 16.632 13.941 16.508C12.612 15.921 11.301 15.038 10.131 13.869Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M15 3V9H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M21 3L15 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div class="text-white text-xl font-medium font-['Neue Haas Grotesk Display Pro']">Phone</div>
                                        </div>
                                        <div class="justify-start items-start gap-4 inline-flex menu-hover">
                                            <div class="w-6 h-6 justify-center items-center flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect x="3" y="4.5" width="18" height="15" rx="4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M7 8.98376L11.2046 10.817C11.7124 11.0384 12.2893 11.0393 12.7978 10.8194L17 9.00238" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div class="text-white text-xl font-medium font-['Neue Haas Grotesk Display Pro']">Email</div>
                                        </div>
                                        <div class="justify-start items-start gap-4 inline-flex menu-hover">
                                            <div class="w-6 h-6 justify-center items-center flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8.12012 11.1V16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M11.7192 16.5V13.35C11.7192 12.107 12.7262 11.1 13.9692 11.1V11.1C15.2122 11.1 16.2192 12.107 16.2192 13.35V16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8.11814 7.83799C7.99414 7.83799 7.89314 7.93899 7.89414 8.06299C7.89414 8.18699 7.99514 8.28799 8.11914 8.28799C8.24314 8.28799 8.34414 8.18699 8.34414 8.06299C8.34414 7.93799 8.24314 7.83799 8.11814 7.83799" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div class="text-white text-xl font-medium font-['Neue Haas Grotesk Display Pro']">Linkedin</div>
                                        </div>
                                        <div class="justify-start items-start gap-4 inline-flex menu-hover">
                                            <div class="w-6 h-6 relative">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M2 2H7L22 21.5H17L2 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M20 2L13.5 9.61429M2.5 22.5L10.5 13.1286" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div class="text-white text-xl font-medium font-['Neue Haas Grotesk Display Pro']">X</div>
                                        </div>
                                        <div class="justify-start items-start gap-4 inline-flex menu-hover">
                                            <div class="w-6 h-6 justify-center items-center flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div class="text-white text-xl font-medium font-['Neue Haas Grotesk Display Pro']">location</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-white text-xl font-medium font-['Neue Haas Grotesk Display Pro'] margin-calc">© 2024  Valor</div>
                            </div>
                        </nav>
                    </nav>
                </div>
            </div>
        </>
    )
}