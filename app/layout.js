import './globals.css';
import './common.scss';
import ValorHeader from "@/components/common/valor-header";
import ValorFooter from "@/components/common/valor-footer";

export default async function RootLayout({ children }) {

	return (
		<html lang='en'>
			<head>
				<script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.23/build/spline-viewer.js"></script>

				{/* <script defer type="module" src="https://unpkg.com/@splinetool/viewer@1.9.26/build/spline-viewer.js"></script> */}
			</head>
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