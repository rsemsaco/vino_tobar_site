'use client';
import { useEffect, useState } from 'react';
export function Menu() {
 const [open,setOpen]=useState(false);
 return <><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>Menu {open?'−':'+'}</button><nav id="navigation" className={open?'open':''} aria-label="Navegação principal" onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();}}} onClick={()=>setOpen(false)}><a href="#experiencia">A experiência</a><a href="#catalogo">Nosso catálogo</a><a href="#visite">Como chegar</a><a className="nav-contact" href="#contato">Fale com a casa <span aria-hidden="true">↗</span></a></nav></>;
}
export function Measurements() {
 useEffect(()=>{
  const emit=(name:string)=>window.dispatchEvent(new CustomEvent('vino:interest',{detail:{event:name}}));
  const click=(e:MouseEvent)=>{const target=(e.target as Element).closest<HTMLElement>('[data-event]');if(target?.dataset.event)emit(target.dataset.event);};
  document.addEventListener('click',click);
  const section=document.getElementById('experiencia');
  const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){emit('view_experience');observer.disconnect();}},{threshold:.3});
  if(section)observer.observe(section);
  return ()=>{document.removeEventListener('click',click);observer.disconnect();};
 },[]);return null;
}
