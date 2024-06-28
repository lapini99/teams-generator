export interface Player {
    name:     string;
    position: string;
    traits:   Traits;
}

export interface Traits {
    speed:     number;
    shooting:  number;
    passing:   number;
    defense:   number;
    dribbling: number;
    physical:  number;
}
