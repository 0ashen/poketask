import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 25px;
`;

export const Loading = styled.div<{shading: boolean;}>`
  height: 50px;
  opacity: ${({shading}) => shading ? 1 : 0};
  transition: ${({shading}) => shading ? 'opacity 0s ease-in-out' : 'opacity 0.5s ease-in-out'};
  display: flex;
  align-items: center;
`;
