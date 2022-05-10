import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section, Title } from "./App.style";
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";
import toDosData from "./data/toDosData";
import { loadToDosActionCreator } from "./redux/features/toDosSlice";

const App = () => {
  const toDos = useSelector((state) => state.toDos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDosActionCreator(toDosData));
  }, [dispatch]);

  return (
    <>
      <Title>To Do List</Title>

      <Section>
        <Form />
      </Section>

      <Section>
        <ul>
          {toDos.map(({ id, name, done }) => (
            <li key={id}>
              <Task id={id} name={name} done={done}></Task>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default App;
