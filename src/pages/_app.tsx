
export default function App({ Component, pageProps }){
  return <Component {...pageProps} />;
};



function FixedLayout({ children }: {children?: React.ReactNode}) {
  return (
    <div>
      <div>
         {children}
      </div>
    </div>
  );
}


