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

/** Progressive enhancement: every element is visible before JS and on failure. */
export function ArtMotion() {
 useEffect(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window)) return;
  const elements = [...document.querySelectorAll<HTMLElement>('[data-reveal], .brush')];
  const observer = new IntersectionObserver(entries => {
   for (const entry of entries) if (entry.isIntersecting) {
    entry.target.classList.add('has-entered');
    observer.unobserve(entry.target);
   }
  }, { threshold: 0.08 });
  const sync = () => {
   observer.disconnect();
   if (preference.matches) elements.forEach(el => el.classList.remove('has-entered'));
   else elements.forEach(el => { if (!el.classList.contains('has-entered')) observer.observe(el); });
  };
  sync(); preference.addEventListener('change', sync);
  return () => { observer.disconnect(); preference.removeEventListener('change', sync); };
 }, []);
 return null;
}
