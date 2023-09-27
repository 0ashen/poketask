import {z} from 'zod';
import {PokemonListItemSchema} from './common';
import {PokemonApiService} from './services';
import {createPaginatedResponseSchema} from './utils';

const ResultListSchema = createPaginatedResponseSchema(PokemonListItemSchema);
type ResultList = z.infer<typeof ResultListSchema>;

export async function pokemonListGet(key: string): Promise<ResultList> {
    const result = await PokemonApiService.req.get<string>(key);
    if (result.status !== 200) {
        throw new Error(`Request failed! with code: ${result.status}, and message: ${result.statusText}`);
    }
    const parsedJson = JSON.parse(result.data) as unknown;

    return ResultListSchema.parse(parsedJson);
}