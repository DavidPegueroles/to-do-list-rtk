import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;

  color: white;

  label {
    margin-bottom: 5px;
    font-size: 25px;
  }
  input {
    margin-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    width: 250px;
    height: 40px;

    font-size: 17px;
    background-color: transparent;
    color: white;
    border: 3px solid #d179cd;
    border-radius: 5px;
  }

  input::placeholder {
    color: #70406e;
  }

  button {
    font-size: 20px;
    width: 100px;
    margin-bottom: 30px;

    background-color: transparent;
    color: white;
    border: 3px solid #d179cd;
    border-radius: 10px;
    cursor: pointer;
  }
  button:disabled {
    border: 3px solid #70406e;
    color: #70406e;
    cursor: default;
  }
`;

export default Form;
