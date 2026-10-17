export function whatsapp(message: string) { return `https://wa.me/5511988045646?text=${encodeURIComponent(message)}`; }
export const experienceInquiry = whatsapp('Olá! Vim pelo site e gostaria de saber sobre as próximas degustações do Vino Tobar.');
export function upcoming<T extends { start: string; end: string; validado: boolean }>(events: T[], now = new Date()) {
 return events.filter(e => e.validado && /(?:Z|[+-]\d{2}:\d{2})$/.test(e.start) && /(?:Z|[+-]\d{2}:\d{2})$/.test(e.end) && Date.parse(e.start) > now.getTime() && Date.parse(e.end) > Date.parse(e.start)).sort((a,b)=>Date.parse(a.start)-Date.parse(b.start));
}
export function eventDate(date: string) { return new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'}).format(new Date(date)); }
