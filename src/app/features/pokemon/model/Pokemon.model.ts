export interface PokemonWithIndex {
    name: string,
    index: number
}

export interface Pokemon {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    abilities: {
        is_hidden: true,
        slot: number,
        ability: {
            name: string,
            url: string
        }
    }[],
    forms: {
        name: string,
        url: string
    }[],
    game_indices: {
        game_index: number,
        version: {
            name: string,
            url: string
        }
    }[],
    held_items: {
        item: {
            name: string,
            url: string
        },
        version_details: [
            {
                rarity: number,
                version: {
                    name: string,
                    url: string
                }
            }
        ]
    }[],
    location_area_encounters: string,
    moves: any[],
    species: {
        name: string,
        url: string
    },
    sprites: {
        back_default: string | null,
        back_female: string | null,
        back_shiny: string | null,
        back_shiny_female: string | null,
        front_default: string | null,
        front_female: string | null,
        front_shiny: string | null,
        front_shiny_female: string | null,
        other: {
            dream_world: {
                front_default: string | null,
                front_female: string | null
            },
            home: {
                front_default: string | null,
                front_female: string | null,
                front_shiny: string | null,
                front_shiny_female: string | null
            },
            'official-artwork': {
                front_default: string | null
            }
        },
        versions: any
    },
    stats: {
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }[],
    types: {
        slot: number,
        type: {
            name: string,
            url: string
        }
    }[],
    past_types: {
        generation: {
            name: string,
            url: string
        },
        types:
        {
            slot: number,
            type: {
                name: string,
                url: string
            }
        }[]
    }[]
}