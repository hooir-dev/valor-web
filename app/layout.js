
import './globals.css';
import './common.scss';
import ValorHeader from "@/components/common/valor-header";
import ValorFooter from "@/components/common/valor-footer";

export default async function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='w-full'>
				<ValorHeader />
				<div className=''>
					{children}
				</div>
				<ValorFooter />
			</body>
		</html>
	);
}