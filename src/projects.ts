export type Language = 'en' | 'es';
export type ReleaseStatus = 'In Development' | 'Prototype' | 'Alpha' | 'Beta' | 'Released';
export interface Project { title: string; slug: string; status: ReleaseStatus | null; platforms: string[]; screenshots: string[]; links: {label:string;url:string}[] }
// Only the names were supplied. Do not infer genre, platform, progress, or release.
export const projects: Project[] = [
 ['Núcleo Neón','nucleo-neon'], ['Rivet Circuit','rivet-circuit'], ['CHIPBOTS','chipbots'],
 ['Powerwash Dungeon','powerwash-dungeon'], ['Shadow Market','shadow-market'], ['Evo Arena','evo-arena'],
 ['Infinite Realities: Void Architect','infinite-realities-void-architect'], ['WOLF','wolf'],
 ['Aster Vaults','aster-vaults'], ['Cosmic Restorations','cosmic-restorations']
].map(([title,slug]) => ({title,slug,status:null,platforms:[],screenshots:[],links:[]}));
export const creator = {name:'Felipe Antonio Toledo Alcalde', alias:'Zarocer', url:'https://zarocer.com'};
export const publicContact: {general:string|null;press:string|null;support:string|null} = {general:null,press:null,support:null};
export const socialLinks: {label:string;url:string}[] = []; // Publish only owner-confirmed public profiles.
