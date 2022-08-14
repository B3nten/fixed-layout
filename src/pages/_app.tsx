import { useEffect, useLayoutEffect, useRef } from 'react';
import '../styles/globals.css'

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
	return (
		<FixedLayout>
			<Component {...pageProps} />
		</FixedLayout>
	)
}

function FixedLayout({ children }: { children?: React.ReactNode }) {

  const scrollContainer = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(()=>{
    function handler(){
      window.scrollTo(0,0)
    }
    window.addEventListener('scroll', debounce(handler,200))
    return ()=>window.removeEventListener('scroll', debounce(handler,200))
  },[])

	return (
		<div
      ref={scrollContainer}
			style={{
				width: '100%',
				height: '101vh',
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

function debounce(func:any, wait:any, immediate?: any) {
  //@ts-ignore
  var timeout;
  return function() {
  	var context = this, args = arguments;
    //@ts-ignore
  	clearTimeout(timeout);
  	timeout = setTimeout(function() {
  		timeout = null;
  		if (!immediate) func.apply(context, args);
  	}, wait);
  	if (immediate && !timeout) func.apply(context, args);
  };
}

const useIsomorphicLayoutEffect =

  typeof window !== 'undefined' ? useLayoutEffect : useEffect