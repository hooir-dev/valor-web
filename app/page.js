import './components/business.scss';
import ValorFirst from "./components/business/valor-first";
import ValorMission from './components/business/valor-mission';
import ValorNav3d from './components/business/valor-nav3d';
export default function Page() {
	return (
		<>
			<div>
				<ValorFirst />
				<div className='min-h-[800px] bg-white px-[24px] pt-[152px] text-center'>
					<ValorMission />
					<ValorNav3d />
				</div>
			</div>
		</>
	)
}