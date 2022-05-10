import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createToDoActionCreator } from "../../redux/features/toDosSlice";
import FormStyled from "./Form.style";

const Form = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state.toDos);

  const changeDate = (event) => {
    setName(event.target.value);
  };

  const isFormValid = name === "";

  const setHigherId = () => {
    const highestId = toDos.reduce(
      (highestId, toDo) => (toDo.id > highestId ? toDo.id : highestId),
      toDos[0].id
    );

    return highestId + 1;
  };

  const submitForm = (event) => {
    event.preventDefault();
    const id = setHigherId();
    dispatch(createToDoActionCreator({ id, name, done: false }));
    setName("");
  };

  return (
    <FormStyled noValidate autoComplete="off" onSubmit={submitForm}>
      <label htmlFor="name">Task: </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={changeDate}
        placeholder="Add new task..."
      />
      <button type="submit" disabled={isFormValid}>
        Add
      </button>
    </FormStyled>
  );
};

export default Form;
