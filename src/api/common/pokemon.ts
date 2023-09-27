import {z} from 'zod';

export const PokemonSchema = z.object({
    name: z.string(),
    sprites: z.object({
        back_default: z.string().nullable(),
        back_female: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_female: z.string().nullable(),
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
    }),
});

export type Pokemon = z.infer<typeof PokemonSchema>;