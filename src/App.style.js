import styled from "styled-components";

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;

  .task {
    display: flex;

    padding: 0;
    margin: 0;
  }
`;

export const Title = styled.h1`
  margin-top: 50px;
  margin-bottom: 40px;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80vw;
`;
