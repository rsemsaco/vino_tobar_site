export const site = {
 name: 'Vino Tobar', address: 'Avenida da Aclimação, 797 — Aclimação, São Paulo — SP, 01532-000',
 instagram: 'https://www.instagram.com/vinotobar/', storeUrl: null as string | null,
};
export const experience = { formato: null, frequencia: null, preco: null, inclusoes: null, capacidade: null, validado: false };
export type Event = { title: string; start: string; end: string; validado: boolean };
export const events: Event[] = [];
export const catalog = [
 { id: '01', image: 'Catalogo_01_Ariano_Deicas_Oleo', title: 'Uma nova descoberta', description: 'Um convite para conhecer os rótulos da nossa curadoria.', validatedName: null as string | null },
 { id: '02', image: 'Catalogo_02_Bayanegra_Mayor_Oleo', title: 'Para a sua próxima mesa', description: 'Converse com a casa sobre esta seleção e a disponibilidade.', validatedName: null as string | null },
 { id: '03', image: 'Catalogo_03_Jean_Claude_Paul_Mas_Oleo', title: 'O encontro continua', description: 'Encontre o próximo vinho para compartilhar.', validatedName: null as string | null },
];
