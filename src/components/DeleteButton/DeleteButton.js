import DeleteButtonStyled from "./DeleteButton.style";

const DeleteButton = ({ text, actionOnClick }) => {
  return (
    <DeleteButtonStyled onClick={actionOnClick}>{text}</DeleteButtonStyled>
  );
};

export default DeleteButton;
