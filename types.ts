
export type Language = 'english' | 'arabic' | 'turkish' | 'indonesian';

export interface Alliance {
  id: string;
  tag: string; // Unique short code like 'ASN1'
  name: string;
  logoUrl?: string;
  adminPass: string;
  createdAt: string;
}

export interface Player {
  id: string;
  allianceId: string; // Multi-tenancy key
  createdAt: string; 
  updatedAt: string; 
  language: Language;
  name: string;
  nameNormalized: string;
  
  firstSquadPower: number;
  secondSquadPower?: number;
  thirdSquadPower?: number;
  fourthSquadPower?: number;
  totalHeroPower: number;
  
  heroPercent: number;
  duelPercent: number;
  unitsPercent: number;
  
  t10Morale: number;
  t10Protection: number;
  t10Hp: number;
  t10Atk: number;
  t10Def: number;
  t10Elite: number; 

  // Mastery Tech
  masteryType: 'tank' | 'air' | 'missile' | 'none';
  masteryHp1: number;
  masteryAtk1: number;
  masteryDef1: number;
  masteryDmg1: number;
  masteryMarch1: number;
  masteryHp2: number;
  masteryAtk2: number;
  masteryDef2: number;
  masteryDmg2: number;
  masteryUltDef2: number;

  // Siege to Seize nodes
  siegePb1: number;
  siegeFs1: number;
  siegeFa1: number;
  siegeVf1: number;
  siegeEdg: number;
  siegeBe1: number;
  siegeFt1: number;
  siegeFs2: number;
  siegeFa2: number;
  siegeVf2: number;
  siegeDge: number;
  siegeRm1: number;
  siegeFs3: number;
  siegeFa3: number;
  siegeVf3: number;
  siegeFst1: number;
  
  techLevel: number;
  barracksLevel: number;
  tankCenterLevel: number;
  airCenterLevel: number;
  missileCenterLevel: number;
  
  active: boolean;
}

export interface Announcement {
  id: string;
  allianceId: string;
  content: string;
  type: 'info' | 'warning' | 'critical';
  active: boolean;
  createdAt: string;
}

export type SortOption = 'time_desc' | 'time_asc' | 'power_desc' | 'power_asc' | 'total_hero_power_desc' | 'total_hero_power_asc' | 't10_closest';

export interface PlayerFilter {
  allianceId?: string;
  language: Language | 'all';
  search: string;
  sort: SortOption;
  activeOnly: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  total?: number;
}

export interface AuthResponse {
  token: string;
  alliance: Alliance;
}

export interface VsWeek {
  id: string;
  allianceId: string;
  name: string; 
  createdAt: string;
}

export interface VsRecord {
  id: string;
  weekId: string;
  allianceId: string;
  playerName: string;
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  total: number;
}

export interface DesertStormRegistration {
  id: string;
  playerId: string;
  preference: string;
  createdAt: string;
}
