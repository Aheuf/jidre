import { BaseStatistiques } from "../BaseStatistique";

export interface CreatureDND {
    image?: string;
    name: string;
    baseStatistique: BaseStatistiques;
    classeArmure?: string;
    competence?: string;
    pv: string;
    vitesse?: string;
    resistance?: string;
    sens: string;
    facteurPuissance: string;
    langues?: string;
    specs?: string[];
    save?: string;
    immuDgt?: string;
    immuEtat?: string;
    action: string[];
    reaction?: string[];
    desc: string;
    vulnerable?: string;
}
