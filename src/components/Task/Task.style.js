import styled from "styled-components";

const StyledTask = styled.a`
  font-size: 25px;
  text-decoration: none;
  color: white;
  margin: 15px;

  cursor: pointer;
  user-select: none;

  &.done {
    text-decoration: line-through;
    color: #70406e;
  }
`;
export default StyledTask;
