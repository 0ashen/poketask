import {z} from 'zod';

export const PokemonListItemSchema = z.object({
    name: z.string(),
    url: z.string(),
});

export type PokemonListItem = z.infer<typeof PokemonListItemSchema>;