import { useDispatch } from "react-redux";
import {
  deleteToDoActionCreator,
  toggleToDoActionCreator,
} from "../../redux/features/toDosSlice";
import DeleteButton from "../DeleteButton/DeleteButton";
import StyledTask from "./Task.style";

const Task = ({ id, name, done }) => {
  const dispatch = useDispatch();

  const deleteToDo = () => {
    dispatch(deleteToDoActionCreator(id));
  };

  const toggleDone = (event) => {
    event.preventDefault();
    dispatch(toggleToDoActionCreator(id));
  };

  return (
    <>
      <DeleteButton text="✗" id={id} actionOnClick={deleteToDo} />
      <StyledTask className={done ? "done" : ""} onClick={toggleDone}>
        {name}
      </StyledTask>
    </>
  );
};

export default Task;
