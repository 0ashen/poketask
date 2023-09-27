import React from 'react';
import {Link} from 'react-router-dom';
import {Wrapper} from './styled';

type Props = {
    name: string;
    url: string;
}
export const Item: React.FC<Props> = (props) => {
    return (
        <Wrapper>
            <Link to={`pokemon/${props.name}`}>{props.name}</Link>
        </Wrapper>
    );
};