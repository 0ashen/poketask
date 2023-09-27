import {Axios} from 'axios';

class PokemonApi {
    private axiosInstance: Axios;

    constructor() {
        this.axiosInstance = new Axios({
            baseURL: 'https://pokeapi.co/api/v2',
        });
    }

    public get req() {
        return this.axiosInstance;
    }
}

export const PokemonApiService = new PokemonApi();