/// <reference types="svelte" />

declare module '../../assets/characters.json' {
    const roles: Role[];
    export default roles;
}

interface Role {
    name: string;
    team: string;
    special: string;
}