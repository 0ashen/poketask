import {useRef, useState} from 'react';
import useSWR from 'swr';
import {pokemonListGet} from '../../api';
import {List, Pagination} from '../../components';
import {Loading, Wrapper} from './styled';

export const HomePage = () => {
    const [offset, setOffset] = useState(0);
    const {data, error, isLoading} = useSWR(
        `/pokemon?offset=${offset}&limit=20}`,
        pokemonListGet,
    );

    const storedData = useRef(data);

    if (data?.results) storedData.current = data;

    if (error) return <>{JSON.stringify(error)}</>;

    const pageCount = storedData.current?.count ? Math.ceil((storedData.current?.count / 20)) : 0;
    const currentPage = (offset + 20) / 20
    console.log('>>>', currentPage, offset);
    return (
        <Wrapper>
            <h1>Test task</h1>
            <List
                data={storedData.current?.results || []}
                loading={isLoading}
            />
            <Pagination
                pokemonsCount={storedData.current?.count || 0}
                pageCount={pageCount}
                currentPage={currentPage}
                setOffset={setOffset}
            />
            <Loading shading={isLoading}>Loading...</Loading>
        </Wrapper>
    );
};
