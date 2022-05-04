import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 500px;
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
