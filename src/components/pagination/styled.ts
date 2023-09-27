import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-top: 5px;
  margin-top: 10px;
  border-top: 1px solid #000;
  display: flex;
  justify-content: space-between;
`;

export const Pages = styled.div`
  & > button {
    width: 35px;
    height: 25px;
    border: 1px solid rgba(0, 0, 0, 0.53);
    margin: 5px;
    text-align: center;
    line-height: 1.7;
    cursor: pointer;
  }
`;
export const Count = styled.div``;
export const Page = styled.button`
  &.active {
    background: #000;
    color: #fff;
  }
`;
