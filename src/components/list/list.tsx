import React from 'react';
import {PokemonListItem} from '../../api';
import {Item} from '../item';
import {Wrapper} from './styled';

type Props = {
    data: Array<PokemonListItem>;
    loading: boolean;
}
export const List: React.FC<Props> = (props) => {

    return (
        <Wrapper shading={props.loading}>
            {
                props.data.map(el => (
                    <Item
                        name={el.name}
                        url={el.url}
                        key={el.name}
                    />
                ))
            }
        </Wrapper>
    );
};
