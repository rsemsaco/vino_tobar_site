import { SITE_URL, localPath } from '../lib/paths';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const serif=localFont({src:'../assets/fonts/CormorantGaramond.ttf',variable:'--serif',display:'swap'});
const sans=localFont({src:'../assets/fonts/DMSans.ttf',variable:'--sans',display:'swap'});
export const metadata:Metadata={title:'Degustação de vinhos na Aclimação | Vino Tobar',description:'Bons vinhos. Novos encontros. Conheça o Vino Tobar, empório de vinhos e experiências de degustação na Aclimação, São Paulo.',metadataBase: new URL(SITE_URL), alternates: { canonical: SITE_URL }, icons: { icon: [{ url: localPath('/images/Logo_Vino_Tobar_Artistica-360.webp'), type: 'image/webp' }] }, robots:{index:true,follow:true}, openGraph: { title: 'Bons vinhos. Novos encontros. | Vino Tobar', description: 'Vinhos · Degustações · Encontros na Aclimação.', url: SITE_URL, locale: 'pt_BR', type: 'website' }};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body className={`${serif.variable} ${sans.variable}`}><a className="skip" href="#conteudo">Pular para o conteúdo</a>{children}</body></html>}
