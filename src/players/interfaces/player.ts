export interface Player {
    name:     string;
    position: string;
    traits:   Traits;
}

export interface Traits {
    speed:     number | string;
    shooting:  number | string;
    passing:   number | string;
    defense:   number | string;
    dribbling: number | string;
    physical:  number | string;
}
