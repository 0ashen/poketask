import React from 'react';
import {Count, Page, Pages, Wrapper} from './styled';

type Props = {
    pokemonsCount: number;
    pageCount: number;
    currentPage: number;
    setOffset: React.Dispatch<React.SetStateAction<number>>;
}
export const Pagination: React.FC<Props> = (props) => {

    const pages = getPages(props.currentPage, props.pageCount);
    return (
        <Wrapper>
            <Pages>
                {/*{props.currentPage > 1 && <button>{'<'}</button>}*/}
                {
                    pages.map(el => {
                        return (
                            <Page
                                onClick={
                                    () => props.setOffset(el * 20 - 20)
                                }
                                className={el === props.currentPage ? 'active' : ''}
                            >
                                {el}
                            </Page>
                        );
                    })
                }

                {/*{props.currentPage > 1 && props.currentPage !== props.pageCount && <button>{'>'}</button>}*/}
            </Pages>
            <Count>
                Total pokemons: {props.pokemonsCount}, on {props.pageCount} pages
            </Count>
        </Wrapper>
    );
};

function getPages(currentPage: number, pageCount: number): Array<number> {
    const pages = [];

    let beforeGap = 2;
    if (currentPage + 1 == pageCount) beforeGap = 3;
    if (currentPage == pageCount) beforeGap = 4;

    for (
        let i = currentPage - beforeGap, gap = 5;
        gap > 0;
        i++
    ) {
        if (i > pageCount) break;
        if (i > 0) {
            gap--;
            pages.push(i);
        }
    }

    return pages;
}