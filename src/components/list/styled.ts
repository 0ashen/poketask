import styled from '@emotion/styled';

export const Wrapper = styled.div<{shading:boolean}>`
  opacity: ${({shading}) => shading ? 0 : 1};
  transition: ${({shading}) => shading ? 'opacity 0s ease-in-out' : 'opacity 0.5s ease-in-out'};
`;
