import bug from '@/public/type_icons/bug.svg';
import dark from '@/public/type_icons/dark.svg';
import flying from '@/public/type_icons/flying.svg'
import dragon from '@/public/type_icons/dragon.svg';
import electric from '@/public/type_icons/electric.svg';
import fairy from '@/public/type_icons/fairy.svg';
import fighting from '@/public/type_icons/fighting.svg';
import fire from '@/public/type_icons/fire.svg';
import ghost from '@/public/type_icons/ghost.svg';
import grass from '@/public/type_icons/grass.svg';
import ground from '@/public/type_icons/ground.svg';
import ice from '@/public/type_icons/ice.svg';
import normal from '@/public/type_icons/normal.svg';
import poison from '@/public/type_icons/poison.svg';
import psychic from '@/public/type_icons/psychic.svg';
import rock from '@/public/type_icons/rock.svg';
import steel from '@/public/type_icons/steel.svg';
import water from '@/public/type_icons/water.svg';
import { StaticImageData } from 'next/image';

// Primero, tipamos el objeto
export const type_icons: Record<
  'bug' | 'dark' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'fire' | 'ghost' | 'grass' | 'ground' | 'ice' | 'normal' | 'poison' | 'psychic' | 'rock' | 'steel' | 'water' | 'flying',
  StaticImageData
> = {
  bug, dark, dragon, electric, fairy, fighting, fire, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water, flying
};
