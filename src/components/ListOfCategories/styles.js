import styled from "styled-components";
export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  background-color: #c1c1c1;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Item = styled.li`
  padding: 0px 8px;
`;
