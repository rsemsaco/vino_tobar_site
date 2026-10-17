import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const serif=localFont({src:'../assets/fonts/CormorantGaramond.ttf',variable:'--serif',display:'swap'});
const sans=localFont({src:'../assets/fonts/DMSans.ttf',variable:'--sans',display:'swap'});
export const metadata:Metadata={title:'Degustação de vinhos na Aclimação | Vino Tobar',description:'Bons vinhos. Novos encontros. Conheça o Vino Tobar, empório de vinhos e experiências de degustação na Aclimação, São Paulo.',robots:{index:false,follow:false}};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body className={`${serif.variable} ${sans.variable}`}><a className="skip" href="#conteudo">Pular para o conteúdo</a>{children}</body></html>}
