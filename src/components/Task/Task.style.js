import styled from "styled-components";

const StyledTask = styled.a`
  list-style: none;
  font-size: 25px;

  margin: 15px;

  cursor: pointer;

  text-decoration: none;
  color: white;

  user-select: none;

  &.done {
    text-decoration: line-through;
    color: #70406e;
  }
`;
export default StyledTask;
