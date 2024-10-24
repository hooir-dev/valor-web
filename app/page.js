'use client';
import { useEffect } from 'react';
import './components/business.scss';
import ValorFirst from "./components/business/valor-first";
import ValorMission from './components/business/valor-mission';
import ValorNav3d from './components/business/valor-nav3d';
import ValorOurmiss from './components/business/valor-ourmiss';
import ValorApproach from './components/business/valor-approach';
import ValorPortfolio from './components/business/valor-portfolio';
import ValorTeam from './components/business/valor-team';
export default function Page() {
	useEffect(() => {
		const script = document.createElement('script');
		script.type = 'module';
		script.src = "/js/splineViewer.js";
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script); // 清理
		};
	}, []);

	return (
		<>
			<div>
				<ValorFirst />
				<div className='min-h-[800px] bg-white px-[24px] pt-[152px] md:!pt-[40px] text-center pb-[160px] nj:!pb-[40px]'>
					<ValorMission />
					<ValorNav3d />
					<ValorOurmiss />
				</div>
				<div className='min-h-[800px] bg-[#F3F7F7] pt-[80px] md:!pt-[0px] pb-[80px] md:!pb-[36px]'>
					<ValorApproach />
					<ValorPortfolio />
					<ValorTeam />
				</div>
			</div>
		</>
	)
}