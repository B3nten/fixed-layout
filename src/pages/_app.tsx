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
		// <div style={{ position: 'fixed', top: 0, right: 0, left: 0, bottom: 0 }}>
		// <div
		// 	style={{
		// 		width: '100%',
		// 		height: '150vh',
		// 		position: 'relative',
		// 	}}>
			// <div style={{ position: 'sticky', width: '100%', height: '100vh', top: 0, overflow: 'hidden' }}>
      <div>
				{children}
			</div>
		// </div>
		// </div>
	)
}
