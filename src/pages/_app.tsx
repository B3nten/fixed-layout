import '../styles/globals.css'

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
	return (
		<FixedLayout>
			<Component {...pageProps} />
		</FixedLayout>
	)
}

function FixedLayout({ children }: { children?: React.ReactNode }) {
	return (
		<div
			style={{
				width: '100%',
				height: '150vh',
				position: 'relative',
			}}>
			<div
				style={{
					position: 'sticky',
					width: '100%',
					height: '100vh',
					top: 0,
					overflow: 'hidden',
				}}>
				{children}
			</div>
		</div>
	)
}
