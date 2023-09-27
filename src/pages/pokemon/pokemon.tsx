import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import useSWR from 'swr';
import {pokemonGet} from '../../api';
import {Wrapper} from './styled';

export const Pokemon: React.FC = () => {
    const params = useParams();
    const [offset, setOffset] = useState(0);
    const {data, error, isLoading} = useSWR(
        `/pokemon/${params?.name || 'bulbasaur'}`,
        pokemonGet,
    );
    if (isLoading) return <>Loading ...</>;
    if (error) return <>{JSON.stringify(error)}</>;
    console.log('>>>', data);

    return (
        <Wrapper>
            <Link to={`/`}>Back</Link>
            <img
                src={data?.sprites.front_default || ''}
                alt={data?.name}
                width={200}
                height={200}
            />
            <h3>Name: {data?.name}</h3>
        </Wrapper>
    );
};
