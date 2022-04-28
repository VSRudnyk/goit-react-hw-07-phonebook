import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 0;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 350px;
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
