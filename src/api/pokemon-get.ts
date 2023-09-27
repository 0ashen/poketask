import {Pokemon, PokemonSchema} from './common';
import {PokemonApiService} from './services';

export async function pokemonGet(key: string): Promise<Pokemon> {
    const result = await PokemonApiService.req.get<string>(key);

    if (result.status !== 200) {
        throw new Error(`Request failed! with code: ${result.status}, and message: ${result.statusText}`);
    }
    const parsedJson = JSON.parse(result.data) as unknown;

    return PokemonSchema.parse(parsedJson);
}